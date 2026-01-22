// testHandler.js
const testData = require('./test.js');

class TestHandler {
    constructor() {
        this.testSessions = new Map(); // jid -> test session
        this.userStates = new Map(); // jid -> user state
    }
    
    // Initialize user state
    initUserState(jid) {
        if (!this.userStates.has(jid)) {
            this.userStates.set(jid, {
                step: 'idle',
                selectedCourse: null,
                selectedTest: null,
                language: 'en'
            });
        }
        return this.userStates.get(jid);
    }
    
    // Clear user state
    clearUserState(jid) {
        this.userStates.delete(jid);
    }
    
    // Cancel test
    cancelTest(jid) {
        this.testSessions.delete(jid);
        this.clearUserState(jid);
    }
    
    // Check if user has active test
    hasActiveTest(jid) {
        const session = this.testSessions.get(jid);
        return session && !session.completed;
    }
    
    // Get test menu with course selection
    getTestMenu(language = 'en') {
        const menuTexts = {
            en: `📝 *TEST SELECTION*\n\n` +
                `Select a subject by typing:\n\n` +
                `📚 ENGLISH_TESTS - English Language Tests\n` +
                `🇹🇿 KISWAHILI_TESTS - Kiswahili Tests\n\n` +
                `*Type the word in CAPITAL LETTERS*\n` +
                `Example: Type "ENGLISH_TESTS" for English tests`,
                
            sw: `📝 *UCHAGUZI WA MTIHANI*\n\n` +
                `Chagua somo kwa kuandika:\n\n` +
                `📚 ENGLISH_TESTS - Mitihani ya Lugha ya Kiingereza\n` +
                `🇹🇿 KISWAHILI_TESTS - Mitihani ya Kiswahili\n\n` +
                `*Andika neno kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "ENGLISH_TESTS" kwa mitihani ya Kiingereza`,
                
            fr: `📝 *SÉLECTION DE TEST*\n\n` +
                `Sélectionnez une matière en tapant:\n\n` +
                `📚 ENGLISH_TESTS - Tests de Langue Anglaise\n` +
                `🇹🇿 KISWAHILI_TESTS - Tests de Kiswahili\n\n` +
                `*Tapez le mot en MAJUSCULES*\n` +
                `Exemple: Tapez "ENGLISH_TESTS" pour les tests d'anglais`
        };
        
        return menuTexts[language] || menuTexts.en;
    }
    
    // Get English tests selection
    getEnglishTestsMenu(language = 'en') {
        const menuTexts = {
            en: `📚 *ENGLISH TESTS*\n\n` +
                `Available English tests:\n\n` +
                `TEST 1 - English Basic Skills\n` +
                `TEST 2 - Grammar & Sentence Structure\n` +
                `TEST 3 - Conjunctions & Sentence Joining\n` +
                `TEST 4 - Reading Skills\n` +
                `TEST 5 - Writing Skills\n\n` +
                `*Type the test name in CAPITAL LETTERS*\n` +
                `Example: Type "TEST 1" for English Test 1`,
                
            sw: `📚 *MITIHANI YA KIINGEREZA*\n\n` +
                `Mitihani ya Kiingereza inayopatikana:\n\n` +
                `TEST 1 - Stadi za Msingi za Kiingereza\n` +
                `TEST 2 - Sarufi na Muundo wa Sentensi\n` +
                `TEST 3 - Viunganishi na Kuunganisha Sentensi\n` +
                `TEST 4 - Stadi za Kusoma\n` +
                `TEST 5 - Stadi za Kuandika\n\n` +
                `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "TEST 1" kwa Mtihani wa Kiingereza 1`,
                
            fr: `📚 *TESTS D'ANGLAIS*\n\n` +
                `Tests d'anglais disponibles:\n\n` +
                `TEST 1 - Compétences de Base en Anglais\n` +
                `TEST 2 - Grammaire & Structure de Phrases\n` +
                `TEST 3 - Conjonctions & Jonction de Phrases\n` +
                `TEST 4 - Compétences de Lecture\n` +
                `TEST 5 - Compétences d'Écriture\n\n` +
                `*Tapez le nom du test en MAJUSCULES*\n` +
                `Exemple: Tapez "TEST 1" pour le Test d'Anglais 1`
        };
        
        return menuTexts[language] || menuTexts.en;
    }
    
