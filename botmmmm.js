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
    console.log('🚀 Anzisha Charles Academy Bot...');
    console.log('📚 Toleo: 2.6.0');
    console.log('👨‍🎓 Chuo: Charles Academy');
    console.log('🌍 Lugha: English, Kiswahili, Français');
    console.log('📞 Namba ya Uthibitisho: 0776831991');
    console.log('🎯 Kipya: Mfumo wa Usajili wa Wanafunzi');
    
    try {
        console.log('🔧 Tunaanzisha muunganisho wa database...');
        
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
            
            if (qr) {
                console.log('\n' + '═'.repeat(50));
                console.log('📱 PIGA PICHA YA QR CODE HII KWENYE WHATSAPP');
                console.log('═'.repeat(50));
                qrcode.generate(qr, { small: true });
                console.log('\n📋 Maagizo:');
                console.log('1. Fungua WhatsApp kwenye simu yako');
                console.log('2. Bonyeza ⋮ (dots tatu) → Vifaa Vilivyounganishwa');
                console.log('3. Bonyeza "Unganisha Kifaa"');
                console.log('4. Piga picha ya QR code hapo juu');
                console.log('═'.repeat(50) + '\n');
            }
            
            if (connection === 'close') {
                console.log('❌ Muunganisho umefungwa');
                console.log('🔄 Tunaunganisha tena kwa sekunde 5...');
                setTimeout(() => startBot(), 5000);
            } else if (connection === 'open') {
                console.log('\n' + '✅'.repeat(10));
                console.log('✅ BOT IMESHIKWA VIZURI!');
                console.log('📱 Sasa unaweza kutuma ujumbe: 0750910158');
                console.log('🎯 Mfumo wa Usajili: Tuma "Salamu" kusajili');
                console.log('🎯 Mfumo Mpya wa Mitihani: Andika MTIHANI kujaribu');
                console.log('✅'.repeat(10) + '\n');
            }
        });

        const userLanguages = new Map();

        sock.ev.on('messages.upsert', async ({ messages }) => {
            const msg = messages[0];
            if (!msg.message || msg.key.fromMe) return;

            const jid = msg.key.remoteJid;
            const text = msg.message.conversation || 
                         msg.message.extendedTextMessage?.text || '';
            
            console.log(`\n📩 Ujumbe kutoka ${jid.split('@')[0]}: "${text}"`);

            try {
                if (studentRegistration.isRegistering(jid)) {
                    console.log(`📝 Mtumiaji yuko katika mchakato wa usajili`);
                    const response = await studentRegistration.handleRegistrationStep(jid, text, 'sw');
                    if (response) {
                        console.log(`📤 Tunatuma jibu la usajili`);
                        await sock.sendMessage(jid, { text: formatWhatsAppMessage(response) });
                    }
                    return;
                }

                console.log(`🔍 Tunakagua kama mtumiaji amesajiliwa...`);
                const { isRegistered } = await studentRegistration.isStudentRegistered(jid);
                console.log(`📊 Hali ya usajili: ${isRegistered ? '✅ Amesajiliwa' : '❌ Hajasajiliwa'}`);

                if (!isRegistered) {
                    console.log(`👤 Mtumiaji hajasajiliwa, tunakagua aina ya ujumbe...`);
                    
                    if (text.toLowerCase().match(/^(hi|hello|hey|hujambo|bonjour|salut|mambo|start|salamu|habari)/)) {
                        console.log(`🎯 Salamu imegunduliwa, tunaanza usajili...`);
                        const registrationMsg = studentRegistration.startRegistration(jid, 'sw');
                        await sock.sendMessage(jid, { text: formatWhatsAppMessage(registrationMsg) });
                        return;
                    }
                    
                    console.log(`📝 Tunaanza usajili kwa mtumiaji mpya...`);
                    const registrationMsg = studentRegistration.startRegistration(jid, 'sw');
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(registrationMsg) });
                    return;
                }

                console.log(`✅ Mtumiaji amesajiliwa, tunachakata amri...`);
                
                const userLanguage = userLanguages.get(jid) || 'sw';
                const upperText = text.toUpperCase().trim();
                
                console.log(`🌍 Lugha ya mtumiaji: ${userLanguage}`);
                console.log(`🔤 Maandishi yaliyochakatwa: ${upperText}`);

                if (upperText === 'ENGLISH') {
                    userLanguages.set(jid, 'en');
                    await learningDb.setStudentLanguage(jid, 'en');
                    await sock.sendMessage(jid, { 
                        text: formatWhatsAppMessage(
                            `✅ Language set to English\n\n` +
                            `Welcome to Charles Academy!\n\n` +
                            `Type MENU to see all options\n` +
                            `Ready to start learning? Let's go!`
                        )
                    });
                    return;
                }
                
                if (upperText === 'KISWAHILI') {
                    userLanguages.set(jid, 'sw');
                    await learningDb.setStudentLanguage(jid, 'sw');
                    await sock.sendMessage(jid, { 
                        text: formatWhatsAppMessage(
                            `✅ Lugha imewekwa kwa Kiswahili\n\n` +
                            `Karibu kwenye Charles Academy!\n\n` +
                            `Andika MENU kuona chaguo zote\n` +
                            `Tayari kuanza kujifunza? Twende!`
                        )
                    });
                    return;
                }
                
                if (upperText === 'FRANÇAIS' || upperText === 'FRANCAIS') {
                    userLanguages.set(jid, 'fr');
                    await learningDb.setStudentLanguage(jid, 'fr');
                    await sock.sendMessage(jid, { 
                        text: formatWhatsAppMessage(
                            `✅ Langue définie en Français\n\n` +
                            `Bienvenue à Charles Academy!\n\n` +
                            `Tapez MENU pour voir toutes les options\n` +
                            `Prêt à commencer à apprendre? Allons-y!`
                        )
                    });
                    return;
                }

                if (examHandler.hasActiveExam(jid)) {
                    console.log(`📝 Mtumiaji ana mtihani unaoendelea, tunashughulikia jibu`);
                    await handleExamResponse(sock, jid, text, userLanguage);
                    return;
                }

                if (upperText === 'MENU') {
                    console.log(`📱 Tunaonyesha menyu kuu`);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(await getMenuText(userLanguage)) });
                    return;
                }
                
                if (upperText === 'HELP') {
                    console.log(`❓ Tunaonyesha usaidizi`);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(await getHelpText(userLanguage)) });
                    return;
                }
                
                if (upperText === 'SUPPORT') {
                    console.log(`🆘 Tunaonyesha msaada`);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(await getSupportText(userLanguage)) });
                    return;
                }
                
                if (upperText === 'PROGRESS') {
                    console.log(`📊 Tunaonyesha maendeleo`);
                    const progress = await learningDb.getStudentStats(jid);
                    const progressText = getProgressText(userLanguage, progress);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(progressText) });
                    return;
                }
                
                if (upperText === 'COURSES') {
                    console.log(`📚 Tunaonyesha kozi`);
                    const courses = await learningDb.getCourses(userLanguage);
                    const coursesText = getCoursesText(userLanguage, courses.data || []);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(coursesText) });
                    return;
                }
                
                if (upperText === 'LEARN') {
                    console.log(`📖 Tunaanza kujifunza`);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(await getLearnText(userLanguage)) });
                    return;
                }
                
                if (upperText === 'EXAM' || upperText === 'MTIHANI') {
                    console.log(`🎓 Tunaanza mfumo wa mitihani`);
                    examHandler.initUserState(jid);
                    const userState = examHandler.userStates.get(jid);
                    userState.step = 'selecting_course';
                    userState.language = userLanguage;
                    
                    const examMenu = examHandler.getExamMenu(userLanguage);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(examMenu) });
                    return;
                }

                if (examHandler.hasActiveExam(jid) || 
                    (examHandler.userStates.has(jid) && examHandler.userStates.get(jid).step !== 'idle')) {
                    
                    console.log(`📝 Tunashughulikia jibu la hali ya mtihani`);
                    await handleExamResponse(sock, jid, text, userLanguage);
                    return;
                }
                
                if (upperText === 'TEST') {
                    console.log(`📝 Tunaanza mtihani`);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(await getTestText(userLanguage)) });
                    return;
                }
                
                if (upperText === 'EXERCISE' || upperText === 'MAZOEZI') {
                    console.log(`🧪 Tunaanza mazoezi`);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(await getExerciseText(userLanguage)) });
                    return;
                }
                
                if (upperText === 'ENGLISH EXERCISE') {
                    console.log(`🧪 Mazoezi ya Kiingereza`);
                    await startExercise(sock, jid, '1', userLanguage);
                    return;
                }
                
                if (upperText === 'KISWAHILI EXERCISE') {
                    console.log(`🧪 Mazoezi ya Kiswahili`);
                    await startExercise(sock, jid, '2', userLanguage);
                    return;
                }
                
                if (upperText === 'GRAPHICS EXERCISE') {
                    console.log(`🧪 Mazoezi ya Michoro`);
                    await startExercise(sock, jid, '3', userLanguage);
                    return;
                }
                
                if (upperText === 'WEB EXERCISE') {
                    console.log(`🧪 Mazoezi ya Tovuti`);
                    await startExercise(sock, jid, '4', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 1' || upperText === 'TEST BEGINNER') {
                    console.log(`📝 Mtihani wa kiwango 1`);
                    await startTest(sock, jid, '1', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 2' || upperText === 'TEST INTERMEDIATE') {
                    console.log(`📝 Mtihani wa kiwango 2`);
                    await startTest(sock, jid, '2', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 3' || upperText === 'TEST ADVANCED') {
                    console.log(`📝 Mtihani wa kiwango 3`);
                    await startTest(sock, jid, '3', userLanguage);
                    return;
                }
                
                if (upperText === 'TEST 4' || upperText === 'TEST EXPERT') {
                    console.log(`📝 Mtihani wa kiwango 4`);
                    await startTest(sock, jid, '4', userLanguage);
                    return;
                }

                if (upperText === 'READY' || upperText === 'TAYARI') {
                    console.log(`✅ Mtumiaji tayari kwa shughuli`);
                    const session = learningSession.getSession(jid);
                    if (session.currentActivity) {
                        const firstQuestion = learningSession.getCurrentQuestion(jid);
                        if (firstQuestion) {
                            await sendQuestion(sock, jid, firstQuestion, session, userLanguage);
                        }
                        return;
                    }
                }

                if (upperText === 'CANCEL' || upperText === 'STOP' || upperText === 'SIMAMA') {
                    console.log(`🛑 Tunasitisha kikao`);
                    learningSession.clearSession(jid);
                    examHandler.cancelExam(jid);
                    
                    const cancelMsg = getCancelText(userLanguage);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(cancelMsg) });
                    return;
                }

                if (text.toLowerCase().match(/^(hi|hello|hey|hujambo|bonjour|salut|mambo|start|salamu|habari|niaje)/)) {
                    console.log(`👋 Salamu imegunduliwa`);
                    const welcomeMsg = await getWelcomeText(userLanguage);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(welcomeMsg) });
                    return;
                }

                if (text.toLowerCase().match(/^(language|lugha|langue|change language|badilisha lugha)/)) {
                    console.log(`🌍 Ombi la kubadilisha lugha`);
                    const langResponse = await getLanguageSelectionText(userLanguage);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(langResponse) });
                    return;
                }

                const session = learningSession.getSession(jid);
                if (session.currentActivity && text.length > 0) {
                    console.log(`📝 Tunashughulikia jibu la kikao`);
                    await handleSessionResponse(sock, jid, text, session, userLanguage);
                    return;
                }

                if (text.length > 2) {
                    console.log(`🤖 Jibu la kawaida`);
                    const defaultMsg = getDefaultResponseText(userLanguage);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(defaultMsg) });
                }

            } catch (error) {
                console.error('❌ Kosa:', error);
                const errorMsg = getErrorText(userLanguages.get(jid) || 'sw');
                await sock.sendMessage(jid, { text: formatWhatsAppMessage(errorMsg) });
            }
        });

        console.log('\n✅ Bot iko tayari. Inangojea QR code...\n');
        console.log('🎯 Vipengele vya Mfumo wa Usajili:');
        console.log('• Inaomba jina kamili na namba ya usajili');
        console.log('• Namba ya usajili ni ya hiari (andika SKIP)');
        console.log('• Matokeo yote ya mitihani yamehifadhiwa na maelezo ya mwanafunzi');
        console.log('• Angalia matokeo kwenye dashibodi');
        
    } catch (error) {
        console.error('❌ Kosa kubwa:', error);
        console.log('🔄 Tunaanza tena kwa sekunde 10...');
        setTimeout(() => startBot(), 10000);
    }
}

