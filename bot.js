const { makeWASocket, useMultiFileAuthState, Browsers } = require('@whiskeysockets/baileys');
const qrcode = require('qrcode-terminal');

// Import modules
const learningCommands = require('./learningCommands');
const learningSession = require('./learningSession');
const learningDb = require('./learningDb');
const examHandler = require('./examHandler');

// === IMPORT NEW MODULES ===
const studentRegistration = require('./studentRegistration');

async function startBot() {
    console.log('🚀 Starting Charles Academy Bot...');
    console.log('📚 Version: 2.6.0'); // Updated version with registration
    console.log('👨‍🎓 Academy: Charles Academy');
    console.log('🌍 Languages: English, Kiswahili, Français');
    console.log('📞 Test Number: 0776831991');
    console.log('🎯 New Feature: Student Registration System');
    
    try {
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
            
            // Display QR Code
            if (qr) {
                console.log('\n' + '='.repeat(50));
                console.log('📱 SCAN THIS QR CODE WITH WHATSAPP');
                console.log('='.repeat(50));
                qrcode.generate(qr, { small: true });
                console.log('\n📋 Instructions:');
                console.log('1. Open WhatsApp on your phone');
                console.log('2. Tap ⋮ (three dots) → Linked Devices');
                console.log('3. Tap "Link a Device"');
                console.log('4. Scan the QR code above');
                console.log('='.repeat(50) + '\n');
            }
            
            if (connection === 'close') {
                console.log('❌ Connection closed');
                console.log('🔄 Reconnecting in 5 seconds...');
                setTimeout(() => startBot(), 5000);
            } else if (connection === 'open') {
                console.log('\n' + '✅'.repeat(10));
                console.log('✅ BOT CONNECTED SUCCESSFULLY!');
                console.log('📱 Now you can message: 0750910158');
                console.log('🎯 Registration System: Send "Hi" to register');
                console.log('🎯 New Exam System: Type EXAM to try');
                console.log('✅'.repeat(10) + '\n');
            }
        });

        // Store user language preferences
        const userLanguages = new Map();

        // ============================================
        // HANDLE INCOMING MESSAGES - UPDATED VERSION
        // ============================================
        sock.ev.on('messages.upsert', async ({ messages }) => {
            const msg = messages[0];
            if (!msg.message || msg.key.fromMe) return;

            const jid = msg.key.remoteJid;
            const text = msg.message.conversation || 
                         msg.message.extendedTextMessage?.text || '';
            
            console.log(`\n📩 Message from ${jid.split('@')[0]}: "${text}"`);

            try {
                // ======================================
                // STEP 1: CHECK IF USER IS REGISTERING
                // ======================================
                if (studentRegistration.isRegistering(jid)) {
                    console.log(`📝 User is in registration process`);
                    const response = await studentRegistration.handleRegistrationStep(jid, text, 'en');
                    if (response) {
                        console.log(`📤 Sending registration response`);
                        await sock.sendMessage(jid, { text: response });
                    }
                    return;
                }

                // ======================================
                // STEP 2: CHECK IF USER IS REGISTERED
                // ======================================
                console.log(`🔍 Checking if user is registered...`);
                const { isRegistered } = await studentRegistration.isStudentRegistered(jid);
                console.log(`📊 Registration status: ${isRegistered ? '✅ Registered' : '❌ Not registered'}`);

                // ======================================
                // STEP 3: HANDLE UNREGISTERED USERS
                // ======================================
                if (!isRegistered) {
                    console.log(`👤 User not registered, checking message type...`);
                    
                    // Allow greetings to trigger registration
                    if (text.toLowerCase().match(/^(hi|hello|hey|hujambo|bonjour|salut|mambo|start)/)) {
                        console.log(`🎯 Greeting detected, starting registration...`);
                        const registrationMsg = studentRegistration.startRegistration(jid, 'en');
                        await sock.sendMessage(jid, { text: registrationMsg });
                        return;
                    }
                    
                    // For any other message, also start registration
                    console.log(`📝 Starting registration for new user...`);
                    const registrationMsg = studentRegistration.startRegistration(jid, 'en');
                    await sock.sendMessage(jid, { text: registrationMsg });
                    return;
                }

                // ======================================
                // STEP 4: USER IS REGISTERED - PROCESS COMMANDS
                // ======================================
                console.log(`✅ User is registered, processing command...`);
                
                // Get user language
                const userLanguage = userLanguages.get(jid) || 'en';
                
                // Convert to uppercase for keyword matching
                const upperText = text.toUpperCase().trim();
                
                console.log(`🌍 User language: ${userLanguage}`);
                console.log(`🔤 Processed text: ${upperText}`);

                // ======================================
                // LANGUAGE SELECTION KEYWORDS
                // ======================================
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

                // ======================================
                // CHECK FOR ACTIVE EXAM FIRST
                // ======================================
                if (examHandler.hasActiveExam(jid)) {
                    console.log(`📝 User has active exam, handling exam response`);
                    await handleExamResponse(sock, jid, text, userLanguage);
                    return;
                }

                // ======================================
                // MAIN KEYWORDS
                // ======================================
                if (upperText === 'MENU') {
                    console.log(`📱 Showing main menu`);
                    await sock.sendMessage(jid, { text: await getMenuText(userLanguage) });
                    return;
                }
                
                if (upperText === 'HELP') {
                    console.log(`❓ Showing help`);
                    await sock.sendMessage(jid, { text: await getHelpText(userLanguage) });
                    return;
                }
                
                if (upperText === 'SUPPORT') {
                    console.log(`🆘 Showing support`);
                    await sock.sendMessage(jid, { text: await getSupportText(userLanguage) });
                    return;
                }
                
                if (upperText === 'PROGRESS') {
                    console.log(`📊 Showing progress`);
                    const progress = await learningDb.getStudentStats(jid);
                    const progressText = getProgressText(userLanguage, progress);
                    await sock.sendMessage(jid, { text: progressText });
                    return;
                }
                
                if (upperText === 'COURSES') {
                    console.log(`📚 Showing courses`);
                    const courses = await learningDb.getCourses(userLanguage);
                    const coursesText = getCoursesText(userLanguage, courses.data || []);
                    await sock.sendMessage(jid, { text: coursesText });
                    return;
                }
                
                if (upperText === 'LEARN') {
                    console.log(`📖 Starting learning`);
                    await sock.sendMessage(jid, { text: await getLearnText(userLanguage) });
                    return;
                }
                
                // ======================================
                // NEW EXAM SYSTEM
                // ======================================
                if (upperText === 'EXAM') {
                    console.log(`🎓 Starting exam system`);
                    examHandler.initUserState(jid);
                    const userState = examHandler.userStates.get(jid);
                    userState.step = 'selecting_course';
                    userState.language = userLanguage;
                    
                    const examMenu = examHandler.getExamMenu(userLanguage);
                    await sock.sendMessage(jid, { text: examMenu });
                    return;
                }

                // ======================================
                // HANDLE EXAM RESPONSES
                // ======================================
                if (examHandler.hasActiveExam(jid) || 
                    (examHandler.userStates.has(jid) && examHandler.userStates.get(jid).step !== 'idle')) {
                    
                    console.log(`📝 Handling exam state response`);
                    await handleExamResponse(sock, jid, text, userLanguage);
                    return;
                }
                
                // ======================================
                // OLD EXAM/TEST/EXERCISE COMMANDS
                // ======================================
                if (upperText === 'TEST') {
                    console.log(`📝 Starting test`);
                    await sock.sendMessage(jid, { text: await getTestText(userLanguage) });
                    return;
                }
                
                if (upperText === 'EXERCISE') {
                    console.log(`🧪 Starting exercise`);
                    await sock.sendMessage(jid, { text: await getExerciseText(userLanguage) });
                    return;
                }
                
                // EXERCISE TYPE SELECTION
                if (upperText === 'ENGLISH EXERCISE') {
                    console.log(`🧪 English exercise`);
                    await startExercise(sock, jid, '1', userLanguage);
                    return;
                }
                
                if (upperText === 'KISWAHILI EXERCISE') {
                    console.log(`🧪 Kiswahili exercise`);
                    await startExercise(sock, jid, '2', userLanguage);
                    return;
                }
                
                if (upperText === 'GRAPHICS EXERCISE') {
                    console.log(`🧪 Graphics exercise`);
                    await startExercise(sock, jid, '3', userLanguage);
                    return;
                }
                
                if (upperText === 'WEB EXERCISE') {
                    console.log(`🧪 Web exercise`);
                    await startExercise(sock, jid, '4', userLanguage);
                    return;
                }
                
                // TEST LEVEL SELECTION
                if (upperText === 'TEST 1' || upperText === 'TEST BEGINNER') {
                    console.log(`📝 Test level 1`);
                    await startTest(sock, jid, '1', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 2' || upperText === 'TEST INTERMEDIATE') {
                    console.log(`📝 Test level 2`);
                    await startTest(sock, jid, '2', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 3' || upperText === 'TEST ADVANCED') {
                    console.log(`📝 Test level 3`);
                    await startTest(sock, jid, '3', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 4' || upperText === 'TEST EXPERT') {
                    console.log(`📝 Test level 4`);
                    await startTest(sock, jid, '4', userLanguage);
                    return;
                }

                // ======================================
                // HANDLE READY FOR EXAMS/TESTS
                // ======================================
                if (upperText === 'READY') {
                    console.log(`✅ User ready for activity`);
                    const session = learningSession.getSession(jid);
                    if (session.currentActivity) {
                        const firstQuestion = learningSession.getCurrentQuestion(jid);
                        if (firstQuestion) {
                            await sendQuestion(sock, jid, firstQuestion, session, userLanguage);
                        }
                        return;
                    }
                }

                // ======================================
                // HANDLE CANCEL
                // ======================================
                if (upperText === 'CANCEL' || upperText === 'STOP') {
                    console.log(`🛑 Cancelling session`);
                    learningSession.clearSession(jid);
                    examHandler.cancelExam(jid);
                    
                    const cancelMsg = getCancelText(userLanguage);
                    await sock.sendMessage(jid, { text: cancelMsg });
                    return;
                }

                // ======================================
                // GREETINGS & INITIAL MESSAGE
                // ======================================
                if (text.toLowerCase().match(/^(hi|hello|hey|hujambo|bonjour|salut|mambo|start)/)) {
                    console.log(`👋 Greeting detected`);
                    const welcomeMsg = await getWelcomeText(userLanguage);
                    await sock.sendMessage(jid, { text: welcomeMsg });
                    return;
                }

                // ======================================
                // LANGUAGE SELECTION REQUEST
                // ======================================
                if (text.toLowerCase().match(/^(language|lugha|langue|change language)/)) {
                    console.log(`🌍 Language change request`);
                    const langResponse = await getLanguageSelectionText(userLanguage);
                    await sock.sendMessage(jid, { text: langResponse });
                    return;
                }

                // ======================================
                // HANDLE OLD EXAM/TEST/EXERCISE RESPONSES
                // ======================================
                const session = learningSession.getSession(jid);
                if (session.currentActivity && text.length > 0) {
                    console.log(`📝 Handling session response`);
                    await handleSessionResponse(sock, jid, text, session, userLanguage);
                    return;
                }

                // ======================================
                // DEFAULT RESPONSE
                // ======================================
                if (text.length > 2) {
                    console.log(`🤖 Default response`);
                    const defaultMsg = getDefaultResponseText(userLanguage);
                    await sock.sendMessage(jid, { text: defaultMsg });
                }

            } catch (error) {
                console.error('❌ Error:', error);
                const errorMsg = getErrorText(userLanguages.get(jid) || 'en');
                await sock.sendMessage(jid, { text: errorMsg });
            }
        });

        console.log('\n✅ Bot is running. Waiting for QR code...\n');
        console.log('🎯 Registration System Features:');
        console.log('• Ask for full name and registration number');
        console.log('• Registration number is optional (type SKIP)');
        console.log('• All exam results saved with student details');
        console.log('• View results on dashboard');
        
    } catch (error) {
        console.error('❌ Fatal error:', error);
        console.log('🔄 Restarting in 10 seconds...');
        setTimeout(() => startBot(), 10000);
    }
}

// ==================== NEW EXAM HANDLING FUNCTIONS ====================

async function handleExamCommand(sock, jid, language) {
    const examMenu = examHandler.getExamMenu(language);
    await sock.sendMessage(jid, { text: examMenu });
    
    // Store that user is selecting exam
    examHandler.examSelectionState = jid;
}

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
                
                // ============================================
                // SAVE EXAM RESULTS TO DATABASE
                // ============================================
                console.log(`📊 Exam completed for ${jid}, saving results...`);
                if (examResults) {
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
                    
                    const saveResult = await studentRegistration.saveExamResult(jid, examData);
                    console.log(`💾 Save result:`, saveResult.success ? '✅ Success' : '❌ Failed');
                }
                
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
    // ... keep old function ...
}

