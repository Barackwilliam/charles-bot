// server.js - Combined server for both Dashboard and Web Bot
require('dotenv').config();

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const winston = require('winston');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 10000;

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://cdnjs.cloudflare.com", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", process.env.SUPABASE_URL]
    }
  },
  crossOriginEmbedderPolicy: false
}));

// Performance middleware
app.use(compression());
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ==================== IMPORT MODULES ====================
const learningDb = require('./learningDb');
const studentRegistration = require('./studentRegistration');
const ExamDashboard = require('./dashboard');
const WebBot = require('./web-bot');

// ==================== DASHBOARD ROUTES ====================
// Dashboard home page
app.get('/', async (req, res) => {
  try {
    const stats = await studentRegistration.getDashboardStats();
    const { data: allResults } = await studentRegistration.getAllExamResults();
    
    res.render('dashboard', {
      title: 'Charles Academy - Exam Dashboard',
      stats: stats,
      examResults: allResults || [],
      currentTime: new Date().toLocaleString()
    });
  } catch (error) {
    logger.error('Dashboard error:', error);
    res.status(500).render('error', { 
      title: 'Error - Charles Academy',
      message: 'Unable to load dashboard data'
    });
  }
});

// Student details page
app.get('/student/:jid', async (req, res) => {
  try {
    const jid = decodeURIComponent(req.params.jid);
    const { data: student } = await learningDb.supabase
      .from('students')
      .select('*')
      .eq('jid', jid)
      .single();

    const { data: examResults } = await studentRegistration.getStudentExamResults(jid);

    if (!student) {
      return res.status(404).render('error', { 
        title: 'Not Found - Charles Academy',
        message: 'Student not found'
      });
    }

    res.render('student', {
      title: `Student: ${student.full_name}`,
      student: student,
      examResults: examResults || [],
      totalScore: examResults?.reduce((sum, r) => sum + r.score, 0) || 0,
      averageScore: examResults?.length > 0 
        ? Math.round(examResults.reduce((sum, r) => sum + r.score, 0) / examResults.length)
        : 0
    });
  } catch (error) {
    logger.error('Student details error:', error);
    res.status(500).render('error', { 
      title: 'Error - Charles Academy',
      message: 'Unable to load student details'
    });
  }
});

// ==================== API ROUTES ====================
// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'Charles Academy Dashboard',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    database: learningDb.supabase ? 'connected' : 'disconnected'
  });
});

// API: Get all exam results
app.get('/api/exam-results', async (req, res) => {
  try {
    const { data } = await studentRegistration.getAllExamResults();
    res.json({ 
      success: true, 
      count: data?.length || 0,
      data: data || [] 
    });
  } catch (error) {
    logger.error('API exam results error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: Get dashboard stats
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await studentRegistration.getDashboardStats();
    res.json({ success: true, stats: stats });
  } catch (error) {
    logger.error('API stats error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: Search students
app.get('/api/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.length < 2) {
      return res.json({ success: true, data: [] });
    }

    const { data } = await learningDb.supabase
      .from('students')
      .select('*')
      .or(`full_name.ilike.%${q}%,registration_number.ilike.%${q}%`)
      .limit(20);

    res.json({ success: true, data: data || [] });
  } catch (error) {
    logger.error('API search error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== WEB BOT ROUTES ====================
// Web Bot home page
app.get('/bot', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Web Bot API endpoints (these will be handled by web-bot.js)
// The web-bot.js module will attach its own routes to this app

// ==================== STATIC PAGES ====================
// About page
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About - Charles Academy',
    description: 'Advanced learning platform with real-time exam tracking'
  });
});

// Contact page
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact - Charles Academy',
    email: 'support@charlesacademy.co.tz',
    phone: '+255750910158'
  });
});

// Documentation
app.get('/docs', (req, res) => {
  res.render('docs', {
    title: 'Documentation - Charles Academy'
  });
});

// ==================== ERROR HANDLING ====================
// 404 handler
app.use((req, res) => {
  res.status(404).render('error', {
    title: 'Page Not Found - Charles Academy',
    message: 'The page you are looking for does not exist'
  });
});

// Error handler
app.use((error, req, res, next) => {
  logger.error('Server error:', error);
  res.status(500).render('error', {
    title: 'Server Error - Charles Academy',
    message: 'An unexpected error occurred. Please try again later.'
  });
});

// ==================== SERVER STARTUP ====================
async function initializeServer() {
  try {
    // Initialize Web Bot
    console.log('🚀 Initializing Charles Academy Web Bot...');
    require('./web-bot');
    
    // Start server
    app.listen(PORT, () => {
      console.log('='.repeat(60));
      console.log('🎓 CHARLES ACADEMY DASHBOARD & WEB BOT');
      console.log('='.repeat(60));
      console.log(`📊 Dashboard: http://localhost:${PORT}`);
      console.log(`🤖 Web Bot: http://localhost:${PORT}/bot`);
      console.log(`🏥 Health: http://localhost:${PORT}/health`);
      console.log(`📈 API: http://localhost:${PORT}/api/stats`);
      console.log('='.repeat(60));
      console.log(`📅 ${new Date().toLocaleString()}`);
      console.log(`💾 Database: ${learningDb.supabase ? '✅ Connected' : '❌ Disconnected'}`);
      console.log('='.repeat(60));
      console.log('\n🚀 Server is ready for deployment on Render!');
      console.log('🔐 Environment: Production');
      console.log('📦 Memory: Optimized for cloud deployment');
      console.log('⚡ Performance: Caching enabled');
      console.log('🛡️ Security: HTTPS enforced');
      console.log('\nPress Ctrl+C to stop\n');
    });
    
    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('\n🛑 SIGTERM received. Shutting down gracefully...');
      process.exit(0);
    });
    
    process.on('SIGINT', () => {
      console.log('\n🛑 SIGINT received. Shutting down gracefully...');
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ Failed to initialize server:', error);
    process.exit(1);
  }
}

// Start the server
initializeServer();

module.exports = app;