function formatWhatsAppMessage(text) {
    // WhatsApp formatting improvements
    return text
        .replace(/\n{3,}/g, '\n\n')
        .replace(/^\s+|\s+$/g, '')
        .replace(/([.!?])\s*\n/g, '$1\n\n')
        .trim();
}

async function handleExamCommand(sock, jid, language) {
    const examMenu = examHandler.getExamMenu(language);
    await sock.sendMessage(jid, { text: formatWhatsAppMessage(examMenu) });
    
    examHandler.examSelectionState = jid;
}

async function handleExamResponse(sock, jid, text, language) {
    const upperText = text.toUpperCase().trim();
    
    if (upperText === 'CANCEL' || upperText === 'STOP' || upperText === 'SIMAMA') {
        examHandler.cancelExam(jid);
        const cancelMsg = getCancelText(language);
        await sock.sendMessage(jid, { text: formatWhatsAppMessage(cancelMsg) });
        return;
    }
    
    const result = examHandler.handleUserInput(jid, text, language);
    
    if (!result || !result.type) {
        await sock.sendMessage(jid, { text: formatWhatsAppMessage(getErrorText(language)) });
        return;
    }
    
    switch (result.type) {
        case 'show_menu':
            await sock.sendMessage(jid, { text: formatWhatsAppMessage(result.data) });
            break;
            
        case 'show_course_exams':
            await sock.sendMessage(jid, { text: formatWhatsAppMessage(result.data) });
            break;
            
        case 'exam_started':
            await sock.sendMessage(jid, { text: formatWhatsAppMessage(result.data) });
            break;
            
        case 'invalid_choice':
            await sock.sendMessage(jid, { text: formatWhatsAppMessage(result.data) });
            break;
            
        case 'error':
            await sock.sendMessage(jid, { text: formatWhatsAppMessage(result.data) });
            break;
            
        case 'exam_response':
            const answerResult = examHandler.submitAnswer(jid, text);
            
            if (answerResult.error) {
                await sock.sendMessage(jid, { text: formatWhatsAppMessage(getErrorText(language)) });
                return;
            }
            
            if (answerResult.isComplete) {
                const examResults = examHandler.getExamResults(jid);
                const resultText = examHandler.getExamResultText(examResults, language);
                await sock.sendMessage(jid, { text: formatWhatsAppMessage(resultText) });
                
                console.log(`📊 Mtihani umekamilika kwa ${jid}, tunahifadhi matokeo...`);
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
                    console.log(`💾 Matokeo ya kuhifadhi:`, saveResult.success ? '✅ Imefanikiwa' : '❌ Imeshindwa');
                }
                
                examHandler.cancelExam(jid);
            } else if (answerResult.nextQuestion) {
                const question = examHandler.getCurrentQuestion(jid);
                if (question) {
                    const questionText = examHandler.formatExamQuestion(question, language);
                    await sock.sendMessage(jid, { text: formatWhatsAppMessage(questionText) });
                }
            }
            break;
            
        default:
            await sock.sendMessage(jid, { text: formatWhatsAppMessage(getErrorText(language)) });
    }
}