async function startTest(sock, jid, testLevel, language) {
    // ... keep old function ...
}

async function handleSessionResponse(sock, jid, answer, session, language) {
    // ... keep old function ...
}

function checkAnswer(question, userAnswer) {
    // ... keep old function ...
}

async function sendQuestion(sock, jid, question, session, language) {
    // ... keep old function ...
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
              `🎓 EXAM - Take an exam (NEW!)\n` +
              `🧪 EXERCISE - Practice exercises\n` +
              `📝 TEST - Take a test\n` +
              `📊 PROGRESS - My progress\n` +
              `🌍 LANGUAGE - Change language\n` +
              `❓ HELP - Show all commands\n` +
              `🆘 SUPPORT - Help & Support\n\n` +
              `*Type the word in CAPITAL LETTERS*\n` +
              `Example: Type "EXAM" for new exam system`,
        
        'sw': `🎓 *Charles Academy - Menyu Kuu*\n\n` +
              `Chaguo zilizopo:\n\n` +
              `📚 JIFUNZE - Anza kujifunza\n` +
              `🎓 MTIHANI - Fanya mtihani (MPYA!)\n` +
              `🧪 MAZOEZI - Fanya mazoezi\n` +
              `📝 TEST - Fanya mtihani\n` +
              `📊 MAENDELEO - Angalia maendeleo yako\n` +
              `🌍 LUGHA - Badilisha lugha\n` +
              `❓ USAIDIZI - Onyesha amri zote\n` +
              `🆘 MSADA - Usaidizi na msaada\n\n` +
              `*Andika neno kwa HERUFI KUBWA*\n` +
              `Mfano: Andika "MTIHANI" kwa mfumo mpya wa mitihani`,
        
        'fr': `🎓 *Charles Academy - Menu Principal*\n\n` +
              `Options disponibles:\n\n` +
              `📚 APPRENDRE - Commencer à apprendre\n` +
              `🎓 EXAMEN - Passer un examen (NOUVEAU!)\n` +
              `🧪 EXERCICE - Faire des exercices\n` +
              `📝 TEST - Passer un test\n` +
              `📊 PROGRÈS - Mes progrès\n` +
              `🌍 LANGUE - Changer de langue\n` +
              `❓ AIDE - Afficher toutes les commandes\n` +
              `🆘 SUPPORT - Aide et support\n\n` +
              `*Tapez le mot en MAJUSCULES*\n` +
              `Exemple: Tapez "EXAMEN" pour le nouveau système d\'examen`
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
              `🎓 EXAM - Take an exam (NEW!)\n` +
              `🧪 EXERCISE - Practice exercises\n` +
              `📝 TEST - Take a test\n` +
              `📊 PROGRESS - My progress\n` +
              `🌍 LANGUAGE - Change language\n` +
              `❓ HELP - Show all commands\n` +
              `🆘 SUPPORT - Help & Support\n\n` +
              `*Type the word in CAPITAL LETTERS*\n` +
              `Example: Type "EXAM" for new exam system`,
        
        'sw': `🎓 *Charles Academy - Menyu Kuu*\n\n` +
              `Chaguo zilizopo:\n\n` +
              `📚 JIFUNZE - Anza kujifunza\n` +
              `🎓 MTIHANI - Fanya mtihani (MPYA!)\n` +
              `🧪 MAZOEZI - Fanya mazoezi\n` +
              `📝 TEST - Fanya mtihani\n` +
              `📊 MAENDELEO - Angalia maendeleo yako\n` +
              `🌍 LUGHA - Badilisha lugha\n` +
              `❓ USAIDIZI - Onyesha amri zote\n` +
              `🆘 MSADA - Usaidizi na msaada\n\n` +
              `*Andika neno kwa HERUFI KUBWA*\n` +
              `Mfano: Andika "MTIHANI" kwa mfumo mpya wa mitihani`,
        
        'fr': `🎓 *Charles Academy - Menu Principal*\n\n` +
              `Options disponibles:\n\n` +
              `📚 APPRENDRE - Commencer à apprendre\n` +
              `🎓 EXAMEN - Passer un examen (NOUVEAU!)\n` +
              `🧪 EXERCICE - Faire des exercices\n` +
              `📝 TEST - Passer un test\n` +
              `📊 PROGRÈS - Mes progrès\n` +
              `🌍 LANGUE - Changer de langue\n` +
              `❓ AIDE - Afficher toutes les commandes\n` +
              `🆘 SUPPORT - Aide et support\n\n` +
              `*Tapez le mot en MAJUSCULES*\n` +
              `Exemple: Tapez "EXAMEN" pour le nouveau système d\'examen`
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
              `🔹 EXAM - NEW! Advanced exam system\n` +
              `🔹 EXERCISE - Practice exercises\n` +
              `🔹 TEST - Take a test\n\n` +
              `*EXAM SYSTEM FEATURES:*\n` +
              `• 4 Courses: English, Kiswahili, Graphics, Website\n` +
              `• Multiple exams per course\n` +
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
              `🔹 EXAM - MPYA! Mfumo wa hali ya juu wa mitihani\n` +
              `🔹 EXERCISE - Fanya mazoezi\n` +
              `🔹 TEST - Fanya mtihani\n\n` +
              `*VIPENGELE VYA MFUMO WA MTIHANI:*\n` +
              `• Kozi 4: Kiingereza, Kiswahili, Michoro, Tovuti\n` +
              `• Mitihani mingi kwa kila kozi\n` +
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
              `🔹 EXAM - NOUVEAU ! Système d'examen avancé\n` +
              `🔹 EXERCISE - Faire des exercices\n` +
              `🔹 TEST - Passer un test\n\n` +
              `*FONCTIONNALITÉS DU SYSTÈME D'EXAMEN:*\n` +
              `• 4 Cours: Anglais, Kiswahili, Graphisme, Site Web\n` +
              `• Plusieurs examens par cours\n` +
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

async function getTestText(language) {
    const texts = {
        'en': `📝 *TAKE A TEST*\n\n` +
              `Select test level:\n\n` +
              `TEST 1 / TEST BEGINNER\n` +
              `TEST 2 / TEST INTERMEDIATE\n` +
              `TEST 3 / TEST ADVANCED\n` +
              `TEST 4 / TEST EXPERT\n\n` +
              `*Type the test name in CAPITAL LETTERS*\n` +
              `Example: Type "TEST 1" for Beginner test`,
        
        'sw': `📝 *FANYA MTIHANI*\n\n` +
              `Chagua kiwango cha mtihani:\n\n` +
              `TEST 1 / TEST BEGINNER\n` +
              `TEST 2 / TEST INTERMEDIATE\n` +
              `TEST 3 / TEST ADVANCED\n` +
              `TEST 4 / TEST EXPERT\n\n` +
              `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
              `Mfano: Andika "TEST 1" kwa mtihani wa mwanzo`,
        
        'fr': `📝 *PASSER UN TEST*\n\n` +
              `Sélectionnez le niveau du test:\n\n` +
              `TEST 1 / TEST BEGINNER\n` +
              `TEST 2 / TEST INTERMEDIATE\n` +
              `TEST 3 / TEST ADVANCED\n` +
              `TEST 4 / TEST EXPERT\n\n` +
              `*Tapez le nom du test en MAJUSCULES*\n` +
              `Exemple: Tapez "TEST 1" pour le test débutant`
    };
    return texts[language] || texts['en'];
}

function getTestStartText(language, testName, questionCount) {
    const texts = {
        'en': `📝 *${testName} Started*\n\n` +
              `You will answer ${questionCount} questions.\n` +
              `Type READY to begin or CANCEL to stop.\n\n` +
              `*Test Instructions:*\n` +
              `• Answer all questions\n` +
              `• For multiple choice, reply with A, B, C, or D\n` +
              `• For True/False, reply with True or False\n` +
              `• Passing score is 70%`,
        
        'sw': `📝 *${testName} Limeanza*\n\n` +
              `Utajibu maswali ${questionCount}.\n` +
              `Andika READY kuanza au CANCEL kusitisha.\n\n` +
              `*Maagizo ya Mtihani:*\n` +
              `• Jibu maswali yote\n` +
              `• Kwa chaguo nyingi, jibu kwa A, B, C, au D\n` +
              `• Kwa Kweli/Sio Kweli, jibu kwa True au False\n` +
              `• Alama ya kupita ni 70%`,
        
        'fr': `📝 *${testName} Commencé*\n\n` +
              `Vous répondrez à ${questionCount} questions.\n` +
              `Tapez READY pour commencer ou CANCEL pour arrêter.\n\n` +
              `*Instructions du Test:*\n` +
              `• Répondez à toutes les questions\n` +
              `• Pour les choix multiples, répondez avec A, B, C ou D\n` +
              `• Pour Vrai/Faux, répondez avec True ou False\n` +
              `• Le score de passage est de 70%`
    };
    return texts[language] || texts['en'];
}

async function getLearnText(language) {
    const texts = {
        'en': `📖 *START LEARNING*\n\n` +
              `First, choose a course:\n\n` +
              `Type: COURSES\n\n` +
              `Then select a course to see lessons.`,
        
        'sw': `📖 *ANZA KUJIFUNZA*\n\n` +
              `Kwanza, chagua kozi:\n\n` +
              `Andika: COURSES\n\n` +
              `Kisha chagua kozi kuona masomo.`,
        
        'fr': `📖 *COMMENCER À APPRENDRE*\n\n` +
              `D'abord, choisissez un cours:\n\n` +
              `Tapez: COURSES\n\n` +
              `Puis sélectionnez un cours pour voir les leçons.`
    };
    return texts[language] || texts['en'];
}

function getProgressText(language, progress) {
    let progressMsg = '';
    
    if (language === 'en') {
        progressMsg = `📊 *Your Learning Progress*\n\n`;
        progressMsg += `✅ Completed Lessons: ${progress.completedLessons}\n`;
        progressMsg += `🏆 Average Score: ${progress.averageScore}%\n`;
        progressMsg += `🎓 Exams Passed: ${progress.passedExams}/${progress.totalExams}\n\n`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `📝 No completed lessons yet.\n`;
            progressMsg += `Start learning with: COURSES`;
        }
        
        progressMsg += `\nKeep learning! 🚀`;
        
    } else if (language === 'sw') {
        progressMsg = `📊 *Maendeleo Yako ya Kujifunza*\n\n`;
        progressMsg += `✅ Masomo Yamalizika: ${progress.completedLessons}\n`;
        progressMsg += `🏆 Wastani wa Alama: ${progress.averageScore}%\n`;
        progressMsg += `🎓 Mitihani Iliyopita: ${progress.passedExams}/${progress.totalExams}\n\n`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `📝 Bila masomo yaliyokamilika bado.\n`;
            progressMsg += `Anza kujifunza kwa: COURSES`;
        }
        
        progressMsg += `\nEndelea kujifunza! 🚀`;
        
    } else if (language === 'fr') {
        progressMsg = `📊 *Vos Progrès d'Apprentissage*\n\n`;
        progressMsg += `✅ Leçons Terminées: ${progress.completedLessons}\n`;
        progressMsg += `🏆 Score Moyen: ${progress.averageScore}%\n`;
        progressMsg += `🎓 Examens Réussis: ${progress.passedExams}/${progress.totalExams}\n\n`;
        
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

function getProgressText(language, current, total) {
    const texts = {
        'en': `📊 Progress: ${current}/${total}`,
        'sw': `📊 Maendeleo: ${current}/${total}`,
        'fr': `📊 Progrès: ${current}/${total}`
    };
    return texts[language] || texts['en'];
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