    // Get Kiswahili tests selection
    getKiswahiliTestsMenu(language = 'en') {
        const menuTexts = {
            en: `🇹🇿 *MITIHANI YA KISWAHILI*\n\n` +
                `Mitihani ya Kiswahili inayopatikana:\n\n` +
                `KUSOMA-TEST 3 - Mtihani wa Kusoma\n` +
                `MAANDISHI-TEST 4 - Mtihani wa Maandishi\n` +
                `SARUFI-TEST 2 - Mtihani wa Sarufi\n` +
                `TEST 1 - Mtihani wa Kawaida\n\n` +
                `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "KUSOMA-TEST 3"`,
                
            sw: `🇹🇿 *MITIHANI YA KISWAHILI*\n\n` +
                `Mitihani ya Kiswahili inayopatikana:\n\n` +
                `KUSOMA-TEST 3 - Mtihani wa Kusoma\n` +
                `MAANDISHI-TEST 4 - Mtihani wa Maandishi\n` +
                `SARUFI-TEST 2 - Mtihani wa Sarufi\n` +
                `TEST 1 - Mtihani wa Kawaida\n\n` +
                `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "KUSOMA-TEST 3"`,
                
            fr: `🇹🇿 *TESTS DE KISWAHILI*\n\n` +
                `Tests de Kiswahili disponibles:\n\n` +
                `KUSOMA-TEST 3 - Test de Lecture\n` +
                `MAANDISHI-TEST 4 - Test d'Écriture\n` +
                `SARUFI-TEST 2 - Test de Grammaire\n` +
                `TEST 1 - Test Standard\n\n` +
                `*Tapez le nom du test en MAJUSCULES*\n` +
                `Exemple: Tapez "KUSOMA-TEST 3"`
        };
        
        return menuTexts[language] || menuTexts.en;
    }
    
    // Handle user input for TEST command
    handleUserInput(jid, text, userLanguage = 'en') {
        const upperText = text.toUpperCase().trim();
        const userState = this.initUserState(jid);
        userState.language = userLanguage;
        
        // If user has active test, handle test response
        if (this.hasActiveTest(jid)) {
            return { type: 'test_response', data: upperText };
        }
        
        // Handle course selection
        if (userState.step === 'selecting_course') {
            return this.handleCourseSelection(jid, upperText, userLanguage);
        }
        
        // Handle test selection
        if (userState.step === 'selecting_test') {
            return this.handleTestSelection(jid, upperText, userLanguage);
        }
        
        // Default: start test selection
        if (upperText === 'TEST') {
            userState.step = 'selecting_course';
            return { 
                type: 'show_menu', 
                data: this.getTestMenu(userLanguage) 
            };
        }
        
        return { type: 'invalid', data: null };
    }
    
    // Handle course selection (English or Kiswahili)
    handleCourseSelection(jid, input, userLanguage) {
        const userState = this.userStates.get(jid);
        const courseMap = {
            'ENGLISH_TESTS': 'english',
            'ENGLISH': 'english',
            'ENG': 'english',
            'KISWAHILI_TESTS': 'kiswahili',
            'KISWAHILI': 'kiswahili',
            'SWAHILI': 'kiswahili',
            'SW': 'kiswahili'
        };
        
        if (courseMap[input]) {
            userState.selectedCourse = courseMap[input];
            userState.step = 'selecting_test';
            
            if (courseMap[input] === 'english') {
                return {
                    type: 'show_course_tests',
                    data: this.getEnglishTestsMenu(userLanguage)
                };
            } else {
                // For Kiswahili, always show in Kiswahili
                return {
                    type: 'show_course_tests',
                    data: this.getKiswahiliTestsMenu(userLanguage)
                };
            }
        } else {
            return {
                type: 'invalid_choice',
                data: this.getInvalidChoiceText(userLanguage) + '\n\n' + this.getTestMenu(userLanguage)
            };
        }
    }
    