// ==================== LANGUAGE TEXT FUNCTIONS WITH BETTER FORMATTING ====================

async function getWelcomeText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   CHARLES ACADEMY
╚════════════════════════╝

🎓 Your Learning Journey Starts Here!

Please choose your preferred language:

🇬🇧 *ENGLISH* - For English language
🇹🇿 *KISWAHILI* - For Kiswahili language
🇫🇷 *FRANÇAIS* - For French language

📝 Example: Type "ENGLISH" to continue

🚀 Let's begin your learning adventure!`,

        'sw': `╔════════════════════════╗
   CHARLES ACADEMY
╚════════════════════════╝

🎓 Safari Yako ya Kujifunza Inaanza Hapa!

Tafadhali chagua lugha unayopendelea:

🇬🇧 *ENGLISH* - Kwa lugha ya Kiingereza
🇹🇿 *KISWAHILI* - Kwa lugha ya Kiswahili
🇫🇷 *FRANÇAIS* - Kwa lugha ya Kifaransa

📝 Mfano: Andika "KISWAHILI" kuendelea

🚀 Tuanze safari yako ya kujifunza!`,

        'fr': `╔════════════════════════╗
   CHARLES ACADEMY
╚════════════════════════╝

🎓 Votre Voyage d'Apprentissage Commence Ici!

Veuillez choisir votre langue préférée:

🇬🇧 *ENGLISH* - Pour la langue anglaise
🇹🇿 *KISWAHILI* - Pour la langue kiswahili
🇫🇷 *FRANÇAIS* - Pour la langue française

📝 Exemple: Tapez "FRANÇAIS" pour continuer

🚀 Commençons votre aventure d'apprentissage!`
    };
    return texts[language] || texts['sw'];
}

