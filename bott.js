const { makeWASocket, useMultiFileAuthState, Browsers } = require('@whiskeysockets/baileys');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const QRCode = require('qrcode');
const path = require('path');

// Import modules
const learningCommands = require('./learningCommands');
const learningSession = require('./learningSession');
const learningDb = require('./learningDb');
const examHandler = require('./examHandler');
const testHandler = require('./testHandler');

async function startBot() {
    console.log('🚀 Starting Charles Academy Bot...');
    console.log('📚 Version: 2.6.0');
    console.log('👨‍🎓 Academy: Charles Academy');
    console.log('🌍 Languages: English, Kiswahili, Français');
    console.log('📞 Test Number: 0750910158');
    console.log('🎯 New Features: Advanced Test System + Exam System');
    
    try {
        // ==================== CREATE WEB SERVER ====================
        const app = express();
        const server = http.createServer(app);
        const io = socketIo(server);
        
        // Serve static files
        app.use(express.static(path.join(__dirname, 'public')));
        
        // Serve HTML page
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        });
        
        // API endpoint for QR code
        app.get('/qrcode', (req, res) => {
            res.json({ qrCode: global.qrCodeData || null });
        });
        
        // Start web server
        const PORT = 3001;
        server.listen(PORT, () => {
            console.log(`🌐 Web server running at: http://localhost:${PORT}`);
            console.log(`📱 Open this URL in browser to scan QR code`);
        });
        
        // Initialize database
        console.log('🔧 Initializing Database Connection...');
        
        const { state, saveCreds } = await useMultiFileAuthState('./auth');
        
        const sock = makeWASocket({
            auth: state,
            printQRInTerminal: false,
            browser: Browsers.ubuntu('Chrome'),
            connectTimeoutMs: 60000,
            keepAliveIntervalMs: 25000
        });

        sock.ev.on('creds.update', saveCreds);
        
        sock.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect, qr } = update;
            
            // Display QR Code in browser
            if (qr) {
                console.log('\n' + '='.repeat(50));
                console.log('📱 QR CODE GENERATED FOR BROWSER');
                console.log('='.repeat(50));
                console.log('🌐 Open in browser: http://localhost:3000');
                console.log('📱 Scan the QR code displayed in browser');
                console.log('='.repeat(50) + '\n');
                
                // Generate QR code data URL for browser
                QRCode.toDataURL(qr, (err, url) => {
                    if (err) {
                        console.error('Error generating QR code:', err);
                        return;
                    }
                    
                    // Store QR code globally
                    global.qrCodeData = url;
                    
                    // Send to connected browsers via socket.io
                    io.emit('qrCodeUpdate', { qrCode: url });
                    
                    // Also show in terminal (optional)
                    console.log('QR Code generated successfully for browser');
                });
            }
            
            if (connection === 'close') {
                const shouldReconnect = (lastDisconnect?.error?.output?.statusCode !== 401);
                console.log('❌ Connection closed');
                
                // Clear QR code
                global.qrCodeData = null;
                io.emit('qrCodeUpdate', { qrCode: null });
                
                if (shouldReconnect) {
                    console.log('🔄 Reconnecting in 5 seconds...');
                    setTimeout(() => startBot(), 5000);
                } else {
                    console.log('⚠️ Authentication failed. Please delete auth folder and restart.');
                }
            } else if (connection === 'open') {
                console.log('\n' + '✅'.repeat(10));
                console.log('✅ BOT CONNECTED SUCCESSFULLY!');
                console.log('📱 Now you can message: 0750910158');
                console.log('🎯 New Test System: Type TEST to try');
                console.log('🎯 New Exam System: Type EXAM to try');
                console.log('✅'.repeat(10) + '\n');
                
                // Clear QR code after successful connection
                global.qrCodeData = null;
                io.emit('qrCodeUpdate', { qrCode: null, connected: true });
            }
        });

        // Socket.io connection
        io.on('connection', (socket) => {
            console.log('🌐 Browser connected');
            
            // Send current QR code if exists
            if (global.qrCodeData) {
                socket.emit('qrCodeUpdate', { qrCode: global.qrCodeData });
            }
            
            socket.on('disconnect', () => {
                console.log('🌐 Browser disconnected');
            });
        });

        // Store user language preferences
        const userLanguages = new Map();

        // ==================== TEST HANDLING FUNCTION ====================
        async function handleTestResponse(sock, jid, text, language) {
            const upperText = text.toUpperCase().trim();
            
            // Handle CANCEL during test
            if (upperText === 'CANCEL' || upperText === 'STOP') {
                testHandler.cancelTest(jid);
                const cancelMsg = getCancelText(language);
                await sock.sendMessage(jid, { text: cancelMsg });
                return;
            }
            
            // Handle user input through testHandler
            const result = testHandler.handleUserInput(jid, text, language);
            
            if (!result || !result.type) {
                await sock.sendMessage(jid, { text: getErrorText(language) });
                return;
            }
            
            switch (result.type) {
                case 'show_menu':
                    await sock.sendMessage(jid, { text: result.data });
                    break;
                    
                case 'show_course_tests':
                    await sock.sendMessage(jid, { text: result.data });
                    break;
                    
                case 'test_started':
                    await sock.sendMessage(jid, { text: result.data });
                    break;
                    
                case 'invalid_choice':
                    await sock.sendMessage(jid, { text: result.data });
                    break;
                    
                case 'error':
                    await sock.sendMessage(jid, { text: result.data });
                    break;
                    
                case 'test_response':
                    // User is answering test questions
                    const answerResult = testHandler.submitAnswer(jid, text);
                    
                    if (answerResult.error) {
                        await sock.sendMessage(jid, { text: getErrorText(language) });
                        return;
                    }
                    
                    if (answerResult.isComplete) {
                        // Test completed, show results
                        const testResults = testHandler.getTestResults(jid);
                        const resultText = testHandler.getTestResultText(testResults, language);
                        await sock.sendMessage(jid, { text: resultText });
                        
                        // Clear test state
                        testHandler.cancelTest(jid);
                    } else if (answerResult.nextQuestion) {
                        // Show next question
                        const question = testHandler.getCurrentQuestion(jid);
                        if (question) {
                            const questionText = testHandler.formatTestQuestion(question, language);
                            await sock.sendMessage(jid, { text: questionText });
                        }
                    }
                    break;
                    
                default:
                    await sock.sendMessage(jid, { text: getErrorText(language) });
            }
        }

        // Handle incoming messages
        sock.ev.on('messages.upsert', async ({ messages }) => {
            const msg = messages[0];
            if (!msg.message || msg.key.fromMe) return;

            const jid = msg.key.remoteJid;
            const text = msg.message.conversation || 
                         msg.message.extendedTextMessage?.text || '';
            
            console.log(`📩 Message from ${jid.split('@')[0]}: ${text}`);

            try {
                // Get user language
                const userLanguage = userLanguages.get(jid) || 'en';
                
                // === 1. CHECK FOR KEYWORDS (CAPITAL LETTERS) ===
                const upperText = text.toUpperCase().trim();
                
                // === 2. CHECK FOR ACTIVE TEST FIRST ===
                if (testHandler.hasActiveTest(jid)) {
                    await handleTestResponse(sock, jid, text, userLanguage);
                    return;
                }
                
                // LANGUAGE SELECTION KEYWORDS
                if (upperText === 'ENGLISH') {
                    userLanguages.set(jid, 'en');
                    await learningDb.setStudentLanguage(jid, 'en');
                    await sock.sendMessage(jid, { 
                        text: `✅ Language set to English 🇬🇧\n\n` +
                              `Welcome to Charles Academy! Type MENU to see options.` 
                    });
                    return;
                }
                
                if (upperText === 'KISWAHILI') {
                    userLanguages.set(jid, 'sw');
                    await learningDb.setStudentLanguage(jid, 'sw');
                    await sock.sendMessage(jid, { 
                        text: `✅ Lugha imewekwa kwa Kiswahili 🇹🇿\n\n` +
                              `Karibu kwenye Charles Academy! Andika MENU kuona chaguo.` 
                    });
                    return;
                }
                
                if (upperText === 'FRANÇAIS' || upperText === 'FRANCAIS') {
                    userLanguages.set(jid, 'fr');
                    await learningDb.setStudentLanguage(jid, 'fr');
                    await sock.sendMessage(jid, { 
                        text: `✅ Langue définie en Français 🇫🇷\n\n` +
                              `Bienvenue à Charles Academy! Tapez MENU pour voir les options.` 
                    });
                    return;
                }

                // === 3. CHECK FOR ACTIVE EXAM SECOND ===
                if (examHandler.hasActiveExam(jid)) {
                    await handleExamResponse(sock, jid, text, userLanguage);
                    return;
                }

                // === 4. MAIN KEYWORDS ===
                if (upperText === 'MENU') {
                    await sock.sendMessage(jid, { text: await getMenuText(userLanguage) });
                    return;
                }
                
                if (upperText === 'HELP') {
                    await sock.sendMessage(jid, { text: await getHelpText(userLanguage) });
                    return;
                }
                
                if (upperText === 'SUPPORT') {
                    await sock.sendMessage(jid, { text: await getSupportText(userLanguage) });
                    return;
                }
                
                if (upperText === 'PROGRESS') {
                    const progress = await learningDb.getStudentStats(jid);
                    const progressText = getProgressText(userLanguage, progress);
                    await sock.sendMessage(jid, { text: progressText });
                    return;
                }
                
                if (upperText === 'COURSES') {
                    const courses = await learningDb.getCourses(userLanguage);
                    const coursesText = getCoursesText(userLanguage, courses.data || []);
                    await sock.sendMessage(jid, { text: coursesText });
                    return;
                }
                
                if (upperText === 'LEARN') {
                    await sock.sendMessage(jid, { text: await getLearnText(userLanguage) });
                    return;
                }
                
                // === 5. NEW TEST SYSTEM ===
                if (upperText === 'TEST') {
                    // Initialize test state
                    testHandler.initUserState(jid);
                    const userState = testHandler.userStates.get(jid);
                    userState.step = 'selecting_course';
                    userState.language = userLanguage;
                    
                    const testMenu = testHandler.getTestMenu(userLanguage);
                    await sock.sendMessage(jid, { text: testMenu });
                    return;
                }

                // === HANDLE TEST RESPONSES ===
                if (testHandler.hasActiveTest(jid) || 
                    (testHandler.userStates.has(jid) && testHandler.userStates.get(jid).step !== 'idle')) {
                    
                    await handleTestResponse(sock, jid, text, userLanguage);
                    return;
                }
                
                // === 6. NEW EXAM SYSTEM ===
                if (upperText === 'EXAM') {
                    // Initialize exam state
                    examHandler.initUserState(jid);
                    const userState = examHandler.userStates.get(jid);
                    userState.step = 'selecting_course';
                    userState.language = userLanguage;
                    
                    const examMenu = examHandler.getExamMenu(userLanguage);
                    await sock.sendMessage(jid, { text: examMenu });
                    return;
                }

                // === HANDLE EXAM RESPONSES ===
                if (examHandler.hasActiveExam(jid) || 
                    (examHandler.userStates.has(jid) && examHandler.userStates.get(jid).step !== 'idle')) {
                    
                    await handleExamResponse(sock, jid, text, userLanguage);
                    return;
                }
                
                // === 7. OLD EXERCISE COMMANDS (Keep for compatibility) ===
                if (upperText === 'EXERCISE') {
                    await sock.sendMessage(jid, { text: await getExerciseText(userLanguage) });
                    return;
                }
                
                // EXERCISE TYPE SELECTION
                if (upperText === 'ENGLISH EXERCISE') {
                    await startExercise(sock, jid, '1', userLanguage);
                    return;
                }
                
                if (upperText === 'KISWAHILI EXERCISE') {
                    await startExercise(sock, jid, '2', userLanguage);
                    return;
                }
                
                if (upperText === 'GRAPHICS EXERCISE') {
                    await startExercise(sock, jid, '3', userLanguage);
                    return;
                }
                
                if (upperText === 'WEB EXERCISE') {
                    await startExercise(sock, jid, '4', userLanguage);
                    return;
                }
                
                // TEST LEVEL SELECTION (OLD SYSTEM)
                if (upperText === 'TEST 1' || upperText === 'TEST BEGINNER') {
                    await startTest(sock, jid, '1', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 2' || upperText === 'TEST INTERMEDIATE') {
                    await startTest(sock, jid, '2', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 3' || upperText === 'TEST ADVANCED') {
                    await startTest(sock, jid, '3', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 4' || upperText === 'TEST EXPERT') {
                    await startTest(sock, jid, '4', userLanguage);
                    return;
                }

                // === 8. HANDLE READY FOR EXAMS/TESTS ===
                if (upperText === 'READY') {
                    const session = learningSession.getSession(jid);
                    if (session.currentActivity) {
                        const firstQuestion = learningSession.getCurrentQuestion(jid);
                        if (firstQuestion) {
                            await sendQuestion(sock, jid, firstQuestion, session, userLanguage);
                        }
                        return;
                    }
                }

                // === 9. HANDLE CANCEL ===
                if (upperText === 'CANCEL' || upperText === 'STOP') {
                    // Cancel both old sessions and new test/exam sessions
                    learningSession.clearSession(jid);
                    examHandler.cancelExam(jid);
                    testHandler.cancelTest(jid);
                    
                    const cancelMsg = getCancelText(userLanguage);
                    await sock.sendMessage(jid, { text: cancelMsg });
                    return;
                }

                // === 10. GREETINGS & INITIAL MESSAGE ===
                if (text.toLowerCase().match(/^(hi|hello|hey|hujambo|bonjour|salut|mambo|start)/)) {
                    const welcomeMsg = await getWelcomeText(userLanguage);
                    await sock.sendMessage(jid, { text: welcomeMsg });
                    return;
                }

                // === 11. LANGUAGE SELECTION REQUEST ===
                if (text.toLowerCase().match(/^(language|lugha|langue|change language)/)) {
                    const langResponse = await getLanguageSelectionText(userLanguage);
                    await sock.sendMessage(jid, { text: langResponse });
                    return;
                }

                // === 12. HANDLE OLD EXAM/TEST/EXERCISE RESPONSES ===
                const session = learningSession.getSession(jid);
                if (session.currentActivity && text.length > 0) {
                    await handleSessionResponse(sock, jid, text, session, userLanguage);
                    return;
                }

                // === 13. DEFAULT RESPONSE ===
                if (text.length > 2) {
                    const defaultMsg = getDefaultResponseText(userLanguage);
                    await sock.sendMessage(jid, { text: defaultMsg });
                }

            } catch (error) {
                console.error('Error:', error);
                const errorMsg = getErrorText(userLanguages.get(jid) || 'en');
                await sock.sendMessage(jid, { text: errorMsg });
            }
        });

        console.log('\n✅ Bot is running. Waiting for QR code...\n');
        console.log('🎯 New Features Available:');
        console.log('• Test System: Type TEST for English/Kiswahili tests');
        console.log('• Exam System: Type EXAM for comprehensive exams');
        console.log('• Multiple tests with automatic scoring');
        console.log('• Progress tracking and results');
        
    } catch (error) {
        console.error('❌ Fatal error:', error);
        console.log('🔄 Restarting in 10 seconds...');
        setTimeout(() => startBot(), 10000);
    }
}

// ==================== EXAM HANDLING FUNCTIONS ====================
async function handleExamResponse(sock, jid, text, language) {
    const upperText = text.toUpperCase().trim();
    
    // Handle CANCEL during exam
    if (upperText === 'CANCEL' || upperText === 'STOP') {
        examHandler.cancelExam(jid);
        const cancelMsg = getCancelText(language);
        await sock.sendMessage(jid, { text: cancelMsg });
        return;
    }
    
    // Handle user input through examHandler
    const result = examHandler.handleUserInput(jid, text, language);
    
    if (!result || !result.type) {
        await sock.sendMessage(jid, { text: getErrorText(language) });
        return;
    }
    
    switch (result.type) {
        case 'show_menu':
            await sock.sendMessage(jid, { text: result.data });
            break;
            
        case 'show_course_exams':
            await sock.sendMessage(jid, { text: result.data });
            break;
            
        case 'exam_started':
            await sock.sendMessage(jid, { text: result.data });
            break;
            
        case 'invalid_choice':
            await sock.sendMessage(jid, { text: result.data });
            break;
            
        case 'error':
            await sock.sendMessage(jid, { text: result.data });
            break;
            
        case 'exam_response':
            // User is answering exam questions
            const answerResult = examHandler.submitAnswer(jid, text);
            
            if (answerResult.error) {
                await sock.sendMessage(jid, { text: getErrorText(language) });
                return;
            }
            
            if (answerResult.isComplete) {
                // Exam completed, show results
                const examResults = examHandler.getExamResults(jid);
                const resultText = examHandler.getExamResultText(examResults, language);
                await sock.sendMessage(jid, { text: resultText });
                
                // Clear exam state
                examHandler.cancelExam(jid);
            } else if (answerResult.nextQuestion) {
                // Show next question
                const question = examHandler.getCurrentQuestion(jid);
                if (question) {
                    const questionText = examHandler.formatExamQuestion(question, language);
                    await sock.sendMessage(jid, { text: questionText });
                }
            }
            break;
            
        default:
            await sock.sendMessage(jid, { text: getErrorText(language) });
    }
}

// ==================== OLD FUNCTIONS (KEPT FOR COMPATIBILITY) ====================
async function startExercise(sock, jid, courseId, language) {
    // Your existing startExercise function
}

async function startTest(sock, jid, testLevel, language) {
    // Your existing startTest function
}

async function handleSessionResponse(sock, jid, answer, session, language) {
    // Your existing handleSessionResponse function
}

async function sendQuestion(sock, jid, question, session, language) {
    // Your existing sendQuestion function
}

// ==================== LANGUAGE TEXT FUNCTIONS ====================
async function getWelcomeText(language) {
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

async function getLanguageSelectionText(language) {
    const texts = {
        'en': `🌍 *Choose Your Language*\n\n` +
              `Type one of these words:\n\n` +
              `ENGLISH 🇬🇧 - For English language\n` +
              `KISWAHILI 🇹🇿 - For Kiswahili language\n` +
              `FRANÇAIS 🇫🇷 - For French language\n\n` +
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

async function getMenuText(language) {
    const texts = {
        'en': `🎓 *Charles Academy - Main Menu*\n\n` +
              `Available options:\n\n` +
              `📚 LEARN - Start learning\n` +
              `📝 TEST - Take a test (NEW!)\n` +
              `🎓 EXAM - Take an exam\n` +
              `🧪 EXERCISE - Practice exercises\n` +
              `📊 PROGRESS - My progress\n` +
              `🌍 LANGUAGE - Change language\n` +
              `❓ HELP - Show all commands\n` +
              `🆘 SUPPORT - Help & Support\n\n` +
              `*Type the word in CAPITAL LETTERS*\n` +
              `Example: Type "TEST" for new test system`,
        
        'sw': `🎓 *Charles Academy - Menyu Kuu*\n\n` +
              `Chaguo zilizopo:\n\n` +
              `📚 JIFUNZE - Anza kujifunza\n` +
              `📝 TEST - Fanya mtihani (MPYA!)\n` +
              `🎓 MTIHANI - Fanya mtihani\n` +
              `🧪 MAZOEZI - Fanya mazoezi\n` +
              `📊 MAENDELEO - Angalia maendeleo yako\n` +
              `🌍 LUGHA - Badilisha lugha\n` +
              `❓ USAIDIZI - Onyesha amri zote\n` +
              `🆘 MSADA - Usaidizi na msaada\n\n` +
              `*Andika neno kwa HERUFI KUBWA*\n` +
              `Mfano: Andika "TEST" kwa mfumo mpya wa mitihani`,
        
        'fr': `🎓 *Charles Academy - Menu Principal*\n\n` +
              `Options disponibles:\n\n` +
              `📚 APPRENDRE - Commencer à apprendre\n` +
              `📝 TEST - Passer un test (NOUVEAU!)\n` +
              `🎓 EXAMEN - Passer un examen\n` +
              `🧪 EXERCICE - Faire des exercices\n` +
              `📊 PROGRÈS - Mes progrès\n` +
              `🌍 LANGUE - Changer de langue\n` +
              `❓ AIDE - Afficher toutes les commandes\n` +
              `🆘 SUPPORT - Aide et support\n\n` +
              `*Tapez le mot en MAJUSCULES*\n` +
              `Exemple: Tapez "TEST" pour le nouveau système de test`
    };
    return texts[language] || texts['en'];
}

async function getHelpText(language) {
    const texts = {
        'en': `📚 *Charles Academy - HELP*\n\n` +
              `*AVAILABLE COMMANDS:*\n\n` +
              `🔹 ENGLISH - Set English language\n` +
              `🔹 KISWAHILI - Set Kiswahili language\n` +
              `🔹 FRANÇAIS - Set French language\n` +
              `🔹 MENU - Main menu\n` +
              `🔹 HELP - This help message\n` +
              `🔹 SUPPORT - Contact support\n` +
              `🔹 PROGRESS - Your learning progress\n` +
              `🔹 COURSES - Available courses\n` +
              `🔹 LEARN - Start learning\n` +
              `🔹 TEST - NEW! Advanced test system\n` +
              `🔹 EXAM - NEW! Advanced exam system\n` +
              `🔹 EXERCISE - Practice exercises\n\n` +
              `*TEST SYSTEM FEATURES:*\n` +
              `• English Tests: 5 comprehensive tests\n` +
              `• Kiswahili Tests: 4 comprehensive tests\n` +
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
              `🔹 PROGRESS - Maendeleo yako ya kujifunza\n` +
              `🔹 COURSES - Kozi zilizopo\n` +
              `🔹 LEARN - Anza kujifunza\n` +
              `🔹 TEST - MPYA! Mfumo wa hali ya juu wa mitihani\n` +
              `🔹 EXAM - MPYA! Mfumo wa hali ya juu wa mitihani\n` +
              `🔹 EXERCISE - Fanya mazoezi\n\n` +
              `*VIPENGELE VYA MFUMO WA MTIHANI:*\n` +
              `• Mitihani ya Kiingereza: 5 mitihani kamili\n` +
              `• Mitihani ya Kiswahili: 4 mitihani kamili\n` +
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
              `🔹 PROGRESS - Vos progrès d'apprentissage\n` +
              `🔹 COURSES - Cours disponibles\n` +
              `🔹 LEARN - Commencer à apprendre\n` +
              `🔹 TEST - NOUVEAU ! Système de test avancé\n` +
              `🔹 EXAM - NOUVEAU ! Système d'examen avancé\n` +
              `🔹 EXERCISE - Faire des exercices\n\n` +
              `*FONCTIONNALITÉS DU SYSTÈME DE TEST:*\n` +
              `• Tests d'Anglais: 5 tests complets\n` +
              `• Tests de Kiswahili: 4 tests complets\n` +
              `• Notation automatique\n` +
              `• Suivi des progrès\n\n` +
              `*Tapez simplement le mot en MAJUSCULES*`
    };
    return texts[language] || texts['en'];
}


async function getSupportText(language) {
    const texts = {
        'en': `❓ *HELP & SUPPORT*\n\n` +
              `For any assistance, contact us:\n\n` +
              `📞 *Support:* +255750910158\n` +
              `📧 *Email:* support@charlesacademy.com\n\n` +
              `🕒 *Available:* Monday-Friday, 8AM-6PM\n\n` +
              `Type MENU to return to main menu`,
        
        'sw': `❓ *USAIDIZI NA MSADA*\n\n` +
              `Kwa usaidizi wowote, wasiliana nasi:\n\n` +
              `📞 *Usaidizi:* +255750910158\n` +
              `📧 *Barua pepe:* support@charlesacademy.com\n\n` +
              `🕒 *Inapatikana:* Jumatatu-Ijumaa, 8AM-6PM\n\n` +
              `Andika MENU kurudi kwenye menyu kuu`,
        
        'fr': `❓ *AIDE ET SUPPORT*\n\n` +
              `Pour toute assistance, contactez-nous:\n\n` +
              `📞 *Support:* +255750910158\n` +
              `📧 *Email:* support@charlesacademy.com\n\n` +
              `🕒 *Disponible:* Lundi-Vendredi, 8h-18h\n\n` +
              `Tapez MENU pour retourner au menu principal`
    };
    return texts[language] || texts['en'];
}

async function getExerciseText(language) {
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

function getExerciseStartText(language, courseName, questionCount) {
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

function getProgressText(language, progress) {
    let progressMsg = '';
    
    if (language === 'en') {
        progressMsg = `📊 *Your Learning Progress*\n\n`;
        progressMsg += `✅ Completed Lessons: ${progress.completedLessons}\n`;
        progressMsg += `🏆 Average Score: ${progress.averageScore}%\n`;
        progressMsg += `🎓 Exams Passed: ${progress.passedExams}/${progress.totalExams}\n`;
        progressMsg += `📝 Tests Passed: ${progress.passedTests}/${progress.totalTests}\n\n`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `📝 No completed lessons yet.\n`;
            progressMsg += `Start learning with: COURSES`;
        }
        
        progressMsg += `\nKeep learning! 🚀`;
        
    } else if (language === 'sw') {
        progressMsg = `📊 *Maendeleo Yako ya Kujifunza*\n\n`;
        progressMsg += `✅ Masomo Yamalizika: ${progress.completedLessons}\n`;
        progressMsg += `🏆 Wastani wa Alama: ${progress.averageScore}%\n`;
        progressMsg += `🎓 Mitihani Iliyopita: ${progress.passedExams}/${progress.totalExams}\n`;
        progressMsg += `📝 Mitihani Iliyopita: ${progress.passedTests}/${progress.totalTests}\n\n`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `📝 Bila masomo yaliyokamilika bado.\n`;
            progressMsg += `Anza kujifunza kwa: COURSES`;
        }
        
        progressMsg += `\nEndelea kujifunza! 🚀`;
        
    } else if (language === 'fr') {
        progressMsg = `📊 *Vos Progrès d'Apprentissage*\n\n`;
        progressMsg += `✅ Leçons Terminées: ${progress.completedLessons}\n`;
        progressMsg += `🏆 Score Moyen: ${progress.averageScore}%\n`;
        progressMsg += `🎓 Examens Réussis: ${progress.passedExams}/${progress.totalExams}\n`;
        progressMsg += `📝 Tests Réussis: ${progress.passedTests}/${progress.totalTests}\n\n`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `📝 Aucune leçon terminée pour le moment.\n`;
            progressMsg += `Commencez à apprendre avec: COURSES`;
        }
        
        progressMsg += `\nContinuez à apprendre! 🚀`;
    }
    
    return progressMsg;
}

function getCoursesText(language, courses) {
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

function getCancelText(language) {
    const texts = {
        'en': `🛑 Session cancelled. Type MENU to return to main menu.`,
        'sw': `🛑 Kikao kimesitishwa. Andika MENU kurudi kwenye menyu kuu.`,
        'fr': `🛑 Session annulée. Tapez MENU pour retourner au menu principal.`
    };
    return texts[language] || texts['en'];
}

function getDefaultResponseText(language) {
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

function getErrorText(language) {
    const texts = {
        'en': `❌ An error occurred. Please try again or type SUPPORT for help.`,
        'sw': `❌ Hitilafu imetokea. Tafadhali jaribu tena au andika SUPPORT kwa usaidizi.`,
        'fr': `❌ Une erreur s'est produite. Veuillez réessayer ou tapez SUPPORT pour obtenir de l'aide.`
    };
    return texts[language] || texts['en'];
}

function getQuestionHeader(language, questionNumber, activity) {
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

function getAnswerInstruction(language, type) {
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

function getSessionCompleteText(language) {
    const texts = {
        'en': 'Session completed! Type MENU to return to main menu.',
        'sw': 'Kikao kimekamilika! Andika MENU kurudi kwenye menyu kuu.',
        'fr': 'Session terminée! Tapez MENU pour retourner au menu principal.'
    };
    return texts[language] || texts['en'];
}

function getResultText(language, score, stats) {
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
            resultMsg += `We recommend practicing more with EXERCISE.\n\n`;
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
            resultMsg += `Tunapendekeza ujizoeze zaidi kwa EXERCISE.\n\n`;
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
            resultMsg += `Nous recommandons de pratiquer davantage avec EXERCISE.\n\n`;
        }
        
        resultMsg += `Tapez MENU pour continuer à apprendre.`;
    }
    
    return resultMsg;
}

// Start bot
startBot();