    // Handle test selection
    handleTestSelection(jid, input, userLanguage) {
        const userState = this.userStates.get(jid);
        const courseId = userState.selectedCourse;
        
        if (!courseId) {
            userState.step = 'selecting_course';
            return {
                type: 'show_menu',
                data: this.getTestMenu(userLanguage)
            };
        }
        
        // Map test names to test IDs
        const testMaps = {
            'english': {
                'TEST 1': 'test_1',
                'TEST1': 'test_1',
                'TEST 2': 'test_2',
                'TEST2': 'test_2',
                'TEST 3': 'test_3',
                'TEST3': 'test_3',
                'TEST 4': 'test_4',
                'TEST4': 'test_4',
                'TEST 5': 'test_5',
                'TEST5': 'test_5'
            },
            'kiswahili': {
                'KUSOMA-TEST 3': 'kusoma_test_3',
                'KUSOMA': 'kusoma_test_3',
                'KUSOMA TEST 3': 'kusoma_test_3',
                'MAANDISHI-TEST 4': 'maandishi_test_4',
                'MAANDISHI': 'maandishi_test_4',
                'MAANDISHI TEST 4': 'maandishi_test_4',
                'SARUFI-TEST 2': 'sarufi_test_2',
                'SARUFI': 'sarufi_test_2',
                'SARUFI TEST 2': 'sarufi_test_2',
                'TEST 1': 'test_1',
                'TEST1': 'test_1'
            }
        };
        
        const testMap = testMaps[courseId] || {};
        const testId = testMap[input];
        
        if (testId) {
            // Start the test
            const test = this.startTest(jid, courseId, testId, userLanguage);
            
            if (test.error) {
                return {
                    type: 'error',
                    data: this.getErrorText(userLanguage)
                };
            }
            
            // Clear user state
            this.clearUserState(jid);
            
            // Get test instructions and first question
            const instructions = this.getTestInstructions(jid);
            const question = this.getCurrentQuestion(jid);
            
            let startText = `📝 *${test.testSession.title}*\n\n`;
            startText += `⏰ Time: ${test.testSession.time}\n`;
            startText += `📊 Total Marks: ${test.testSession.totalMarks}\n\n`;
            startText += `📋 *Instructions:*\n${instructions}\n\n`;
            
            if (question) {
                startText += `*First Question:*\n\n`;
                startText += this.formatTestQuestion(question, test.testSession.displayLanguage);
            }
            
            startText += `\n\nType your answer or CANCEL to stop.`;
            
            return {
                type: 'test_started',
                data: startText
            };
        } else {
            if (courseId === 'english') {
                return {
                    type: 'invalid_choice',
                    data: this.getInvalidChoiceText(userLanguage) + '\n\n' + 
                          this.getEnglishTestsMenu(userLanguage)
                };
            } else {
                return {
                    type: 'invalid_choice',
                    data: this.getInvalidChoiceText(userLanguage) + '\n\n' + 
                          this.getKiswahiliTestsMenu(userLanguage)
                };
            }
        }
    }
    
    // Start a test for a user
    startTest(jid, courseId, testId, userLanguage = 'en') {
        const course = testData[courseId];
        if (!course || !course[testId]) {
            return { error: true, message: 'Test not found' };
        }
        
        const test = course[testId];
        
        // Determine display language
        // For Kiswahili tests, always use Kiswahili
        const displayLanguage = courseId === 'kiswahili' ? 'sw' : userLanguage;
        
        const testSession = {
            jid: jid,
            courseId: courseId,
            testId: testId,
            userLanguage: userLanguage,
            displayLanguage: displayLanguage,
            title: test.title[displayLanguage],
            time: test.time,
            totalMarks: test.totalMarks,
            instructions: test.instructions[displayLanguage],
            questions: test.questions,
            currentQuestion: 0,
            currentSubQuestion: 0,
            answers: [],
            startTime: Date.now(),
            score: 0,
            completed: false
        };
        
        this.testSessions.set(jid, testSession);
        return { success: true, testSession };
    }
    
    // Get test instructions
    getTestInstructions(jid) {
        const session = this.testSessions.get(jid);
        return session ? session.instructions : '';
    }
    
    // Get current question
    getCurrentQuestion(jid) {
        const session = this.testSessions.get(jid);
        if (!session || session.completed) return null;
        
        if (session.currentQuestion >= session.questions.length) {
            session.completed = true;
            return null;
        }
        
        const question = session.questions[session.currentQuestion];
        const subQuestion = question.subQuestions[session.currentSubQuestion];
        
        return {
            questionNumber: session.currentQuestion + 1,
            subQuestionNumber: session.currentSubQuestion + 1,
            totalQuestions: session.questions.length,
            totalSubQuestions: question.subQuestions.length,
            text: question.text[session.displayLanguage],
            subText: subQuestion.text[session.displayLanguage],
            answer: subQuestion.answer[session.displayLanguage]
        };
    }
    
    // Format test question for display
    formatTestQuestion(question, language) {
        let text = `📝 *Question ${question.questionNumber}.${question.subQuestionNumber}*\n\n`;
        text += `${question.text}\n\n`;
        
        if (question.subText) {
            text += `➡️ ${question.subText}\n\n`;
        }
        
        text += `Progress: ${question.questionNumber}/${question.totalQuestions} (Sub-question ${question.subQuestionNumber}/${question.totalSubQuestions})\n\n`;
        text += `✍️ Type your answer:`;
        
        return text;
    }
    