async function getLanguageSelectionText(language) {
    const texts = {
        'en': `🌍 Language Selection

Select one of these languages:

→ ENGLISH - Continue in English
→ KISWAHILI - Continue in Kiswahili
→ FRANÇAIS - Continue in French

Tip: Type the word in CAPITAL LETTERS

Example: Type "ENGLISH" to set English`,

        'sw': `🌍 Uchaguzi wa Lugha

Chagua moja ya lugha hizi:

→ ENGLISH - Endelea kwa Kiingereza
→ KISWAHILI - Endelea kwa Kiswahili
→ FRANÇAIS - Endelea kwa Kifaransa

Kidokezo: Andika neno kwa HERUFI KUBWA

Mfano: Andika "KISWAHILI" kuweka Kiswahili`,

        'fr': `🌍 Sélection de Langue

Sélectionnez l'une de ces langues:

→ ENGLISH - Continuer en anglais
→ KISWAHILI - Continuer en kiswahili
→ FRANÇAIS - Continuer en français

Astuce: Tapez le mot en MAJUSCULES

Exemple: Tapez "FRANÇAIS" pour définir le français`
    };
    return texts[language] || texts['sw'];
}
async function getMenuText(language) {
    const texts = {
        'en': createTitleBox("MAIN MENU", 32) + "\n\n" +
              "📋 Available Options:\n\n" +
              createDivider(30) + "\n\n" +
              "╭────────────────────────────╮\n" +
              "│  📚  LEARN     - Learning  │\n" +
              "│  🎓  EXAM      - Exams     │\n" +
              "│  🧪  EXERCISE  - Practice  │\n" +
              "│  📝  TEST      - Tests     │\n" +
              "├────────────────────────────┤\n" +
              "│  📊  PROGRESS  - Progress  │\n" +
              "│  🌍  LANGUAGE  - Language  │\n" +
              "│  ❓  HELP      - Help      │\n" +
              "│  🆘  SUPPORT   - Support   │\n" +
              "╰────────────────────────────╯\n\n" +
              createDivider(30) + "\n\n" +
              "💡 How to use:\n" +
              "Type the word in CAPITAL LETTERS\n\n" +
              "✨ Example:\n" +
              "Type \"EXAM\" for new exam system\n\n" +
              createDivider(30) + "\n\n" +
              "🚀 What would you like to do today?",

        'sw': createTitleBox("MENYU KUU", 32) + "\n\n" +
              "📋 Chaguo Zilizopo:\n\n" +
              createDivider(30) + "\n\n" +
              "╭────────────────────────────╮\n" +
              "│  📚  LEARN     - Kujifunza │\n" +
              "│  🎓  EXAM      - Mitihani  │\n" +
              "│  🧪  EXERCISE  - Mazoezi   │\n" +
              "│  📝  TEST      - Mitihani  │\n" +
              "├────────────────────────────┤\n" +
              "│  📊  PROGRESS  - Maendeleo │\n" +
              "│  🌍  LANGUAGE  - Lugha     │\n" +
              "│  ❓  HELP      - Usaidizi  │\n" +
              "│  🆘  SUPPORT   - Msaada    │\n" +
              "╰────────────────────────────╯\n\n" +
              createDivider(30) + "\n\n" +
              "💡 Jinsi ya kutumia:\n" +
              "Andika neno kwa HERUFI KUBWA\n\n" +
              "✨ Mfano:\n" +
              "Andika \"EXAM\" kwa mfumo mpya wa mitihani\n\n" +
              createDivider(30) + "\n\n" +
              "🚀 Ungependa kufanya nini leo?",

        'fr': createTitleBox("MENU PRINCIPAL", 32) + "\n\n" +
              "📋 Options Disponibles:\n\n" +
              createDivider(30) + "\n\n" +
              "╭────────────────────────────╮\n" +
              "│  📚  LEARN     - Apprendre │\n" +
              "│  🎓  EXAM      - Examens   │\n" +
              "│  🧪  EXERCISE  - Exercices │\n" +
              "│  📝  TEST      - Tests     │\n" +
              "├────────────────────────────┤\n" +
              "│  📊  PROGRESS  - Progrès   │\n" +
              "│  🌍  LANGUAGE  - Langue    │\n" +
              "│  ❓  HELP      - Aide      │\n" +
              "│  🆘  SUPPORT   - Support   │\n" +
              "╰────────────────────────────╯\n\n" +
              createDivider(30) + "\n\n" +
              "💡 Comment utiliser:\n" +
              "Tapez le mot en MAJUSCULES\n\n" +
              "✨ Exemple:\n" +
              "Tapez \"EXAM\" pour le nouveau système d'examen\n\n" +
              createDivider(30) + "\n\n" +
              "🚀 Que souhaitez-vous faire aujourd'hui?"
    };
    return texts[language] || texts['sw'];
}


async function getHelpText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   HELP CENTER
╚════════════════════════╝

AVAILABLE COMMANDS:

• ENGLISH - Set English language
• KISWAHILI - Set Kiswahili language
• FRANÇAIS - Set French language

• MENU - Show main menu
• HELP - Show this help message
• SUPPORT - Contact support
• PROGRESS - Your learning progress

• COURSES - Available courses
• LEARN - Start learning
• EXAM - Advanced exam system (NEW!)
• EXERCISE - Practice exercises
• TEST - Take a test

────────────────────
EXAM SYSTEM FEATURES:
• 4 Courses: English, Kiswahili, Graphics, Website
• Multiple exams per course
• Automatic scoring system
• Progress tracking

────────────────────
HOW TO USE:
Just type the word in CAPITAL LETTERS

Example: Type "EXAM" to start an exam

Happy Learning!`,

        'sw': `╔════════════════════════╗
   KITUO CHA USAIDIZI
╚════════════════════════╝

AMRI ZILIZOPO:

• ENGLISH - Weka lugha ya Kiingereza
• KISWAHILI - Weka lugha ya Kiswahili
• FRANÇAIS - Weka lugha ya Kifaransa

• MENU - Onyesha menyu kuu
• HELP - Onyesha ujumbe huu wa usaidizi
• SUPPORT - Wasiliana na usaidizi
• PROGRESS - Maendeleo yako ya kujifunza

• COURSES - Kozi zilizopo
• LEARN - Anza kujifunza
• EXAM - Mfumo wa hali ya juu wa mitihani (MPYA!)
• EXERCISE - Fanya mazoezi
• TEST - Fanya mtihani

────────────────────
VIPENGELE VYA MFUMO WA MTIHANI:
• Kozi 4: Kiingereza, Kiswahili, Michoro, Tovuti
• Mitihani mingi kwa kila kozi
• Mfumo wa upimaji wa kiotomatiki
• Ufuatiliaji wa maendeleo

────────────────────
JINSI YA KUTUMIA:
Andika tu neno kwa HERUFI KUBWA

Mfano: Andika "EXAM" kuanza mtihani

Kujifunza Kwa Furaha!`,

        'fr': `╔════════════════════════╗
   CENTRE D'AIDE
╚════════════════════════╝

COMMANDES DISPONIBLES:

• ENGLISH - Définir la langue anglaise
• KISWAHILI - Définir la langue kiswahili
• FRANÇAIS - Définir la langue française

• MENU - Afficher le menu principal
• HELP - Afficher ce message d'aide
• SUPPORT - Contacter le support
• PROGRESS - Vos progrès d'apprentissage

• COURSES - Cours disponibles
• LEARN - Commencer à apprendre
• EXAM - Système d'examen avancé (NOUVEAU!)
• EXERCISE - Faire des exercices
• TEST - Passer un test

────────────────────
FONCTIONNALITÉS DU SYSTÈME D'EXAMEN:
• 4 Cours: Anglais, Kiswahili, Graphisme, Site Web
• Plusieurs examens par cours
• Système de notation automatique
• Suivi des progrès

────────────────────
COMMENT UTILISER:
Tapez simplement le mot en MAJUSCULES

Exemple: Tapez "EXAM" pour commencer un examen

