// server.js - Combined server for Dashboard and Web Bot (WITHOUT WhatsApp)
require('dotenv').config();

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 10000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://cdnjs.cloudflare.com"],
      fontSrc: ["'self'", "https://cdnjs.cloudflare.com", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"]
    }
  }
}));

// Performance middleware
app.use(compression());
app.use(morgan('combined'));

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// ==================== IMPORT MODULES ====================
const learningDb = require('./learningDb');
const studentRegistration = require('./studentRegistration');

// Initialize web-bot WITHOUT WhatsApp dependencies
let WebBot;
try {
  // Remove WhatsApp specific imports from web-bot.js first
  WebBot = require('./web-bot');
  console.log('✅ Web Bot module loaded');
} catch (error) {
  console.log('⚠️  Web Bot module not available, continuing with dashboard only');
  WebBot = null;
}

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
    console.error('Dashboard error:', error);
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
    console.error('Student details error:', error);
    res.status(500).render('error', { 
      title: 'Error - Charles Academy',
      message: 'Unable to load student details'
    });
  }
});

// ==================== WEB BOT ROUTES ====================
// Web Bot home page
app.get('/bot', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Web Bot API endpoint
app.post('/api/send', async (req, res) => {
  try {
    const { message, sessionId } = req.body;
    
    if (!message || !sessionId) {
      return res.status(400).json({
        success: false,
        error: 'Message and sessionId are required'
      });
    }
    
    // If WebBot is available, use it
    if (WebBot) {
      const response = await WebBot.handleWebMessage(sessionId, message);
      return res.json({
        success: true,
        sessionId: response.userId,
        response: response.message,
        userStatus: response.userStatus
      });
    } else {
      // Simple fallback response
      return res.json({
        success: true,
        sessionId: sessionId,
        response: `🤖 Hello! I'm Charles Academy Bot.\n\nType MENU to see options or Hi to start.`,
        userStatus: 'unregistered'
      });
    }
  } catch (error) {
    console.error('API send error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get user info
app.get('/api/user/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    
    if (!sessionId) {
      return res.json({ success: false, error: 'Session ID required' });
    }
    
    const jid = `web_${sessionId}@web.chat`;
    const { isRegistered, student } = await studentRegistration.isStudentRegistered(jid);
    
    res.json({
      success: true,
      registered: isRegistered,
      studentData: student || null,
      language: 'en'
    });
  } catch (error) {
    console.error('User info error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Reset session
app.post('/api/reset', (req, res) => {
  try {
    const { sessionId } = req.body;
    res.json({
      success: true,
      message: 'Session reset successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==================== HEALTH CHECK ====================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'Charles Academy Dashboard & Web Bot',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: '2.0.0'
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
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: Get dashboard stats
app.get('/api/stats', async (req, res) => {
  try {
    const stats = await studentRegistration.getDashboardStats();
    res.json({ success: true, stats: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
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
  console.error('Server error:', error);
  res.status(500).render('error', {
    title: 'Server Error - Charles Academy',
    message: 'An unexpected error occurred. Please try again later.'
  });
});

// ==================== START SERVER ====================
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
  console.log('='.repeat(60));
  console.log('\n🚀 Server is ready!');
  console.log('🔐 Running on PORT:', PORT);
  console.log('\nPress Ctrl+C to stop\n');
});