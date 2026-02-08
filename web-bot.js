// web-bot.js - Charles Academy Web Bot (Enhanced Version with Test Handler and LEARN Feature)
// ==================== LOAD ENVIRONMENT VARIABLES ====================
require('dotenv').config();

// ==================== WEB SERVER SETUP ====================
const express = require('express');
const app = express();
const PORT = process.env.WEB_PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// CORS for web access
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// ==================== IMPORT MODULES ====================
const studentRegistration = require('./studentRegistration');
const learningDb = require('./learningDb');
const examHandler = require('./examHandler');
const learningSession = require('./learningSession');
const learningCommands = require('./learningCommands');
const testHandler = require('./testHandler');
const testsData = require('./testsData');
const learnHandler = require('./learnHandler'); // ADDED: Learn Handler
const learnsData = require('./learnsData'); // ADDED: Learns Data

// ==================== WEB BOT CORE ====================
class WebBot {
    constructor() {
        console.log('🚀 Initializing Charles Academy Web Bot...');
        
        // Store web users (same structure as WhatsApp users)
        this.webUsers = new Map();
        
        // Setup Express routes
        this.setupRoutes();
    }
    
    setupRoutes() {
        // Home page
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/public/index.html');
        });
        
        // Health check endpoint
        app.get('/health', (req, res) => {
            res.status(200).json({ 
                status: 'healthy', 
                bot: 'Charles Academy Web Bot',
                version: '2.7.0', // Updated version
                timestamp: new Date().toISOString(),
                features: 'Full WhatsApp Bot functionality without WhatsApp',
                database: 'Connected (Same as WhatsApp bot)',
                modules: ['registration', 'learning', 'exam', 'test', 'exercises', 'daily_lessons'] // Added daily_lessons
            });
        });
        
        // Bot info endpoint
        app.get('/info', (req, res) => {
            res.status(200).json({
                name: 'Charles Academy Web Bot',
                academy: 'Charles Academy',
                support: '+255750910158',
                owner: '+255750910158',
                database: 'Connected (Supabase)',
                status: 'operational',
                users: this.webUsers.size,
                activeTests: testHandler.testSessions.size,
                activeExams: examHandler.examSessions ? examHandler.examSessions.size : 0,
                activeLearning: learnHandler.userStates ? learnHandler.userStates.size : 0 // Added
            });
        });
        
        // API: Send message (CORE FUNCTIONALITY)
        app.post('/api/send', async (req, res) => {
            try {
                const { message, sessionId } = req.body;
                
                if (!message || message.trim() === '') {
                    return res.json({
                        success: false,
                        error: 'Message cannot be empty'
                    });
                }
                
                console.log(`🌐 Web message from ${sessionId || 'new user'}: "${message}"`);
                
                // Process message
                const response = await this.handleWebMessage(sessionId, message.trim());
                
                res.json({
                    success: true,
                    sessionId: response.userId,
                    response: response.message,
                    timestamp: new Date().toISOString(),
                    userStatus: response.userStatus
                });
                
            } catch (error) {
                console.error('API Error:', error);
                res.status(500).json({
                    success: false,
                    error: 'Internal server error'
                });
            }
        });
        
        // API: Get user info
        app.get('/api/user/:sessionId', async (req, res) => {
            try {
                const { sessionId } = req.params;
                
                if (!sessionId) {
                    return res.json({
                        success: false,
                        error: 'Session ID required'
                    });
                }
                
                const jid = `web_${sessionId}@web.chat`;
                const user = this.webUsers.get(jid);
                
                if (user) {
                    // Check registration status
                    const { isRegistered, data } = await studentRegistration.isStudentRegistered(jid);
                    
                    res.json({
                        success: true,
                        registered: isRegistered,
                        studentData: data || null,
                        language: user.language || 'en',
                        lastActive: user.lastActive,
                        activeTest: testHandler.getActiveTestInfo(jid),
                        activeExam: examHandler.hasActiveExam ? examHandler.hasActiveExam(jid) : false,
                        activeLearning: learnHandler.userStates ? learnHandler.userStates.has(jid) : false // Added
                    });
                } else {
                    res.json({
                        success: true,
                        registered: false,
                        language: 'en'
                    });
                }
                
            } catch (error) {
                console.error('User info error:', error);
                res.status(500).json({
                    success: false,
                    error: 'Internal server error'
                });
            }
        });
        
        // API: Reset session
        app.post('/api/reset', (req, res) => {
            try {
                const { sessionId } = req.body;
                
                if (sessionId) {
                    const jid = `web_${sessionId}@web.chat`;
                    
                    // Clear all states
                    if (this.webUsers.has(jid)) {
                        this.webUsers.delete(jid);
                    }
                    
                    if (examHandler.cancelExam) {
                        examHandler.cancelExam(jid);
                    }
                    
                    if (learningSession.clearSession) {
                        learningSession.clearSession(jid);
                    }
                    
                    if (testHandler.cancelTest) {
                        testHandler.cancelTest(jid);
                    }
                    
                    if (testHandler.clearUserState) {
                        testHandler.clearUserState(jid);
                    }
                    
                    // Clear learn handler state
                    if (learnHandler.clearUserState) {
                        learnHandler.clearUserState(jid);
                    }
                    
                    // Clear registration state
                    if (studentRegistration.registrationState) {
                        delete studentRegistration.registrationState[jid];
                    }
                }
                
                res.json({
                    success: true,
                    message: 'Session reset successfully'
                });
                
            } catch (error) {
                console.error('Reset error:', error);
                res.status(500).json({
                    success: false,
                    error: 'Internal server error'
                });
            }
        });
        
        // API: Get user history
        app.get('/api/history/:sessionId', (req, res) => {
            try {
                const { sessionId } = req.params;
                const jid = `web_${sessionId}@web.chat`;
                const user = this.webUsers.get(jid);
                
                res.json({
                    success: true,
                    history: user?.history || []
                });
                
            } catch (error) {
                console.error('History error:', error);
                res.status(500).json({
                    success: false,
                    error: 'Internal server error'
                });
            }
        });
        
        // API: Get available tests
        app.get('/api/tests', (req, res) => {
            try {
                const language = req.query.lang || 'en';
                const tests = [];
                
                Object.keys(testsData).forEach(key => {
                    const test = testsData[key];
                    tests.push({
                        id: key,
                        title: test.title[language] || test.title.en,
                        time: test.time,
                        totalMarks: test.totalMarks,
                        level: key === '1' ? 'Beginner' : 
                               key === '2' ? 'Intermediate' : 
                               key === '3' ? 'Advanced' : 'Expert',
                        questions: test.questions.length
                    });
                });
                
                res.json({
                    success: true,
                    tests: tests
                });
                
            } catch (error) {
                console.error('Tests API error:', error);
                res.status(500).json({
                    success: false,
                    error: 'Internal server error'
                });
            }
        });
        
        // API: Get available courses for learning
        app.get('/api/courses/learn', (req, res) => {
            try {
                const language = req.query.lang || 'en';
                const courses = learnHandler.getCourses(language);
                
                res.json({
                    success: true,
                    courses: courses
                });
                
            } catch (error) {
                console.error('Courses API error:', error);
                res.status(500).json({
                    success: false,
                    error: 'Internal server error'
                });
            }
        });
        
        // Start Express server
        this.startServer();
    }
    
    startServer() {
        app.listen(PORT, () => {
            console.log('='.repeat(60));
            console.log('🌐 CHARLES ACADEMY WEB BOT (ENHANCED WITH LEARN)');
            console.log('='.repeat(60));
            console.log(`📱 URL: http://localhost:${PORT}`);
            console.log(`🔗 API: http://localhost:${PORT}/api/send`);
            console.log(`🏥 Health: http://localhost:${PORT}/health`);
            console.log(`ℹ️ Info: http://localhost:${PORT}/info`);
            console.log(`🧪 Tests: http://localhost:${PORT}/api/tests`);
            console.log(`📚 Learn: http://localhost:${PORT}/api/courses/learn`);
            console.log('='.repeat(60));
            console.log(`🎯 Features: Full WhatsApp Bot functionality`);
            console.log(`📊 Database: Same database as WhatsApp bot`);
            console.log(`👥 Users: Web users stored with prefix "web_"`);
            console.log(`📝 Tests: 4 levels (Beginner to Expert)`);
            console.log(`🎓 Exams: Full exam system`);
            console.log(`📚 LEARN: Daily lessons with Google Drive links`);
            console.log('='.repeat(60));
            console.log('\n🚀 Web Bot is ready! Users can access directly via browser.');
            console.log('🔑 No WhatsApp scanning required!');
            console.log('\n📝 Press Ctrl+C to stop the server\n');
        });
    }
    
    // ============================================
    // CORE MESSAGE HANDLER - WITH TEST HANDLER INTEGRATION
    // ============================================
    async handleWebMessage(sessionId, text) {
        // Generate or use session ID
        let userId = sessionId;
        if (!userId || !this.webUsers.has(`web_${userId}@web.chat`)) {
            userId = this.generateSessionId();
        }
        
        // Convert to WhatsApp JID format for compatibility
        const jid = `web_${userId}@web.chat`;
        
        // Ensure user exists in our map
        this.ensureUserExists(jid);
        const user = this.webUsers.get(jid);
        
        // Update last active
        user.lastActive = new Date().toISOString();
        
        // ======================================
        // STEP 1: CHECK REGISTRATION
        // ======================================
        if (studentRegistration.isRegistering(jid)) {
            console.log(`📝 Web user ${userId} is registering`);
            const response = await studentRegistration.handleRegistrationStep(jid, text, user.language);
            
            // Save to history
            this.saveToHistory(jid, text, response);
            
            // Check if registration completed
            if (response.includes('completed successfully')) {
                user.registered = true;
                const { data } = await studentRegistration.isStudentRegistered(jid);
                user.studentData = data;
            }
            
            return {
                userId: userId,
                message: response,
                userStatus: user.registered ? 'registered' : 'registering'
            };
        }
        
        // ======================================
        // STEP 2: CHECK IF USER IS REGISTERED
        // ======================================
        const { isRegistered, data } = await studentRegistration.isStudentRegistered(jid);
        console.log(`🔍 Registration check for ${userId}: ${isRegistered ? '✅ Registered' : '❌ Not registered'}`);
        
        if (!isRegistered) {
            // Allow greetings to trigger registration
            if (text.toLowerCase().match(/^(hi|hello|hey|hujambo|bonjour|salut|mambo|start)/)) {
                console.log(`🎯 Greeting detected, starting registration for ${userId}`);
                const registrationMsg = studentRegistration.startRegistration(jid, user.language);
                
                this.saveToHistory(jid, text, registrationMsg);
                
                return {
                    userId: userId,
                    message: registrationMsg,
                    userStatus: 'registering'
                };
            }
            
            // For any other message, start registration
            const response = `🎓 Welcome to Charles Academy! Please type "Hi" to begin your registration and start learning.`;
            this.saveToHistory(jid, text, response);
            
            return {
                userId: userId,
                message: response,
                userStatus: 'unregistered'
            };
        }
        
        // ======================================
        // STEP 3: USER IS REGISTERED - PROCESS
        // ======================================
        console.log(`✅ User ${userId} is registered, processing command...`);
        
        // Update user data
        user.registered = true;
        user.studentData = data;
        
        const upperText = text.toUpperCase().trim();
        
        // ======================================
        // LANGUAGE SELECTION
        // ======================================
        if (upperText === 'ENGLISH') {
            user.language = 'en';
            await learningDb.setStudentLanguage(jid, 'en');
            const response = `✅ Language set to English 🇬🇧\n\nWelcome to Charles Academy! Type MENU to see options.`;
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'KISWAHILI') {
            user.language = 'sw';
            await learningDb.setStudentLanguage(jid, 'sw');
            const response = `✅ Lugha imewekwa kwa Kiswahili 🇹🇿\n\nKaribu kwenye Charles Academy! Andika MENU kuona chaguo.`;
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'FRANÇAIS' || upperText === 'FRANCAIS') {
            user.language = 'fr';
            await learningDb.setStudentLanguage(jid, 'fr');
            const response = `✅ Langue définie en Français 🇫🇷\n\nBienvenue à Charles Academy! Tapez MENU pour voir les options.`;
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // CHECK FOR ACTIVE LEARNING (NEW!)
        // ======================================
        if (learnHandler.userStates && learnHandler.userStates.has(jid)) {
            const learnState = learnHandler.userStates.get(jid);
            if (learnState && learnState.step !== 'selecting_course') {
                console.log(`📚 User ${userId} is in learning session`);
                const response = await this.handleLearnResponse(jid, text, user.language);
                this.saveToHistory(jid, text, response);
                return {
                    userId: userId,
                    message: response,
                    userStatus: 'registered'
                };
            }
        }
        
        // ======================================
        // CHECK FOR ACTIVE TEST
        // ======================================
        if (testHandler.hasActiveTest(jid)) {
            console.log(`🧪 User ${userId} has active test`);
            const response = await this.handleTestResponse(jid, text, user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // CHECK FOR ACTIVE EXAM
        // ======================================
        if (examHandler.hasActiveExam && examHandler.hasActiveExam(jid)) {
            console.log(`📝 User ${userId} has active exam`);
            const response = await this.handleExamResponse(jid, text, user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // MAIN KEYWORDS
        // ======================================
        if (upperText === 'MENU') {
            const response = this.getMenuText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'HELP') {
            const response = this.getHelpText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'SUPPORT') {
            const response = this.getSupportText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'PROGRESS') {
            const progress = await learningDb.getStudentStats(jid);
            const response = this.getProgressText(user.language, progress);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'COURSES') {
            const courses = await learningDb.getCourses(user.language);
            const response = this.getCoursesText(user.language, courses.data || []);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // LEARN COMMAND (UPDATED!)
        // ======================================
        if (upperText === 'LEARN') {
            console.log(`📚 Starting learning system for ${userId}`);
            learnHandler.initUserState(jid);
            const userState = learnHandler.userStates.get(jid);
            userState.step = 'selecting_course';
            userState.language = user.language;
            
            const response = learnHandler.getCoursesMenu(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'EXAM') {
            console.log(`🎓 Starting exam system for ${userId}`);
            examHandler.initUserState(jid);
            const userState = examHandler.userStates.get(jid);
            userState.step = 'selecting_course';
            userState.language = user.language;
            
            const response = examHandler.getExamMenu(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // TEST COMMAND
        // ======================================
        if (upperText === 'TEST') {
            console.log(`🧪 Starting test system for ${userId}`);
            testHandler.initUserState(jid);
            const userState = testHandler.userStates.get(jid);
            userState.step = 'selecting_test';
            userState.language = user.language;
            
            const response = testHandler.getTestMenu(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // DIRECT COURSE SELECTION (NEW!)
        // ======================================
        const courseMap = {
            'ENGLISH LANGUAGE': 'ENGLISH LANGUAGE',
            'KISWAHILI LANGUAGE': 'KISWAHILI LANGUAGE',
            'WEB DESIGN': 'WEB DESIGN',
            'GRAPHIC DESIGN': 'GRAPHIC DESIGN',
            'ENGLISH': 'ENGLISH LANGUAGE',
            'KISWAHILI': 'KISWAHILI LANGUAGE',
            'WEB': 'WEB DESIGN',
            'GRAPHICS': 'GRAPHIC DESIGN'
        };
        
        if (courseMap[upperText]) {
            console.log(`📚 Direct course selection: ${upperText} for ${userId}`);
            learnHandler.initUserState(jid);
            const userState = learnHandler.userStates.get(jid);
            userState.selectedCourse = courseMap[upperText];
            userState.step = 'selecting_day';
            userState.language = user.language;
            
            const response = learnHandler.getDaysMenu(courseMap[upperText], user.language, jid);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // Handle direct test commands
        const testMap = {
            'TEST 1': '1',
            'TEST 2': '2', 
            'TEST 3': '3',
            'TEST 4': '4',
            'TEST BEGINNER': '1',
            'TEST INTERMEDIATE': '2',
            'TEST ADVANCED': '3',
            'TEST EXPERT': '4'
        };
        
        if (testMap[upperText]) {
            console.log(`🧪 Direct test command: ${upperText} for ${userId}`);
            testHandler.initUserState(jid);
            const userState = testHandler.userStates.get(jid);
            userState.selectedTest = testMap[upperText];
            userState.language = user.language;
            
            const response = await this.handleTestSelection(jid, testMap[upperText], user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // HANDLE LEARNING RESPONSES (NEW!)
        // ======================================
        if (learnHandler.userStates.has(jid) && learnHandler.userStates.get(jid).step !== 'selecting_course') {
            const response = await this.handleLearnResponse(jid, text, user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // HANDLE TEST RESPONSES
        // ======================================
        if (testHandler.hasActiveTest(jid) || 
            (testHandler.userStates.has(jid) && testHandler.userStates.get(jid).step !== 'idle')) {
            
            const response = await this.handleTestResponse(jid, text, user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // HANDLE EXAM RESPONSES
        // ======================================
        if ((examHandler.hasActiveExam && examHandler.hasActiveExam(jid)) || 
            (examHandler.userStates && examHandler.userStates.has(jid) && examHandler.userStates.get(jid).step !== 'idle')) {
            
            const response = await this.handleExamResponse(jid, text, user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // OLD COMMANDS (FOR COMPATIBILITY)
        // ======================================
        if (upperText === 'EXERCISE') {
            const response = this.getExerciseText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // Exercise types
        if (upperText === 'ENGLISH EXERCISE') {
            const response = await this.startExercise(jid, '1', user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'KISWAHILI EXERCISE') {
            const response = await this.startExercise(jid, '2', user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'GRAPHICS EXERCISE') {
            const response = await this.startExercise(jid, '3', user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        if (upperText === 'WEB EXERCISE') {
            const response = await this.startExercise(jid, '4', user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // READY COMMAND
        // ======================================
        if (upperText === 'READY') {
            const session = learningSession.getSession(jid);
            if (session.currentActivity) {
                const firstQuestion = learningSession.getCurrentQuestion(jid);
                if (firstQuestion) {
                    const response = await this.sendQuestion(jid, firstQuestion, session, user.language);
                    this.saveToHistory(jid, text, response);
                    return {
                        userId: userId,
                        message: response,
                        userStatus: 'registered'
                    };
                }
            }
        }
        
        // ======================================
        // CANCEL COMMAND
        // ======================================
        if (upperText === 'CANCEL' || upperText === 'STOP') {
            learningSession.clearSession(jid);
            if (examHandler.cancelExam) examHandler.cancelExam(jid);
            if (testHandler.cancelTest) testHandler.cancelTest(jid);
            if (testHandler.clearUserState) testHandler.clearUserState(jid);
            if (learnHandler.clearUserState) learnHandler.clearUserState(jid);
            
            const response = this.getCancelText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // GREETINGS
        // ======================================
        if (text.toLowerCase().match(/^(hi|hello|hey|hujambo|bonjour|salut|mambo)/)) {
            const response = this.getWelcomeText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // LANGUAGE SELECTION REQUEST
        // ======================================
        if (text.toLowerCase().match(/^(language|lugha|langue|change language)/)) {
            const response = this.getLanguageSelectionText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // HANDLE OLD SESSION RESPONSES
        // ======================================
        const session = learningSession.getSession(jid);
        if (session.currentActivity && text.length > 0) {
            const response = await this.handleSessionResponse(jid, text, session, user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // ======================================
        // DEFAULT RESPONSE
        // ======================================
        if (text.length > 2) {
            const response = this.getDefaultResponseText(user.language);
            this.saveToHistory(jid, text, response);
            return {
                userId: userId,
                message: response,
                userStatus: 'registered'
            };
        }
        
        // Final fallback
        const response = "Type 'Hi' to get started or 'MENU' to see options!";
        this.saveToHistory(jid, text, response);
        return {
            userId: userId,
            message: response,
            userStatus: user.registered ? 'registered' : 'unregistered'
        };
    }
    
    // ============================================
    // LEARN HANDLING (NEW!)
    // ============================================
    async handleLearnResponse(jid, text, language) {
        const upperText = text.toUpperCase().trim();
        
        // Handle CANCEL
        if (upperText === 'CANCEL' || upperText === 'STOP') {
            const response = learnHandler.cancelLearning(jid);
            learnHandler.clearUserState(jid);
            return response;
        }
        
        // Handle through learnHandler
        const result = learnHandler.handleUserInput(jid, text, language);
        
        if (!result || !result.type) {
            return learnHandler.getErrorResponse(language);
        }
        
        switch (result.type) {
            case 'show_courses':
            case 'show_days':
            case 'show_drive_link':
            case 'access_denied':
            case 'already_accessed':
            case 'error':
                return result.data;
                
            case 'show_progress':
                return result.data;
                
            default:
                return learnHandler.getErrorResponse(language);
        }
    }
    
    // ============================================
    // TEST HANDLING
    // ============================================
    async handleTestResponse(jid, text, language) {
        const upperText = text.toUpperCase().trim();
        
        // Handle CANCEL
        if (upperText === 'CANCEL' || upperText === 'STOP') {
            testHandler.cancelTest(jid);
            testHandler.clearUserState(jid);
            return this.getCancelText(language);
        }
        
        // Handle through testHandler
        const result = testHandler.handleUserInput(jid, text, language);
        
        if (!result || !result.type) {
            return this.getErrorText(language);
        }
        
        switch (result.type) {
            case 'show_menu':
            case 'test_cancelled':
            case 'invalid_choice':
            case 'error':
                return result.data;
                
            case 'test_started':
                return result.data;
                
            case 'test_response':
                const answerResult = testHandler.submitAnswer(jid, text);
                
                if (answerResult.error) {
                    return this.getErrorText(language);
                }
                
                if (answerResult.isComplete) {
                    // Test completed
                    const testResults = testHandler.getTestResults(jid);
                    const resultText = testHandler.getTestResultText(testResults, language);
                    
                    // Save results to database if available
                    if (testResults && studentRegistration.saveExamResult) {
                        const testData = {
                            title: testResults.title,
                            course: 'General Test',
                            examId: testResults.testId,
                            score: testResults.score,
                            totalQuestions: testResults.totalQuestions,
                            correctAnswers: testResults.correctAnswers,
                            timeTaken: testResults.timeTaken,
                            startTime: Date.now() - (testResults.timeTaken * 60000),
                            language: language,
                            level: testResults.level
                        };
                        
                        await studentRegistration.saveExamResult(jid, testData);
                        console.log(`💾 Test results saved for ${jid}`);
                    }
                    
                    testHandler.cancelTest(jid);
                    testHandler.clearUserState(jid);
                    return resultText;
                    
                } else if (answerResult.nextQuestion) {
                    const question = testHandler.getCurrentQuestion(jid);
                    if (question) {
                        return testHandler.formatTestQuestion(question, language);
                    }
                }
                break;
                
            case 'invalid':
            default:
                return this.getErrorText(language);
        }
        
        return this.getErrorText(language);
    }
    
    async handleTestSelection(jid, testId, language) {
        const test = testsData[testId];
        
        if (!test) {
            return this.getErrorText(language);
        }
        
        // Start the test
        const testSession = testHandler.startTest(jid, testId, language);
        
        if (testSession.error) {
            return this.getErrorText(language);
        }
        
        // Clear user state
        testHandler.clearUserState(jid);
        
        // Get test instructions and first question
        const instructions = testHandler.getTestInstructions(jid);
        const question = testHandler.getCurrentQuestion(jid);
        
        let startText = `📝 *${testSession.testSession.title}*\n\n`;
        startText += `⏰ Time: ${testSession.testSession.time}\n`;
        startText += `📊 Total Marks: ${testSession.testSession.totalMarks}\n`;
        startText += `📋 Level: ${testHandler.getLevelName(testId, language)}\n\n`;
        startText += `*Instructions:*\n${instructions}\n\n`;
        
        if (question) {
            startText += `*First Question:*\n\n`;
            startText += testHandler.formatTestQuestion(question, language);
        }
        
        startText += `\n\nType your answer or CANCEL to stop.`;
        
        return startText;
    }
    
    // ============================================
    // EXAM HANDLING
    // ============================================
    async handleExamResponse(jid, text, language) {
        const upperText = text.toUpperCase().trim();
        
        // Handle CANCEL
        if (upperText === 'CANCEL' || upperText === 'STOP') {
            examHandler.cancelExam(jid);
            return this.getCancelText(language);
        }
        
        // Handle through examHandler
        const result = examHandler.handleUserInput(jid, text, language);
        
        if (!result || !result.type) {
            return this.getErrorText(language);
        }
        
        switch (result.type) {
            case 'show_menu':
            case 'show_course_exams':
            case 'exam_started':
            case 'invalid_choice':
            case 'error':
                return result.data;
                
            case 'exam_response':
                const answerResult = examHandler.submitAnswer(jid, text);
                
                if (answerResult.error) {
                    return this.getErrorText(language);
                }
                
                if (answerResult.isComplete) {
                    // Exam completed
                    const examResults = examHandler.getExamResults(jid);
                    const resultText = examHandler.getExamResultText(examResults, language);
                    
                    // Save results to database
                    if (examResults && studentRegistration.saveExamResult) {
                        const examData = {
                            title: examResults.title,
                            course: examResults.course,
                            examId: examHandler.examSessions.get(jid)?.examId,
                            score: examResults.score,
                            totalQuestions: examResults.totalQuestions,
                            correctAnswers: examResults.correctAnswers,
                            timeTaken: examResults.timeTaken,
                            startTime: examHandler.examSessions.get(jid)?.startTime,
                            language: language
                        };
                        
                        await studentRegistration.saveExamResult(jid, examData);
                        console.log(`💾 Exam results saved for ${jid}`);
                    }
                    
                    examHandler.cancelExam(jid);
                    return resultText;
                    
                } else if (answerResult.nextQuestion) {
                    const question = examHandler.getCurrentQuestion(jid);
                    if (question) {
                        return examHandler.formatExamQuestion(question, language);
                    }
                }
                break;
        }
        
        return this.getErrorText(language);
    }
    
    // ============================================
    // OLD FUNCTIONS
    // ============================================
    async startExercise(jid, courseId, language) {
        try {
            const exercise = await learningCommands.getExercise(courseId, language);
            if (exercise) {
                learningSession.startSession(jid, 'exercise', exercise);
                return this.getExerciseStartText(language, exercise.name, exercise.questions.length);
            } else {
                return this.getErrorText(language);
            }
        } catch (error) {
            console.error('Exercise error:', error);
            return this.getErrorText(language);
        }
    }
    
    async handleSessionResponse(jid, answer, session, language) {
        try {
            const result = learningSession.checkAnswer(jid, answer);
            
            if (result.correct !== undefined) {
                const nextQuestion = learningSession.getCurrentQuestion(jid);
                
                if (nextQuestion) {
                    return await this.sendQuestion(jid, nextQuestion, session, language);
                } else {
                    // Session completed
                    const stats = learningSession.getSessionStats(jid);
                    const score = Math.round((stats.correct / stats.totalQuestions) * 100);
                    
                    const resultText = this.getResultText(language, score, stats);
                    
                    // Clear session
                    learningSession.clearSession(jid);
                    
                    return resultText;
                }
            } else {
                return this.getErrorText(language);
            }
        } catch (error) {
            console.error('Session response error:', error);
            return this.getErrorText(language);
        }
    }
    
    async sendQuestion(jid, question, session, language) {
        try {
            const questionNumber = learningSession.getCurrentQuestionIndex(jid) + 1;
            const totalQuestions = session.questions.length;
            
            let questionText = this.getQuestionHeader(language, questionNumber, session.currentActivity);
            questionText += question.text + '\n\n';
            
            if (question.options && question.options.length > 0) {
                question.options.forEach((option, index) => {
                    const letter = String.fromCharCode(65 + index); // A, B, C, D
                    questionText += `${letter}. ${option}\n`;
                });
                questionText += '\n' + this.getAnswerInstruction(language, 'multiple_choice');
            } else if (question.type === 'true_false') {
                questionText += this.getAnswerInstruction(language, 'true_false');
            } else {
                questionText += this.getAnswerInstruction(language, 'short_answer');
            }
            
            questionText += '\n' + this.getProgressText(language, questionNumber, totalQuestions);
            
            return questionText;
        } catch (error) {
            console.error('Send question error:', error);
            return this.getErrorText(language);
        }
    }
    
    // ============================================
    // HELPER FUNCTIONS
    // ============================================
    generateSessionId() {
        return 'web_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
    }
    
    ensureUserExists(jid) {
        if (!this.webUsers.has(jid)) {
            this.webUsers.set(jid, {
                id: jid,
                language: 'en',
                registered: false,
                lastActive: new Date().toISOString(),
                history: [],
                studentData: null,
                session: {}
            });
        }
    }
    
    saveToHistory(jid, question, answer) {
        const user = this.webUsers.get(jid);
        if (user) {
            user.history.push({
                question: question,
                answer: answer,
                timestamp: new Date().toISOString()
            });
            
            // Keep only last 100 messages
            if (user.history.length > 100) {
                user.history = user.history.slice(-100);
            }
        }
    }
    
    // ============================================
    // TEXT FUNCTIONS
    // ============================================
    getWelcomeText(language) {
        const texts = {
            'en': `🎓 *Welcome to Charles Academy!*\n\n` +
                  `Please choose your language first:\n\n` +
                  `Type: ENGLISH 🇬🇧\n` +
                  `Type: KISWAHILI 🇹🇿\n` +
                  `Type: FRANÇAIS 🇫🇷\n\n` +
                  `*Example:* Type "ENGLISH" to continue in English`,
            
            'sw': `🎓 *Karibu kwenye Charles Academy!*\n\n` +
                  `Tafadhali chagua lugha yako kwanza:\n\n` +
                  `Andika: ENGLISH 🇬🇧\n` +
                  `Andika: KISWAHILI 🇹🇿\n` +
                  `Andika: FRANÇAIS 🇫🇷\n\n` +
                  `*Mfano:* Andika "KISWAHILI" kuendelea kwa Kiswahili`,
            
            'fr': `🎓 *Bienvenue à Charles Academy!*\n\n` +
                  `Veuillez d'abord choisir votre langue:\n\n` +
                  `Tapez: ENGLISH 🇬🇧\n` +
                  `Tapez: KISWAHILI 🇹🇿\n` +
                  `Tapez: FRANÇAIS 🇫🇷\n\n` +
                  `*Exemple:* Tapez "FRANÇAIS" pour continuer en français`
        };
        return texts[language] || texts['en'];
    }
    
    getLanguageSelectionText(language) {
        const texts = {
            'en': `🌍 *Choose Your Language*\n\n` +
                  `Type one of these words:\n\n` +
                  `ENGLISH  - For English language\n` +
                  `KISWAHILI  - For Kiswahili language\n` +
                  `FRANÇAIS  - For French language\n\n` +
                  `*Example:* Type "ENGLISH" to set English`,
            
            'sw': `🌍 *Chagua Lugha Yako*\n\n` +
                  `Andika moja ya maneno haya:\n\n` +
                  `ENGLISH 🇬🇧 - Kwa lugha ya Kiingereza\n` +
                  `KISWAHILI 🇹🇿 - Kwa lugha ya Kiswahili\n` +
                  `FRANÇAIS 🇫🇷 - Kwa lugha ya Kifaransa\n\n` +
                  `*Mfano:* Andika "KISWAHILI" kuweka Kiswahili`,
            
            'fr': `🌍 *Choisissez Votre Langue*\n\n` +
                  `Tapez un de ces mots:\n\n` +
                  `ENGLISH 🇬🇧 - Pour la langue anglaise\n` +
                  `KISWAHILI 🇹🇿 - Pour la langue kiswahili\n` +
                  `FRANÇAIS 🇫🇷 - Pour la langue française\n\n` +
                  `*Exemple:* Tapez "FRANÇAIS" pour définir le français`
        };
        return texts[language] || texts['en'];
    }
    
    getMenuText(language) {
        const texts = {
            'en': `🎓 *Charles Academy - Main Menu*\n\n` +
                  `Available options:\n\n` +
                  `📚 LEARN - Access daily lessons (NEW!)\n` +
                  `🎓 EXAM - Take an exam\n` +
                  `🧪 TEST - Take a test\n` +
                  `🧪 EXERCISE - Practice exercises\n` +
                  `🌍 LANGUAGE - Change language\n` +
                  `❓ HELP - Show all commands\n` +
                  `🆘 SUPPORT - Help & Support\n\n` +
                  `*NEW: LEARN System:*\n` +
                  `• One lesson per day per course\n` +
                  `• Google Drive notes access\n` +
                  `• Sequential day unlocking\n` +
                  `• Progress tracking\n\n` +
                  `*Type the word in CAPITAL LETTERS*\n` +
                  `Example: Type "LEARN" for daily lessons`,
            
            'sw': `🎓 *Charles Academy - Menyu Kuu*\n\n` +
                  `Chaguo zilizopo:\n\n` +
                  `📚 JIFUNZE - Pata masomo ya kila siku (MPYA!)\n` +
                  `🎓 MTIHANI - Fanya mtihani\n` +
                  `🧪 TEST - Fanya mtihani\n` +
                  `🧪 MAZOEZI - Fanya mazoezi\n` +
                  `🌍 LUGHA - Badilisha lugha\n` +
                  `❓ USAIDIZI - Onyesha amri zote\n` +
                  `🆘 MSADA - Usaidizi na msaada\n\n` +
                  `*MPYA: Mfumo wa JIFUNZE:*\n` +
                  `• Somo moja kwa siku kwa kila kozi\n` +
                  `• Ufikiaji wa maelezo ya Google Drive\n` +
                  `• Kufungua siku kwa mpangilio\n` +
                  `• Ufuatiliaji wa maendeleo\n\n` +
                  `*Andika neno kwa HERUFI KUBWA*\n` +
                  `Mfano: Andika "JIFUNZE" kwa masomo ya kila siku`,
            
            'fr': `🎓 *Charles Academy - Menu Principal*\n\n` +
                  `Options disponibles:\n\n` +
                  `📚 APPRENDRE - Accéder aux leçons quotidiennes (NOUVEAU!)\n` +
                  `🎓 EXAMEN - Passer un examen\n` +
                  `🧪 TEST - Passer un test\n` +
                  `🧪 EXERCICE - Faire des exercices\n` +
                  `🌍 LANGUE - Changer de langue\n` +
                  `❓ AIDE - Afficher toutes les commandes\n` +
                  `🆘 SUPPORT - Aide et support\n\n` +
                  `*NOUVEAU : Système APPRENDRE:*\n` +
                  `• Une leçon par jour par cours\n` +
                  `• Accès aux notes Google Drive\n` +
                  `• Déblocage séquentiel des jours\n` +
                  `• Suivi des progrès\n\n` +
                  `*Tapez le mot en MAJUSCULES*\n` +
                  `Exemple: Tapez "APPRENDRE" pour les leçons quotidiennes`
        };
        return texts[language] || texts['en'];
    }
    
    getHelpText(language) {
        const texts = {
            'en': `📚 *Charles Academy - HELP*\n\n` +
                  `*AVAILABLE COMMANDS:*\n\n` +
                  `🔹 ENGLISH - Set English language\n` +
                  `🔹 KISWAHILI - Set Kiswahili language\n` +
                  `🔹 FRANÇAIS - Set French language\n` +
                  `🔹 MENU - Main menu\n` +
                  `🔹 HELP - This help message\n` +
                  `🔹 SUPPORT - Contact support\n` +
                  `🔹 LEARN - NEW! Daily lessons system\n` +
                  `🔹 EXAM - Advanced exam system\n` +
                  `🔹 TEST - Test system (4 levels)\n` +
                  `🔹 EXERCISE - Practice exercises\n` +
                  `*LEARN SYSTEM FEATURES:*\n` +
                  `• 4 Courses: English, Kiswahili, Web Design, Graphic Design\n` +
                  `• 5 Days per course (Day 1 to Day 5)\n` +
                  `• Google Drive links for notes\n` +
                  `• One lesson per day per course\n` +
                  `• Sequential unlocking (Day 1 → Day 2 → etc.)\n\n` +
                  `*TEST SYSTEM FEATURES:*\n` +
                  `• 4 Levels: Beginner to Expert\n` +
                  `• Multiple question types\n` +
                  `• Automatic scoring\n` +
                  `• Progress tracking\n\n` +
                  `*Just type the word in CAPITAL LETTERS*`,
            
            'sw': `📚 *Charles Academy - USAIDIZI*\n\n` +
                  `*AMRI ZILIZOPO:*\n\n` +
                  `🔹 ENGLISH - Weka lugha ya Kiingereza\n` +
                  `🔹 KISWAHILI - Weka lugha ya Kiswahili\n` +
                  `🔹 FRANÇAIS - Weka lugha ya Kifaransa\n` +
                  `🔹 MENU - Menyu kuu\n` +
                  `🔹 HELP - Ujumbe huu wa usaidizi\n` +
                  `🔹 SUPPORT - Wasiliana na usaidizi\n` +
                  `🔹 LEARN - MPYA! Mfumo wa masomo ya kila siku\n` +
                  `🔹 EXAM - Mfumo wa hali ya juu wa mitihani\n` +
                  `🔹 TEST - Mfumo wa mitihani (viwango 4)\n` +
                  `🔹 EXERCISE - Fanya mazoezi\n` +
                  `*VIPENGELE VYA MFUMO WA JIFUNZE:*\n` +
                  `• Kozi 4: Kiingereza, Kiswahili, Ubunifu wa Tovuti, Ubunifu wa Michoro\n` +
                  `• Siku 5 kwa kila kozi (Day 1 hadi Day 5)\n` +
                  `• Viungo vya Google Drive kwa maelezo\n` +
                  `• Somo moja kwa siku kwa kila kozi\n` +
                  `• Kufungua kwa mpangilio (Day 1 → Day 2 → n.k.)\n\n` +
                  `*VIPENGELE VYA MFUMO WA MTIHANI:*\n` +
                  `• Viwango 4: Mwanzo hadi Mtaalamu\n` +
                  `• Aina mbalimbali za maswali\n` +
                  `• Upimaji wa kiotomatiki\n` +
                  `• Ufuatiliaji wa maendeleo\n\n` +
                  `*Andika tu neno kwa HERUFI KUBWA*`,
            
            'fr': `📚 *Charles Academy - AIDE*\n\n` +
                  `*COMMANDES DISPONIBLES:*\n\n` +
                  `🔹 ENGLISH - Définir la langue anglaise\n` +
                  `🔹 KISWAHILI - Définir la langue kiswahili\n` +
                  `🔹 FRANÇAIS - Définir la langue française\n` +
                  `🔹 MENU - Menu principal\n` +
                  `🔹 HELP - Ce message d'aide\n` +
                  `🔹 SUPPORT - Contacter le support\n` +
                  `🔹 LEARN - NOUVEAU ! Système de leçons quotidiennes\n` +
                  `🔹 EXAM - Système d'examen avancé\n` +
                  `🔹 TEST - Système de test (4 niveaux)\n` +
                  `🔹 EXERCISE - Faire des exercices\n` +
                  `*FONCTIONNALITÉS DU SYSTÈME APPRENDRE:*\n` +
                  `• 4 Cours: Anglais, Kiswahili, Conception Web, Conception Graphique\n` +
                  `• 5 Jours par cours (Day 1 à Day 5)\n` +
                  `• Liens Google Drive pour les notes\n` +
                  `• Une leçon par jour par cours\n` +
                  `• Déblocage séquentiel (Day 1 → Day 2 → etc.)\n\n` +
                  `*FONCTIONNALITÉS DU SYSTÈME DE TEST:*\n` +
                  `• 4 Niveaux: Débutant à Expert\n` +
                  `• Plusieurs types de questions\n` +
                  `• Notation automatique\n` +
                  `• Suivi des progrès\n\n` +
                  `*Tapez simplement le mot en MAJUSCULES*`
        };
        return texts[language] || texts['en'];
    }
    
    getSupportText(language) {
        const texts = {
            'en': `❓ *HELP & SUPPORT*\n\n` +
                  `For any assistance, contact us:\n\n` +
                  `📞 *Support:* +255784020105\n` +
                  `📞 *Support:* +25762700128\n` +
                  `📧 *Email:* support@charlesacademy.com\n` +
                  `📧 *Email:* info.charlesacademy@gmail.com\n` +
                  `🕒 *Available:* Monday-Friday, 8AM-6PM\n\n` +
                  `*LEARN System Issues:*\n` +
                  `• Can't access Google Drive links\n` +
                  `• Day not unlocking properly\n` +
                  `• Progress not saving\n` +
                  `• Any other technical issues\n\n` +
                  `Type MENU to return to main menu`,
            
            'sw': `❓ *USAIDIZI NA MSADA*\n\n` +
                  `Kwa usaidizi wowote, wasiliana nasi:\n\n` +
                  `📞 *Usaidizi:* +255784020105\n` +
                  `📞 *Usaidizi:* +25762700128\n` +
                  `📧 *Barua pepe:* support@charlesacademy.com\n` +
                  `📧 *Barua pepe:* info.charlesacademy@gmail.com\n` +
                  `🕒 *Inapatikana:* Jumatatu-Ijumaa, 8AM-6PM\n\n` +
                  `*Matatizo ya Mfumo wa JIFUNZE:*\n` +
                  `• Haiwezi kufikia viungo vya Google Drive\n` +
                  `• Siku haifunguki ipasavyo\n` +
                  `• Maendeleo hayahifadhiwi\n` +
                  `• Matatizo mengine yoyote ya kiufundi\n\n` +
                  `Andika MENU kurudi kwenye menyu kuu`,
            
            'fr': `❓ *AIDE ET SUPPORT*\n\n` +
                  `Pour toute assistance, contactez-nous:\n\n` +
                  `📞 *Support:* +255784020105\n` +
                  `📞 *Support:* +25762700128\n` +
                  `📧 *Email:* support@charlesacademy.com\n` +
                  `📧 *Email:* info.charlesacademy@gmail.com\n` +
                  `🕒 *Disponible:* Lundi-Vendredi, 8h-18h\n\n` +
                  `*Problèmes du Système APPRENDRE:*\n` +
                  `• Impossible d'accéder aux liens Google Drive\n` +
                  `• Jour non débloqué correctement\n` +
                  `• Progrès non sauvegardés\n` +
                  `• Tout autre problème technique\n\n` +
                  `Tapez MENU pour retourner au menu principal`
        };
        return texts[language] || texts['en'];
    }
    
    getExerciseText(language) {
        const texts = {
            'en': `🧪 *PRACTICE EXERCISE*\n\n` +
                  `Choose exercise type:\n\n` +
                  `ENGLISH EXERCISE\n` +
                  `KISWAHILI EXERCISE\n` +
                  `GRAPHICS EXERCISE\n` +
                  `WEB EXERCISE\n\n` +
                  `*Type the full exercise name in CAPITAL LETTERS*\n` +
                  `Example: Type "ENGLISH EXERCISE" for English exercises`,
            
            'sw': `🧪 *MAZOEZI YA MAZOEZI*\n\n` +
                  `Chagua aina ya mazoezi:\n\n` +
                  `ENGLISH EXERCISE\n` +
                  `KISWAHILI EXERCISE\n` +
                  `GRAPHICS EXERCISE\n` +
                  `WEB EXERCISE\n\n` +
                  `*Andika jina kamili la zoezi kwa HERUFI KUBWA*\n` +
                  `Mfano: Andika "ENGLISH EXERCISE" kwa mazoezi ya Kiingereza`,
            
            'fr': `🧪 *EXERCICE PRATIQUE*\n\n` +
                  `Choisissez le type d'exercice:\n\n` +
                  `ENGLISH EXERCISE\n` +
                  `KISWAHILI EXERCISE\n` +
                  `GRAPHICS EXERCISE\n` +
                  `WEB EXERCISE\n\n` +
                  `*Tapez le nom complet de l'exercice en MAJUSCULES*\n` +
                  `Exemple: Tapez "ENGLISH EXERCISE" pour les exercices d'anglais`
        };
        return texts[language] || texts['en'];
    }
    
    getExerciseStartText(language, courseName, questionCount) {
        const texts = {
            'en': `🧪 *Exercise Started: ${courseName}*\n\n` +
                  `You will answer ${questionCount} questions.\n` +
                  `Type READY to begin or CANCEL to stop.\n\n` +
                  `*Topics covered:*\n` +
                  `• Grammar\n` +
                  `• Vocabulary\n` +
                  `• Comprehension`,
            
            'sw': `🧪 *Zoezi Limeanza: ${courseName}*\n\n` +
                  `Utajibu maswali ${questionCount}.\n` +
                  `Andika READY kuanza au CANCEL kusitisha.\n\n` +
                  `*Mada zilizofunikwa:*\n` +
                  `• Sarufi\n` +
                  `• Msamiati\n` +
                  `• Uelewa`,
            
            'fr': `🧪 *Exercice Commencé: ${courseName}*\n\n` +
                  `Vous répondrez à ${questionCount} questions.\n` +
                  `Tapez READY pour commencer ou CANCEL pour arrêter.\n\n` +
                  `*Sujets couverts:*\n` +
                  `• Grammaire\n` +
                  `• Vocabulaire\n` +
                  `• Compréhension`
        };
        return texts[language] || texts['en'];
    }
    
    getLearnText(language) {
        const texts = {
            'en': `📖 *START LEARNING*\n\n` +
                  `Use the LEARN command to access daily lessons.\n\n` +
                  `Available courses:\n` +
                  `• ENGLISH LANGUAGE\n` +
                  `• KISWAHILI LANGUAGE\n` +
                  `• WEB DESIGN\n` +
                  `• GRAPHIC DESIGN\n\n` +
                  `Type "LEARN" to begin or choose a course directly.`,
            
            'sw': `📖 *ANZA KUJIFUNZA*\n\n` +
                  `Tumia amri ya LEARN kupata masomo ya kila siku.\n\n` +
                  `Kozi zilizopo:\n` +
                  `• ENGLISH LANGUAGE\n` +
                  `• KISWAHILI LANGUAGE\n` +
                  `• WEB DESIGN\n` +
                  `• GRAPHIC DESIGN\n\n` +
                  `Andika "LEARN" kuanza au chagua kozi moja kwa moja.`,
            
            'fr': `📖 *COMMENCER À APPRENDRE*\n\n` +
                  `Utilisez la commande LEARN pour accéder aux leçons quotidiennes.\n\n` +
                  `Cours disponibles:\n` +
                  `• ENGLISH LANGUAGE\n` +
                  `• KISWAHILI LANGUAGE\n` +
                  `• WEB DESIGN\n` +
                  `• GRAPHIC DESIGN\n\n` +
                  `Tapez "LEARN" pour commencer ou choisissez un cours directement.`
        };
        return texts[language] || texts['en'];
    }
    
    getProgressText(language, progress) {
        let progressMsg = '';
        
        if (language === 'en') {
            progressMsg = `📊 *Your Learning Progress*\n\n`;
            progressMsg += `✅ Completed Lessons: ${progress.completedLessons}\n`;
            progressMsg += `🏆 Average Score: ${progress.averageScore}%\n`;
            progressMsg += `🎓 Exams Passed: ${progress.passedExams}/${progress.totalExams}\n`;
            progressMsg += `🧪 Tests Taken: ${progress.totalTests || 0}\n\n`;
            
            // Get learning progress from learnHandler
            if (learnHandler.getUserProgress) {
                const learnProgress = learnHandler.getUserProgress(progress.studentId, language);
                if (learnProgress && learnProgress.type === 'show_progress') {
                    progressMsg += `📚 *Daily Lessons Progress:*\n${learnProgress.data}\n`;
                }
            }
            
            if (progress.completedLessons === 0) {
                progressMsg += `📝 No completed lessons yet.\n`;
                progressMsg += `Start learning with: LEARN`;
            }
            
            progressMsg += `\nKeep learning! 🚀`;
            
        } else if (language === 'sw') {
            progressMsg = `📊 *Maendeleo Yako ya Kujifunza*\n\n`;
            progressMsg += `✅ Masomo Yamalizika: ${progress.completedLessons}\n`;
            progressMsg += `🏆 Wastani wa Alama: ${progress.averageScore}%\n`;
            progressMsg += `🎓 Mitihani Iliyopita: ${progress.passedExams}/${progress.totalExams}\n`;
            progressMsg += `🧪 Mitihani Iliochukuliwa: ${progress.totalTests || 0}\n\n`;
            
            // Get learning progress from learnHandler
            if (learnHandler.getUserProgress) {
                const learnProgress = learnHandler.getUserProgress(progress.studentId, language);
                if (learnProgress && learnProgress.type === 'show_progress') {
                    progressMsg += `📚 *Maendeleo ya Masomo ya Kila Siku:*\n${learnProgress.data}\n`;
                }
            }
            
            if (progress.completedLessons === 0) {
                progressMsg += `📝 Bila masomo yaliyokamilika bado.\n`;
                progressMsg += `Anza kujifunza kwa: LEARN`;
            }
            
            progressMsg += `\nEndelea kujifunza! 🚀`;
            
        } else if (language === 'fr') {
            progressMsg = `📊 *Vos Progrès d'Apprentissage*\n\n`;
            progressMsg += `✅ Leçons Terminées: ${progress.completedLessons}\n`;
            progressMsg += `🏆 Score Moyen: ${progress.averageScore}%\n`;
            progressMsg += `🎓 Examens Réussis: ${progress.passedExams}/${progress.totalExams}\n`;
            progressMsg += `🧪 Tests Passés: ${progress.totalTests || 0}\n\n`;
            
            // Get learning progress from learnHandler
            if (learnHandler.getUserProgress) {
                const learnProgress = learnHandler.getUserProgress(progress.studentId, language);
                if (learnProgress && learnProgress.type === 'show_progress') {
                    progressMsg += `📚 *Progrès des Leçons Quotidiennes:*\n${learnProgress.data}\n`;
                }
            }
            
            if (progress.completedLessons === 0) {
                progressMsg += `📝 Aucune leçon terminée pour le moment.\n`;
                progressMsg += `Commencez à apprendre avec: LEARN`;
            }
            
            progressMsg += `\nContinuez à apprendre! 🚀`;
        }
        
        return progressMsg;
    }
    
    getCoursesText(language, courses) {
        let courseList = '';
        
        if (language === 'en') {
            courseList = `📚 *Available Courses:*\n\n`;
            
            if (courses.length === 0) {
                courseList += `📝 No courses available yet. Check back soon!`;
            } else {
                courses.forEach((course, index) => {
                    courseList += `${index + 1}. ${course.icon || '📘'} *${course.name}*\n`;
                    if (course.description) {
                        courseList += `   ${course.description}\n`;
                    }
                    courseList += `\n`;
                });
                
                courseList += `To start learning, type: LEARN`;
            }
            
        } else if (language === 'sw') {
            courseList = `📚 *Kozi Zilizopo:*\n\n`;
            
            if (courses.length === 0) {
                courseList += `📝 Bila kozi zilizopo bado. Rudi tena baadaye!`;
            } else {
                courses.forEach((course, index) => {
                    courseList += `${index + 1}. ${course.icon || '📘'} *${course.name}*\n`;
                    if (course.description) {
                        courseList += `   ${course.description}\n`;
                    }
                    courseList += `\n`;
                });
                
                courseList += `Kuanza kujifunza, andika: LEARN`;
            }
            
        } else if (language === 'fr') {
            courseList = `📚 *Cours Disponibles:*\n\n`;
            
            if (courses.length === 0) {
                courseList += `📝 Aucun cours disponible pour le moment. Revenez bientôt!`;
            } else {
                courses.forEach((course, index) => {
                    courseList += `${index + 1}. ${course.icon || '📘'} *${course.name}*\n`;
                    if (course.description) {
                        courseList += `   ${course.description}\n`;
                    }
                    courseList += `\n`;
                });
                
                courseList += `Pour commencer à apprendre, tapez: LEARN`;
            }
        }
        
        return courseList;
    }
    
    getCancelText(language) {
        const texts = {
            'en': `🛑 Session cancelled. Type MENU to return to main menu.`,
            'sw': `🛑 Kikao kimesitishwa. Andika MENU kurudi kwenye menyu kuu.`,
            'fr': `🛑 Session annulée. Tapez MENU pour retourner au menu principal.`
        };
        return texts[language] || texts['en'];
    }
    
    getDefaultResponseText(language) {
        const texts = {
            'en': `🤖 I'm your learning assistant.\n\n` +
                  `Type MENU to see options\n` +
                  `Type HELP for assistance\n\n` +
                  `Or say "Hi" to start fresh!`,
            'sw': `🤖 Mimi ni msaidizi wako wa kujifunza.\n\n` +
                  `Andika MENU kuona chaguo\n` +
                  `Andika HELP kwa usaidizi\n\n` +
                  `Au sema "Hi" kuanza upya!`,
            'fr': `🤖 Je suis votre assistant d'apprentissage.\n\n` +
                  `Tapez MENU pour voir les options\n` +
                  `Tapez HELP pour assistance\n\n` +
                  `Ou dites "Hi" pour recommencer!`
        };
        return texts[language] || texts['en'];
    }
    
    getErrorText(language) {
        const texts = {
            'en': `❌ An error occurred. Please try again or type SUPPORT for help.`,
            'sw': `❌ Hitilafu imetokea. Tafadhali jaribu tena au andika SUPPORT kwa usaidizi.`,
            'fr': `❌ Une erreur s'est produite. Veuillez réessayer ou tapez SUPPORT pour obtenir de l'aide.`
        };
        return texts[language] || texts['en'];
    }
    
    getQuestionHeader(language, questionNumber, activity) {
        const activityText = {
            'en': { 'exam': 'Exam', 'test': 'Test', 'exercise': 'Exercise' },
            'sw': { 'exam': 'Mtihani', 'test': 'Mtihani', 'exercise': 'Zoezi' },
            'fr': { 'exam': 'Examen', 'test': 'Test', 'exercise': 'Exercice' }
        };
        
        const act = activityText[language] || activityText['en'];
        const prefix = act[activity] || 'Question';
        
        const texts = {
            'en': `❓ *${prefix} Question ${questionNumber}:*\n\n`,
            'sw': `❓ *${prefix} Swali ${questionNumber}:*\n\n`,
            'fr': `❓ *${prefix} Question ${questionNumber}:*\n\n`
        };
        return texts[language] || texts['en'];
    }
    
    getAnswerInstruction(language, type) {
        const texts = {
            'en': {
                'multiple_choice': '📝 Reply with: A, B, C, or D',
                'true_false': '⚖️ Reply with: True or False',
                'short_answer': '✍️ Type your answer:'
            },
            'sw': {
                'multiple_choice': '📝 Jibu kwa: A, B, C, au D',
                'true_false': '⚖️ Jibu kwa: Kweli au Sio Kweli',
                'short_answer': '✍️ Andika jibu lako:'
            },
            'fr': {
                'multiple_choice': '📝 Répondez avec: A, B, C, ou D',
                'true_false': '⚖️ Répondez avec: Vrai ou Faux',
                'short_answer': '✍️ Tapez votre réponse:'
            }
        };
        const langTexts = texts[language] || texts['en'];
        return langTexts[type] || langTexts['multiple_choice'];
    }
    
    getResultText(language, score, stats) {
        let resultMsg = '';
        
        if (language === 'en') {
            resultMsg = `🎯 *Results*\n\n`;
            resultMsg += `📊 *Your Results:*\n`;
            resultMsg += `Score: ${score}%\n`;
            resultMsg += `Correct: ${stats.correct}/${stats.totalQuestions}\n`;
            resultMsg += `Time: ${Math.round(stats.timeElapsed / 1000)} seconds\n\n`;
            
            if (score >= 70) {
                resultMsg += `✅ *EXCELLENT! YOU PASSED!*\n\n`;
                resultMsg += `Congratulations! You've demonstrated good understanding.\n\n`;
            } else {
                resultMsg += `❌ *NEEDS IMPROVEMENT*\n\n`;
                resultMsg += `We recommend practicing more with EXERCISE or TEST.\n\n`;
            }
            
            resultMsg += `Type MENU to continue learning.`;
            
        } else if (language === 'sw') {
            resultMsg = `🎯 *Matokeo*\n\n`;
            resultMsg += `📊 *Matokeo Yako:*\n`;
            resultMsg += `Alama: ${score}%\n`;
            resultMsg += `Sahihi: ${stats.correct}/${stats.totalQuestions}\n`;
            resultMsg += `Muda: ${Math.round(stats.timeElapsed / 1000)} sekunde\n\n`;
            
            if (score >= 70) {
                resultMsg += `✅ *BORA! UMEWEZA KUPITA!*\n\n`;
                resultMsg += `Hongera! Umeonyesha uelewa mzuri.\n\n`;
            } else {
                resultMsg += `❌ *INAHITAJI KUBORESHA*\n\n`;
                resultMsg += `Tunapendekeza ujizoeze zaidi kwa EXERCISE au TEST.\n\n`;
            }
            
            resultMsg += `Andika MENU kuendelea kujifunza.`;
            
        } else if (language === 'fr') {
            resultMsg = `🎯 *Résultats*\n\n`;
            resultMsg += `📊 *Vos Résultats:*\n`;
            resultMsg += `Score: ${score}%\n`;
            resultMsg += `Correct: ${stats.correct}/${stats.totalQuestions}\n`;
            resultMsg += `Temps: ${Math.round(stats.timeElapsed / 1000)} secondes\n\n`;
            
            if (score >= 70) {
                resultMsg += `✅ *EXCELLENT! VOUS AVEZ RÉUSSI!*\n\n`;
                resultMsg += `Félicitations! Vous avez démontré une bonne compréhension.\n\n`;
            } else {
                resultMsg += `❌ *BESOIN D'AMÉLIORATION*\n\n`;
                resultMsg += `Nous recommandons de pratiquer davantage avec EXERCISE ou TEST.\n\n`;
            }
            
            resultMsg += `Tapez MENU pour continuer à apprendre.`;
        }
        
        return resultMsg;
    }
}

// ==================== CREATE AND START WEB BOT ====================
const webBot = new WebBot();

// Handle server shutdown gracefully
process.on('SIGINT', () => {
    console.log('\n\n🛑 Shutting down Web Bot gracefully...');
    console.log('👋 Goodbye!');
    process.exit(0);
});

// Export for testing
module.exports = webBot;