Bon Apprentissage!`
    };
    return texts[language] || texts['sw'];
}

async function getSupportText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   HELP & SUPPORT
╚════════════════════════╝

Need Assistance? We're Here for You!

Contact Information:
📞 Phone: +255750910158
📧 Email: support@charlesacademy.com

Office Hours:
🕒 Monday - Friday: 8:00 AM - 6:00 PM
🕒 Saturday: 9:00 AM - 1:00 PM

────────────────────
Quick Links:
→ Type MENU to return to main menu
→ Type HELP for all commands
→ Type PROGRESS to check your learning

We're just a message away!`,

        'sw': `╔════════════════════════╗
   USAIDIZI NA MSADA
╚════════════════════════╝

Unahitaji Usaidizi? Tuko Hapa Kwa Ajili Yako!

Maelezo ya Mawasiliano:
📞 Simu: +255750910158
📧 Barua Pepe: support@charlesacademy.com

Saa Za Ofisi:
🕒 Jumatatu - Ijumaa: 8:00 Asubuhi - 6:00 Jioni
🕒 Jumamosi: 9:00 Asubuhi - 1:00 Alasiri

────────────────────
Viungo Vya Haraka:
→ Andika MENU kurudi kwenye menyu kuu
→ Andika HELP kwa amri zote
→ Andika PROGRESS kuangalia kujifunza kwako

Tuko umbali wa ujumbe tu!`,

        'fr': `╔════════════════════════╗
   AIDE ET SUPPORT
╚════════════════════════╝

Besoin d'Aide? Nous Sommes Là Pour Vous!

Coordonnées:
📞 Téléphone: +255750910158
📧 Email: support@charlesacademy.com

Heures de Bureau:
🕒 Lundi - Vendredi: 8h00 - 18h00
🕒 Samedi: 9h00 - 13h00

────────────────────
Liens Rapides:
→ Tapez MENU pour retourner au menu principal
→ Tapez HELP pour toutes les commandes
→ Tapez PROGRESS pour vérifier votre apprentissage

Nous sommes à un message de vous!`
    };
    return texts[language] || texts['sw'];
}

async function getExerciseText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   PRACTICE EXERCISES
╚════════════════════════╝

Choose Your Exercise Type:

→ ENGLISH EXERCISE - English language practice
→ KISWAHILI EXERCISE - Kiswahili language practice
→ GRAPHICS EXERCISE - Graphics design practice
→ WEB EXERCISE - Website development practice

────────────────────
How to Select:
Type the FULL EXERCISE NAME in CAPITAL LETTERS

Example: Type "ENGLISH EXERCISE" for English

Practice makes perfect!`,

        'sw': `╔════════════════════════╗
   MAZOEZI YA MAZOEZI
╚════════════════════════╝

Chagua Aina Ya Zoezi Yako:

→ ENGLISH EXERCISE - Mazoezi ya lugha ya Kiingereza
→ KISWAHILI EXERCISE - Mazoezi ya lugha ya Kiswahili
→ GRAPHICS EXERCISE - Mazoezi ya ubunifu wa michoro
→ WEB EXERCISE - Mazoezi ya ukuzaji wa tovuti

────────────────────
Jinsi Ya Kuchagua:
Andika JINA KAMILI LA ZOEZI kwa HERUFI KUBWA

Mfano: Andika "ENGLISH EXERCISE" kwa Kiingereza

Mazoezi hufanya mtu kuwa kamili!`,

        'fr': `╔════════════════════════╗
   EXERCICES PRATIQUES
╚════════════════════════╝

Choisissez Votre Type d'Exercice:

→ ENGLISH EXERCISE - Pratique de la langue anglaise
→ KISWAHILI EXERCISE - Pratique de la langue kiswahili
→ GRAPHICS EXERCISE - Pratique de la conception graphique
→ WEB EXERCISE - Pratique du développement de sites web

────────────────────
Comment Sélectionner:
Tapez le NOM COMPLET DE L'EXERCICE en MAJUSCULES

Exemple: Tapez "ENGLISH EXERCISE" pour l'anglais

C'est en forgeant qu'on devient forgeron!`
    };
    return texts[language] || texts['sw'];
}

function getExerciseStartText(language, courseName, questionCount) {
    const texts = {
        'en': `╔════════════════════════╗
   EXERCISE STARTED
╚════════════════════════╝

Course: ${courseName}

Exercise Details:
• Questions: ${questionCount}
• Type: Practice Exercise
• Difficulty: Adaptive

────────────────────
Ready to Start?
Type READY to begin
Type CANCEL to stop

────────────────────
Topics Covered:
• Grammar & Vocabulary
• Reading Comprehension
• Practical Application

Let's do this!`,

        'sw': `╔════════════════════════╗
   ZOEZI LIMEANZA
╚════════════════════════╝

Kozi: ${courseName}

Maelezo Ya Zoezi:
• Maswali: ${questionCount}
• Aina: Zoezi la Mazoezi
• Ugumu: Inayobadilika

────────────────────
Tayari Kuanza?
Andika READY kuanza
Andika CANCEL kusitisha

────────────────────
Mada Zilizofunikwa:
• Sarufi na Msamiati
• Uelewa wa Kusoma
• Utumiaji wa Vitendo

Tufanye hii!`,

        'fr': `╔════════════════════════╗
   EXERCICE COMMENCÉ
╚════════════════════════╝

Cours: ${courseName}

Détails de l'Exercice:
• Questions: ${questionCount}
• Type: Exercice Pratique
• Difficulté: Adaptative

────────────────────
Prêt à Commencer?
Tapez READY pour commencer
Tapez CANCEL pour arrêter

────────────────────
Sujets Couverts:
• Grammaire et Vocabulaire
• Compréhension de Lecture
• Application Pratique

Allons-y!`
    };
    return texts[language] || texts['sw'];
}

async function getTestText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   TEST CENTER
╚════════════════════════╝

Select Your Test Level:

→ TEST 1 / TEST BEGINNER - Basic level test
→ TEST 2 / TEST INTERMEDIATE - Intermediate level test
→ TEST 3 / TEST ADVANCED - Advanced level test
→ TEST 4 / TEST EXPERT - Expert level test

────────────────────
How to Choose:
Type the TEST NAME in CAPITAL LETTERS

Example: Type "TEST 1" for Beginner test

Challenge yourself today!`,

        'sw': `╔════════════════════════╗
   KITUO CHA MTIHANI
╚════════════════════════╝

Chagua Kiwango Cha Mtihani Wako:

→ TEST 1 / TEST BEGINNER - Mtihani wa kiwango cha msingi
→ TEST 2 / TEST INTERMEDIATE - Mtihani wa kiwango cha kati
→ TEST 3 / TEST ADVANCED - Mtihani wa kiwango cha juu
→ TEST 4 / TEST EXPERT - Mtihani wa kiwango cha kitaalamu

────────────────────
Jinsi Ya Kuchagua:
Andika JINA LA MTIHANI kwa HERUFI KUBWA

Mfano: Andika "TEST 1" kwa mtihani wa mwanzo

Jijaribu leo!`,

        'fr': `╔════════════════════════╗
   CENTRE DE TEST
╚════════════════════════╝

Sélectionnez Votre Niveau de Test:

→ TEST 1 / TEST BEGINNER - Test niveau débutant
→ TEST 2 / TEST INTERMEDIATE - Test niveau intermédiaire
→ TEST 3 / TEST ADVANCED - Test niveau avancé
→ TEST 4 / TEST EXPERT - Test niveau expert

────────────────────
Comment Choisir:
Tapez le NOM DU TEST en MAJUSCULES

Exemple: Tapez "TEST 1" pour le test débutant