    // Submit answer
    submitAnswer(jid, answer) {
        const session = this.testSessions.get(jid);
        if (!session || session.completed) return { error: true, message: 'No active test' };
        
        const question = session.questions[session.currentQuestion];
        const subQuestion = question.subQuestions[session.currentSubQuestion];
        
        // Store answer
        const isCorrect = this.checkAnswer(answer, subQuestion.answer[session.displayLanguage]);
        session.answers.push({
            questionNumber: session.currentQuestion + 1,
            subQuestionNumber: session.currentSubQuestion + 1,
            userAnswer: answer,
            correctAnswer: subQuestion.answer[session.displayLanguage],
            isCorrect: isCorrect
        });
        
        if (isCorrect) {
            session.score += 1;
        }
        
        // Move to next sub-question
        session.currentSubQuestion++;
        
        // If all sub-questions in current question are done, move to next question
        if (session.currentSubQuestion >= question.subQuestions.length) {
            session.currentSubQuestion = 0;
            session.currentQuestion++;
        }
        
        // Check if test is complete
        if (session.currentQuestion >= session.questions.length) {
            session.completed = true;
            return { 
                isComplete: true, 
                score: session.score,
                totalQuestions: session.answers.length
            };
        }
        
        return { 
            isComplete: false,
            nextQuestion: this.getCurrentQuestion(jid)
        };
    }
    
    // Check if answer is correct
    checkAnswer(userAnswer, correctAnswer) {
        // Simple answer checking - can be enhanced
        const userAns = userAnswer.toLowerCase().trim();
        const correctAns = correctAnswer.toLowerCase().trim();
        
        if (correctAnswer.includes('[Student writes') || correctAnswer.includes('[Mwanafunzi')) {
            return true; // Auto-mark writing questions as correct
        }
        
        return userAns === correctAns;
    }
    
    // Get test results
    getTestResults(jid) {
        const session = this.testSessions.get(jid);
        if (!session || !session.completed) return null;
        
        const percentage = Math.round((session.score / session.answers.length) * 100);
        const timeTaken = Math.round((Date.now() - session.startTime) / 60000); // minutes
        
        return {
            title: session.title,
            score: percentage,
            correctAnswers: session.score,
            totalQuestions: session.answers.length,
            timeTaken: timeTaken,
            passed: percentage >= 70,
            answers: session.answers
        };
    }
    
    // Get test result text
    getTestResultText(results, language) {
        const texts = {
            en: `📊 *TEST RESULTS*\n\n` +
                `📚 Test: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Time Taken: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 CONGRATULATIONS! YOU PASSED! 🎉' : '📚 Keep studying! Try again.'}\n\n` +
                `Type MENU to continue.`,
                
            sw: `📊 *MATOKEO YA MTIHANI*\n\n` +
                `📚 Mtihani: ${results.title}\n` +
                `📊 Alama: ${results.score}%\n` +
                `✅ Sahihi: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Muda Uliochukuliwa: ${results.timeTaken} dakika\n\n` +
                `${results.passed ? '🎉 HONGERA! UMEWEZA KUPITA! 🎉' : '📚 Endelea kujifunza! Jaribu tena.'}\n\n` +
                `Andika MENU kuendelea.`,
                
            fr: `📊 *RÉSULTATS DU TEST*\n\n` +
                `📚 Test: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Temps Pris: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 FÉLICITATIONS ! VOUS AVEZ RÉUSSI ! 🎉' : '📚 Continuez à étudier ! Réessayez.'}\n\n` +
                `Tapez MENU pour continuer.`
        };
        
        return texts[language] || texts.en;
    }
    
    // Helper text functions
    getInvalidChoiceText(language) {
        const texts = {
            en: '❌ Invalid choice. Please select a valid option.',
            sw: '❌ Chaguo batili. Tafadhali chagua chaguo sahihi.',
            fr: '❌ Choix invalide. Veuillez sélectionner une option valide.'
        };
        return texts[language] || texts.en;
    }
    
    getErrorText(language) {
        const texts = {
            en: '❌ An error occurred. Please try again.',
            sw: '❌ Hitilafu imetokea. Tafadhali jaribu tena.',
            fr: '❌ Une erreur s\'est produite. Veuillez réessayer.'
        };
        return texts[language] || texts.en;
    }
}

module.exports = new TestHandler();