Défiez-vous aujourd'hui!`
    };
    return texts[language] || texts['sw'];
}

function getTestStartText(language, testName, questionCount) {
    const texts = {
        'en': `╔════════════════════════╗
   TEST STARTED
╚════════════════════════╝

Test: ${testName}

Test Information:
• Questions: ${questionCount}
• Level: ${testName.split(' ')[1] || testName}
• Passing Score: 70%

────────────────────
Ready to Begin?
Type READY to start the test
Type CANCEL to stop

────────────────────
Test Instructions:
• Answer all questions
• Multiple choice: Reply with A, B, C, or D
• True/False: Reply with True or False
• Short answer: Type your answer

Best of luck! 🍀`,

        'sw': `╔════════════════════════╗
   MTIHANI UMEANZA
╚════════════════════════╝

Mtihani: ${testName}

Taarifa Za Mtihani:
• Maswali: ${questionCount}
• Kiwango: ${testName.split(' ')[1] || testName}
• Alama ya Kupita: 70%

────────────────────
Tayari Kuanza?
Andika READY kuanza mtihani
Andika CANCEL kusitisha

────────────────────
Maagizo Ya Mtihani:
• Jibu maswali yote
• Chaguo nyingi: Jibu kwa A, B, C, au D
• Kweli/Sio Kweli: Jibu kwa True au False
• Jibu fupi: Andika jibu lako

Bahati njema! 🍀`,

        'fr': `╔════════════════════════╗
   TEST COMMENCÉ
╚════════════════════════╝

Test: ${testName}

Informations du Test:
• Questions: ${questionCount}
• Niveau: ${testName.split(' ')[1] || testName}
• Score de Passage: 70%

────────────────────
Prêt à Commencer?
Tapez READY pour commencer le test
Tapez CANCEL pour arrêter

────────────────────
Instructions du Test:
• Répondez à toutes les questions
• Choix multiples: Répondez avec A, B, C ou D
• Vrai/Faux: Répondez avec True ou False
• Réponse courte: Tapez votre réponse

Bonne chance! 🍀`
    };
    return texts[language] || texts['sw'];
}

async function getLearnText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   LEARNING CENTER
╚════════════════════════╝

Ready to Expand Your Knowledge?

How to Start:
1. First, view available courses
2. Select a course that interests you
3. Start learning with interactive lessons

────────────────────
Quick Start:
Type COURSES to see all available courses

────────────────────
Learning Tips:
• Study regularly
• Take notes
• Practice with exercises
• Test your knowledge

Your learning journey starts now!`,

        'sw': `╔════════════════════════╗
   KITUO CHA KUJIFUNZA
╚════════════════════════╝

Tayari Kupanua Ujuzi Wako?

Jinsi Ya Kuanza:
1. Kwanza, angalia kozi zilizopo
2. Chagua kozi inayokuvutia
3. Anza kujifunza kwa masomo ya kushirikisha

────────────────────
Kuanza Haraka:
Andika COURSES kuona kozi zote zilizopo

────────────────────
Vidokezo Vya Kujifunza:
• Somo kwa ukawaida
• Andika maelezo
• Jizoeze kwa mazoezi
• Jaribu ujuzi wako

Safari yako ya kujifunza inaanza sasa!`,

        'fr': `╔════════════════════════╗
   CENTRE D'APPRENTISSAGE
╚════════════════════════╝

Prêt à Élargir Vos Connaissances?

Comment Commencer:
1. D'abord, voir les cours disponibles
2. Sélectionnez un cours qui vous intéresse
3. Commencez à apprendre avec des leçons interactives

────────────────────
Démarrage Rapide:
Tapez COURSES pour voir tous les cours disponibles

────────────────────
Conseils d'Apprentissage:
• Étudiez régulièrement
• Prenez des notes
• Pratiquez avec des exercices
• Testez vos connaissances

Votre voyage d'apprentissage commence maintenant!`
    };
    return texts[language] || texts['sw'];
}

function getProgressText(language, progress) {
    let progressMsg = '';
    
    if (language === 'en') {
        progressMsg = `╔════════════════════════╗
   YOUR PROGRESS
╚════════════════════════╝

Overview of Your Journey:

• Completed Lessons: ${progress.completedLessons}
• Average Score: ${progress.averageScore}%
• Exams Passed: ${progress.passedExams}/${progress.totalExams}

────────────────────`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `
Start Your Learning Today!
You haven't completed any lessons yet.

Type COURSES to begin your journey
`;
        } else if (progress.averageScore >= 70) {
            progressMsg += `
EXCELLENT PROGRESS!
You're doing great! Keep up the good work!
`;
        } else {
            progressMsg += `
KEEP GOING!
Practice makes perfect. Try some EXERCISES!
`;
        }
        
        progressMsg += `
────────────────────
Next Steps:
→ Type LEARN to continue learning
→ Type EXAM to test your knowledge
→ Type MENU for more options

Keep learning and growing!`;
        
    } else if (language === 'sw') {
        progressMsg = `╔════════════════════════╗
   MAENDELEO YAKO
╚════════════════════════╝

Muhtasari wa Safari Yako:

• Masomo Yaliyokamilika: ${progress.completedLessons}
• Wastani wa Alama: ${progress.averageScore}%
• Mitihani Iliyopita: ${progress.passedExams}/${progress.totalExams}

────────────────────`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `
Anza Kujifunza Leo!
Bado hujakamilisha masomo yoyote.

Andika COURSES kuanza safari yako
`;
        } else if (progress.averageScore >= 70) {
            progressMsg += `
MAENDELEO MAZURI SANA!
Unafanya vizuri! Endelea kwa bidii hiyo!
`;
        } else {
            progressMsg += `
ENDELEA TU!
Mazoezi hufanya mtu kuwa kamili. Jaribu MAZOEZI!
`;
        }
        
        progressMsg += `
────────────────────
Hatua Zinazofuata:
→ Andika LEARN kuendelea kujifunza
→ Andika EXAM kujaribu ujuzi wako
→ Andika MENU kwa chaguo zaidi

Endelea kujifunza na kukua!`;
        
    } else if (language === 'fr') {
        progressMsg = `╔════════════════════════╗
   VOS PROGRÈS
╚════════════════════════╝

Aperçu de Votre Voyage:

• Leçons Terminées: ${progress.completedLessons}
• Score Moyen: ${progress.averageScore}%
• Examens Réussis: ${progress.passedExams}/${progress.totalExams}

────────────────────`;
        
        if (progress.completedLessons === 0) {
            progressMsg += `
Commencez Votre Apprentissage Aujourd'hui!
Vous n'avez pas encore terminé de leçons.

Tapez COURSES pour commencer votre voyage
`;
        } else if (progress.averageScore >= 70) {
            progressMsg += `
PROGRÈS EXCELLENT!
Vous vous débrouillez très bien! Continuez ainsi!
`;
        } else {
            progressMsg += `
CONTINUEZ!
C'est en forgeant qu'on devient forgeron. Essayez des EXERCISES!
`;
        }
        
        progressMsg += `
────────────────────
Prochaines Étapes:
→ Tapez LEARN pour continuer à apprendre
→ Tapez EXAM pour tester vos connaissances
→ Tapez MENU pour plus d'options

Continuez à apprendre et à grandir!`;
    }
    
    return progressMsg;
}

function getCoursesText(language, courses) {
    let courseList = '';
    
    if (language === 'en') {
        courseList = `╔════════════════════════╗
   AVAILABLE COURSES
╚════════════════════════╝

Choose Your Learning Path:
────────────────────`;
        
        if (courses.length === 0) {
            courseList += `
Coming Soon!
New courses are being prepared. 
Check back soon for updates!
`;
        } else {
            courses.forEach((course, index) => {
                courseList += `
${index + 1}. ${course.icon || '📘'} ${course.name}`;
                if (course.description) {
                    courseList += `
   ${course.description}`;
                }
            });
            
            courseList += `
────────────────────
How to Start:
Type LEARN to begin your learning journey

Tip: Complete all lessons and practice with exercises!`;
        }
        
    } else if (language === 'sw') {
        courseList = `╔════════════════════════╗
   KOZI ZILIZOPO
╚════════════════════════╝

Chagua Njia Yako Ya Kujifunza:
────────────────────`;
        
        if (courses.length === 0) {
            courseList += `
Inakuja Hivi Karibuni!
Kozi mpya ziko tayari.
Rudi tena baadaye kwa sasisho!
`;
        } else {
            courses.forEach((course, index) => {
                courseList += `
${index + 1}. ${course.icon || '📘'} ${course.name}`;
                if (course.description) {
                    courseList += `
   ${course.description}`;
                }
            });
            
            courseList += `
────────────────────
Jinsi Ya Kuanza:
Andika LEARN kuanza safari yako ya kujifunza

Kidokezo: Kamilisha masomo yote na jizoeze kwa mazoezi!`;
        }
        
    } else if (language === 'fr') {
        courseList = `╔════════════════════════╗
   COURS DISPONIBLES
╚════════════════════════╝

Choisissez Votre Parcours d'Apprentissage:
────────────────────`;
        
        if (courses.length === 0) {
            courseList += `
À Venir Bientôt!
De nouveaux cours sont en préparation.
Revenez bientôt pour des mises à jour!
`;
        } else {
            courses.forEach((course, index) => {
                courseList += `
${index + 1}. ${course.icon || '📘'} ${course.name}`;
                if (course.description) {
                    courseList += `
   ${course.description}`;
                }
            });
            
            courseList += `
────────────────────
Comment Commencer:
Tapez LEARN pour commencer votre voyage d'apprentissage

Astuce: Complétez toutes les leçons et pratiquez avec des exercices!`;
        }
    }
    
    return courseList;
}

function getCancelText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   SESSION CANCELLED
╚════════════════════════╝

You've stopped the current session.

────────────────────
Type MENU to return to main menu
Type HELP for assistance

────────────────────
Ready to continue your learning?`,

        'sw': `╔════════════════════════╗
   KIKAO KIMESITISHWA
╚════════════════════════╝

Umesimamisha kikao cha sasa.

────────────────────
Andika MENU kurudi kwenye menyu kuu
Andika HELP kwa usaidizi

────────────────────
Tayari kuendelea na kujifunza kwako?`,

        'fr': `╔════════════════════════╗
   SESSION ANNULÉE
╚════════════════════════╝

Vous avez arrêté la session actuelle.

────────────────────
Tapez MENU pour retourner au menu principal
Tapez HELP pour assistance

────────────────────
Prêt à continuer votre apprentissage?`
    };
    return texts[language] || texts['sw'];
}

function getDefaultResponseText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   LEARNING ASSISTANT
╚════════════════════════╝

Hello! I'm here to help you learn.

────────────────────
Quick Options:
• Type MENU to see all options
• Type HELP for assistance
• Type SUPPORT for help

────────────────────
Getting Started:
Say "Hi" to start fresh!
Or choose a language to begin

Let's make learning fun!`,

        'sw': `╔════════════════════════╗
   MSAIDIZI WA KUJIFUNZA
╚════════════════════════╝

Habari! Niko hapa kukusaidia kujifunza.

────────────────────
Chaguo Za Haraka:
• Andika MENU kuona chaguo zote
• Andika HELP kwa usaidizi
• Andika SUPPORT kwa msaada

────────────────────
Kuanza:
Sema "Salamu" kuanza upya!
Au chagua lugha kuanza

Tufanye kujifunza kuwa raha!`,

        'fr': `╔════════════════════════╗
   ASSISTANT D'APPRENTISSAGE
╚════════════════════════╝

Bonjour! Je suis là pour vous aider à apprendre.

────────────────────
Options Rapides:
• Tapez MENU pour voir toutes les options
• Tapez HELP pour assistance
• Tapez SUPPORT pour aide

────────────────────
Pour Commencer:
Dites "Hi" pour recommencer!
Ou choisissez une langue pour commencer

Rendons l'apprentissage amusant!`
    };
    return texts[language] || texts['sw'];
}

function getErrorText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   OOPS! ERROR
╚════════════════════════╝

Don't worry, it happens sometimes!

────────────────────
Please try again:
• Check your input
• Try the command again
• Type MENU to restart

────────────────────
Need Help?
Type SUPPORT for assistance

We'll fix this together!`,

        'sw': `╔════════════════════════╗
   LOO! KOSA
╚════════════════════════╝

Usijali, hufanyika wakati mwingine!

────────────────────
Tafadhali jaribu tena:
• Kagua uingizaji wako
• Jaribu amri tena
• Andika MENU kuanza upya

────────────────────
Unahitaji Usaidizi?
Andika SUPPORT kwa usaidizi

Tutarekebisha pamoja!`,

        'fr': `╔════════════════════════╗
   OUPS! ERREUR
╚════════════════════════╝

Ne vous inquiétez pas, cela arrive parfois!

────────────────────
Veuillez réessayer:
• Vérifiez votre saisie
• Essayez à nouveau la commande
• Tapez MENU pour redémarrer

────────────────────
Besoin d'Aide?
Tapez SUPPORT pour assistance

Nous allons résoudre ce problème ensemble!`
    };
    return texts[language] || texts['sw'];
}

function getQuestionHeader(language, questionNumber, activity) {
    const activityText = {
        'en': { 'exam': 'EXAM', 'test': 'TEST', 'exercise': 'EXERCISE' },
        'sw': { 'exam': 'MTIHANI', 'test': 'MTIHANI', 'exercise': 'ZOEZI' },
        'fr': { 'exam': 'EXAMEN', 'test': 'TEST', 'exercise': 'EXERCICE' }
    };
    
    const act = activityText[language] || activityText['sw'];
    const prefix = act[activity] || 'QUESTION';
    
    const texts = {
        'en': `╔════════════════════════╗
   ${prefix} QUESTION ${questionNumber}
╚════════════════════════╝\n\n`,
        'sw': `╔════════════════════════╗
   ${prefix} SWALI ${questionNumber}
╚════════════════════════╝\n\n`,
        'fr': `╔════════════════════════╗
   ${prefix} QUESTION ${questionNumber}
╚════════════════════════╝\n\n`
    };
    return texts[language] || texts['sw'];
}

function getAnswerInstruction(language, type) {
    const texts = {
        'en': {
            'multiple_choice': `────────────────────\nMultiple Choice:\nReply with: A, B, C, or D\n────────────────────`,
            'true_false': `────────────────────\nTrue/False:\nReply with: True or False\n────────────────────`,
            'short_answer': `────────────────────\nShort Answer:\nType your answer:\n────────────────────`
        },
        'sw': {
            'multiple_choice': `────────────────────\nChaguo Nyingi:\nJibu kwa: A, B, C, au D\n────────────────────`,
            'true_false': `────────────────────\nKweli/Sio Kweli:\nJibu kwa: True au False\n────────────────────`,
            'short_answer': `────────────────────\nJibu Fupi:\nAndika jibu lako:\n────────────────────`
        },
        'fr': {
            'multiple_choice': `────────────────────\nChoix Multiples:\nRépondez avec: A, B, C, ou D\n────────────────────`,
            'true_false': `────────────────────\nVrai/Faux:\nRépondez avec: True ou False\n────────────────────`,
            'short_answer': `────────────────────\nRéponse Courte:\nTapez votre réponse:\n────────────────────`
        }
    };
    const langTexts = texts[language] || texts['sw'];
    return langTexts[type] || langTexts['multiple_choice'];
}

function getSessionCompleteText(language) {
    const texts = {
        'en': `╔════════════════════════╗
   SESSION COMPLETED
╚════════════════════════╝

Great job finishing the session!

────────────────────
Type MENU to return to main menu
Type PROGRESS to check your results

────────────────────
Ready for the next challenge?`,

        'sw': `╔════════════════════════╗
   KIKAO KIMEKAMILIKA
╚════════════════════════╝

Kazi nzuru kumaliza kikao!

────────────────────
Andika MENU kurudi kwenye menyu kuu
Andika PROGRESS kuangalia matokeo yako

────────────────────
Tayari kwa changamoto ijayo?`,

        'fr': `╔════════════════════════╗
   SESSION TERMINÉE
╚════════════════════════╝

Excellent travail pour avoir terminé la session!

────────────────────
Tapez MENU pour retourner au menu principal
Tapez PROGRESS pour vérifier vos résultats

────────────────────
Prêt pour le prochain défi?`
    };
    return texts[language] || texts['sw'];
}

function getResultText(language, score, stats) {
    let resultMsg = '';
    
    if (language === 'en') {
        resultMsg = `╔════════════════════════╗
   YOUR RESULTS
╚════════════════════════╝

Session Summary:

• Score: ${score}%
• Correct Answers: ${stats.correct}/${stats.totalQuestions}
• Time Taken: ${Math.round(stats.timeElapsed / 1000)} seconds

────────────────────`;
        
        if (score >= 70) {
            resultMsg += `
🏆 EXCELLENT! YOU PASSED!

Congratulations!
You've demonstrated excellent understanding.

Keep up the great work!
`;
        } else {
            resultMsg += `
📈 NEEDS IMPROVEMENT

Recommendation:
Practice more with EXERCISE to improve.

Don't give up! Practice makes perfect.
`;
        }
        
        resultMsg += `
────────────────────
Next Steps:
→ Type MENU to continue learning
→ Type PROGRESS to track your journey
→ Type EXAM for another challenge

Your learning journey continues!`;
        
    } else if (language === 'sw') {
        resultMsg = `╔════════════════════════╗
   MATOKEO YAKO
╚════════════════════════╝

Muhtasari wa Kikao:

• Alama: ${score}%
• Majibu Sahihi: ${stats.correct}/${stats.totalQuestions}
• Muda Uliochukuliwa: ${Math.round(stats.timeElapsed / 1000)} sekunde

────────────────────`;
        
        if (score >= 70) {
            resultMsg += `
🏆 BORA! UMEWEZA KUPITA!

Hongera!
Umeonyesha uelewa bora.

Endelea kwa bidii hiyo!
`;
        } else {
            resultMsg += `
📈 INAHITAJI KUBORESHA

Mapendekezo:
Jizoeze zaidi kwa EXERCISE kuboresha.

Usikate tamaa! Mazoezi hufanya mtu kuwa kamili.
`;
        }
        
        resultMsg += `
────────────────────
Hatua Zinazofuata:
→ Andika MENU kuendelea kujifunza
→ Andika PROGRESS kufuatilia safari yako
→ Andika EXAM kwa changamoto nyingine

Safari yako ya kujifunza inaendelea!`;
        
    } else if (language === 'fr') {
        resultMsg = `╔════════════════════════╗
   VOS RÉSULTATS
╚════════════════════════╝

Résumé de la Session:

• Score: ${score}%
• Réponses Correctes: ${stats.correct}/${stats.totalQuestions}
• Temps Pris: ${Math.round(stats.timeElapsed / 1000)} secondes

────────────────────`;
        
        if (score >= 70) {
            resultMsg += `
🏆 EXCELLENT! VOUS AVEZ RÉUSSI!

Félicitations!
Vous avez démontré une excellente compréhension.

Continuez votre excellent travail!
`;
        } else {
            resultMsg += `
📈 BESOIN D'AMÉLIORATION

Recommandation:
Pratiquez davantage avec EXERCISE pour vous améliorer.

N'abandonnez pas! C'est en forgeant qu'on devient forgeron.
`;
        }
        
        resultMsg += `
────────────────────
Prochaines Étapes:
→ Tapez MENU pour continuer à apprendre
→ Tapez PROGRESS pour suivre votre voyage
→ Tapez EXAM pour un autre défi

Votre voyage d'apprentissage continue!`;
    }
    
    return resultMsg;
}

// Start bot
startBot();