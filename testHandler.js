// testHandler.js - Handles all test logic (similar to examHandler)
const testsData = require('./testsData.js');


class TestHandler {
    constructor() {
        this.testSessions = new Map(); // jid -> test session
        this.userStates = new Map(); // jid -> { step: 'selecting_test', selectedTest: null }
    }

    // Initialize user state
    initUserState(jid) {
        if (!this.userStates.has(jid)) {
            this.userStates.set(jid, {
                step: 'idle',
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

    // Get test menu with CAPITAL LETTERS
    getTestMenu(language = 'en') {
        const menuTexts = {
            en: `📝 *TEST SELECTION*\n\n` +
                `Select a test level by typing:\n\n` +
                `🧠 TEST 1 - English Test one\n` +
                `📘 TEST 2 - English Test two\n` +
                `🎓 TEST 3 - Advanced Level\n` +
                `🏆 TEST 4 - Expert Level\n\n` +
                `*Type the test number in CAPITAL LETTERS*\n` +
                `Example: Type "TEST 1" for Beginner test`,
                
            sw: `📝 *UCHAGUZI WA MTIHANI*\n\n` +
                `Chagua kiwango cha mtihani kwa kuandika:\n\n` +
                `🧠 TEST 1 - Kiwango cha Mwanzo\n` +
                `📘 TEST 2 - Kiwango cha Kati\n` +
                `🎓 TEST 3 - Kiwango cha Juu\n` +
                `🏆 TEST 4 - Kiwango cha Mtaalamu\n\n` +
                `*Andika nambari ya mtihani kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "TEST 1" kwa mtihani wa mwanzo`,
                
            fr: `📝 *SÉLECTION DE TEST*\n\n` +
                `Sélectionnez un niveau de test en tapant:\n\n` +
                `🧠 TEST 1 - Niveau Débutant\n` +
                `📘 TEST 2 - Deuxième Contrôle d’Anglais\n` +
                `🎓 TEST 3 - Niveau Avancé\n` +
                `🏆 TEST 4 - Niveau Expert\n\n` +
                `*Tapez le numéro du test en MAJUSCULES*\n` +
                `Exemple: Tapez "TEST 1" pour le test débutant`
        };
        
        return menuTexts[language] || menuTexts.en;
    }

    // Handle user input
    handleUserInput(jid, text, language = 'en') {
        const upperText = text.toUpperCase().trim();
        const userState = this.initUserState(jid);
        userState.language = language;
        
        // If user has active test, handle test response
        if (this.hasActiveTest(jid)) {
            return { type: 'test_response', data: upperText };
        }
        
        // Handle CANCEL command
        if (upperText === 'CANCEL' || upperText === 'STOP') {
            this.cancelTest(jid);
            this.clearUserState(jid);
            return {
                type: 'test_cancelled',
                data: this.getTestCancelledText(language)
            };
        }
        
        // Handle test selection
        if (userState.step === 'selecting_test') {
            return this.handleTestSelection(jid, upperText, language);
        }
        
        // Default: start test selection
        if (upperText === 'TEST') {
            userState.step = 'selecting_test';
            return { 
                type: 'show_menu', 
                data: this.getTestMenu(language) 
            };
        }
        
        // Handle TEST 1, TEST 2, etc directly
        const testMap = {
            'TEST 1': '1',
            'TEST 2': '2', 
            'TEST 3': '3',
            'TEST 4': '4',
            'TEST BEGINNER': '1',
            'ENGLISH TEST TWO': '2',
            'TEST ADVANCED': '3',
            'TEST EXPERT': '4'
        };
        
        if (testMap[upperText]) {
            userState.selectedTest = testMap[upperText];
            return this.startTestSelection(jid, testMap[upperText], language);
        }
        
        return { type: 'invalid', data: null };
    }

    // Handle test selection
    handleTestSelection(jid, input, language) {
        const userState = this.userStates.get(jid);
        const testMap = {
            'TEST 1': '1',
            'TEST 2': '2',
            'TEST 3': '3',
            'TEST 4': '4',
            'TEST BEGINNER': '1',
            'ENGLISH TEST TWO': '2',
            'TEST ADVANCED': '3',
            'TEST EXPERT': '4'
        };
        
        if (testMap[input]) {
            userState.selectedTest = testMap[input];
            return this.startTestSelection(jid, testMap[input], language);
        } else {
            return {
                type: 'invalid_choice',
                data: this.getInvalidChoiceText(language) + '\n\n' + this.getTestMenu(language)
            };
        }
    }

    // Start test selection process
    startTestSelection(jid, testId, language) {
        const test = testsData[testId];
        
        if (!test) {
            return {
                type: 'error',
                data: this.getErrorText(language)
            };
        }
        
        // Start the test
        const testSession = this.startTest(jid, testId, language);
        
        if (testSession.error) {
            return {
                type: 'error',
                data: this.getErrorText(language)
            };
        }
        
        // Clear user state
        this.clearUserState(jid);
        
        // Get test instructions and first question
        const instructions = this.getTestInstructions(jid);
        const question = this.getCurrentQuestion(jid);
        
        let startText = `📝 *${testSession.testSession.title}*\n\n`;
        startText += `⏰ Time: ${testSession.testSession.time}\n`;
        startText += `📊 Total Marks: ${testSession.testSession.totalMarks}\n\n`;
        startText += `📋 *Instructions:*\n${instructions}\n\n`;
        
        if (question) {
            startText += `*First Question:*\n\n`;
            startText += this.formatTestQuestion(question, language);
        }
        
        startText += `\n\nType your answer or CANCEL to stop.`;
        
        return {
            type: 'test_started',
            data: startText
        };
    }

    // Start a test for a user
    startTest(jid, testId, language = 'en') {
        const test = testsData[testId];
        if (!test) {
            return { error: true, message: 'Test not found' };
        }
        
        const testSession = {
            jid: jid,
            testId: testId,
            language: language,
            title: test.title[language],
            time: test.time,
            totalMarks: test.totalMarks,
            instructions: test.instructions[language],
            questions: test.questions,
            currentQuestion: 0,
            currentSubQuestion: 0,
            answers: [],
            startTime: Date.now(),
            score: 0,
            completed: false
        };
        
        this.testSessions.set(jid, testSession);
        return { success: true, testSession: testSession };
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
        
        // Check if question has subQuestions
        if (question.subQuestions && question.subQuestions.length > 0) {
            if (session.currentSubQuestion >= question.subQuestions.length) {
                session.currentQuestion++;
                session.currentSubQuestion = 0;
                return this.getCurrentQuestion(jid); // Recursively get next question
            }
            
            const subQuestion = question.subQuestions[session.currentSubQuestion];
            
            return {
                questionNumber: session.currentQuestion + 1,
                subQuestionNumber: session.currentSubQuestion + 1,
                totalQuestions: session.questions.length,
                totalSubQuestions: question.subQuestions.length,
                text: question.text[session.language],
                subText: subQuestion.text ? subQuestion.text[session.language] : '',
                answer: subQuestion.answer ? subQuestion.answer[session.language] : ''
            };
        } else {
            // For questions without subquestions
            return {
                questionNumber: session.currentQuestion + 1,
                subQuestionNumber: 1,
                totalQuestions: session.questions.length,
                totalSubQuestions: 1,
                text: question.text[session.language],
                subText: '',
                answer: question.answer ? question.answer[session.language] : ''
            };
        }
    }

    // Submit answer
    submitAnswer(jid, answer) {
        const session = this.testSessions.get(jid);
        if (!session || session.completed) return { error: true, message: 'No active test' };
        
        const question = session.questions[session.currentQuestion];
        
        // Check if question has subQuestions
        if (question.subQuestions && question.subQuestions.length > 0) {
            const subQuestion = question.subQuestions[session.currentSubQuestion];
            
            // Store answer
            session.answers.push({
                questionNumber: session.currentQuestion + 1,
                subQuestionNumber: session.currentSubQuestion + 1,
                userAnswer: answer,
                correctAnswer: subQuestion.answer ? subQuestion.answer[session.language] : '',
                isCorrect: this.checkAnswer(answer, subQuestion.answer ? subQuestion.answer[session.language] : '')
            });
            
            // Move to next sub-question
            session.currentSubQuestion++;
            
            // If all sub-questions done, move to next question
            if (session.currentSubQuestion >= question.subQuestions.length) {
                session.currentQuestion++;
                session.currentSubQuestion = 0;
            }
        } else {
            // For questions without subquestions
            session.answers.push({
                questionNumber: session.currentQuestion + 1,
                subQuestionNumber: 1,
                userAnswer: answer,
                correctAnswer: question.answer ? question.answer[session.language] : '',
                isCorrect: this.checkAnswer(answer, question.answer ? question.answer[session.language] : '')
            });
            
            // Move to next question
            session.currentQuestion++;
        }
        
        // Check if test is complete
        if (session.currentQuestion >= session.questions.length) {
            session.completed = true;
            session.endTime = Date.now();
            session.score = this.calculateScore(session);
        }
        
        return { 
            success: true, 
            isComplete: session.completed,
            nextQuestion: !session.completed
        };
    }

    // Check if answer is correct
    checkAnswer(userAnswer, correctAnswer) {
        const user = userAnswer.toLowerCase().trim();
        const correct = correctAnswer.toLowerCase().trim();
        
        // Handle empty answers
        if (!user || !correct) return false;
        
        // For open-ended questions (marked with [])
        if (correct.includes('[') && correct.includes(']')) {
            // This is an open-ended question, check minimum length
            return user.length > 10; // Longer answer required for essays
        }
        
        // For multiple choice questions
        if (correct.includes('/')) {
            const options = correct.split('/').map(opt => opt.trim());
            return options.includes(user);
        }
        
        // For TRUE/FALSE questions
        if (correct === 'true' || correct === 'false') {
            return user === correct;
        }
        
        // For exact match questions
        return user === correct;
    }

    // Calculate score
    calculateScore(session) {
        const correctAnswers = session.answers.filter(a => a.isCorrect).length;
        const totalQuestions = session.answers.length;
        
        return totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    }

    // Get test results
    getTestResults(jid) {
        const session = this.testSessions.get(jid);
        if (!session || !session.completed) return null;
        
        const timeTaken = Math.round((session.endTime - session.startTime) / 1000 / 60); // in minutes
        const correctAnswers = session.answers.filter(a => a.isCorrect).length;
        const totalQuestions = session.answers.length;
        
        return {
            title: session.title,
            testId: session.testId,
            level: this.getLevelName(session.testId, session.language),
            score: session.score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            timeTaken: timeTaken,
            passed: this.isPassingScore(session.testId, session.score),
            answers: session.answers
        };
    }

    // Get level name
    getLevelName(testId, language) {
        const levelNames = {
            '1': { en: 'English test one', sw: 'Mwanzo', fr: 'Débutant' },
            '2': { en: 'Intermediate', sw: 'Kati', fr: 'Intermédiaire' },
            '3': { en: 'Advanced', sw: 'Juu', fr: 'Avancé' },
            '4': { en: 'Expert', sw: 'Mtaalamu', fr: 'Expert' }
        };
        return levelNames[testId][language] || levelNames[testId].en;
    }

    // Check if passing score
    isPassingScore(testId, score) {
        const passingScores = {
            '1': 60, // Beginner: 60%
            '2': 70, // Intermediate: 70%
            '3': 75, // Advanced: 75%
            '4': 80  // Expert: 80%
        };
        return score >= (passingScores[testId] || 60);
    }

    // Cancel test
    cancelTest(jid) {
        this.testSessions.delete(jid);
        this.clearUserState(jid);
        return { success: true };
    }

    // Check if user has active test
    hasActiveTest(jid) {
        const session = this.testSessions.get(jid);
        return session && !session.completed;
    }

    // Get active test info
    getActiveTestInfo(jid) {
        const session = this.testSessions.get(jid);
        if (!session || session.completed) return null;
        
        const current = this.getCurrentQuestion(jid);
        const answered = session.answers.length;
        const totalSubQuestions = session.questions.reduce((sum, q) => {
            return sum + (q.subQuestions ? q.subQuestions.length : 1);
        }, 0);
        
        return {
            testId: session.testId,
            level: this.getLevelName(session.testId, session.language),
            title: session.title,
            progress: `${answered}/${totalSubQuestions}`,
            currentQuestion: current ? current.questionNumber : 0,
            totalQuestions: session.questions.length
        };
    }

    // Get test instructions
    getTestInstructions(jid) {
        const session = this.testSessions.get(jid);
        if (!session) return null;
        
        return session.instructions || 'Answer all questions.';
    }

    // Format test question for display
    formatTestQuestion(question, language) {
        let text = `❓ *Question ${question.questionNumber}`;
        
        if (question.totalSubQuestions > 1) {
            text += `.${question.subQuestionNumber}`;
        }
        
        text += `*\n\n`;
        
        if (question.text && question.text.trim() !== '') {
            text += `${question.text}\n\n`;
        }
        
        if (question.subText && question.subText.trim() !== '') {
            text += `➡️ ${question.subText}\n\n`;
        }
        
        if (question.totalSubQuestions > 1) {
            text += `Progress: ${question.questionNumber}/${question.totalQuestions} `;
            text += `(Sub-question ${question.subQuestionNumber}/${question.totalSubQuestions})\n\n`;
        } else {
            text += `Progress: ${question.questionNumber}/${question.totalQuestions}\n\n`;
        }
        
        // Add answer instruction based on language
        const answerInstructions = {
            en: '✍️ Type your answer:',
            sw: '✍️ Andika jibu lako:',
            fr: '✍️ Tapez votre réponse:'
        };
        
        text += answerInstructions[language] || answerInstructions.en;
        
        return text;
    }

    // Get error text
    getErrorText(language = 'en') {
        const texts = {
            en: '❌ An error occurred. Please try again.',
            sw: '❌ Hitilafu imetokea. Tafadhali jaribu tena.',
            fr: '❌ Une erreur s\'est produite. Veuillez réessayer.'
        };
        return texts[language] || texts.en;
    }

    // Get invalid choice text
    getInvalidChoiceText(language = 'en') {
        const texts = {
            en: '❌ Invalid choice. Please type one of the options shown.',
            sw: '❌ Chaguo batili. Tafadhali andika moja ya chaguo zilizoonyeshwa.',
            fr: '❌ Choix invalide. Veuillez taper l\'une des options affichées.'
        };
        return texts[language] || texts.en;
    }

    // Get test cancelled text
    getTestCancelledText(language = 'en') {
        const texts = {
            en: '❌ Test cancelled. Type TEST to start a new test.',
            sw: '❌ Mtihani umeondolewa. Andika TEST kuanza mtihani mpya.',
            fr: '❌ Test annulé. Tapez TEST pour commencer un nouveau test.'
        };
        return texts[language] || texts.en;
    }

    // Get test result text
    getTestResultText(results, language = 'en') {
        const levelName = this.getLevelName(results.testId, language);
        
        const texts = {
            en: `📊 *TEST RESULTS - ${levelName.toUpperCase()}*\n\n` +
                `📝 Test: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Time Taken: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 CONGRATULATIONS! YOU PASSED! 🎉' : '📚 Keep studying! Try again.'}\n\n` +
                `Type TEST to take another test.`,
                
            sw: `📊 *MATOKEO YA MTIHANI - ${levelName.toUpperCase()}*\n\n` +
                `📝 Mtihani: ${results.title}\n` +
                `📊 Alama: ${results.score}%\n` +
                `✅ Sahihi: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Muda Uliochukuliwa: ${results.timeTaken} dakika\n\n` +
                `${results.passed ? '🎉 HONGERA! UMEWEZA KUPITA! 🎉' : '📚 Endelea kujifunza! Jaribu tena.'}\n\n` +
                `Andika TEST kuchukua mtihani mwingine.`,
                
            fr: `📊 *RÉSULTATS DU TEST - ${levelName.toUpperCase()}*\n\n` +
                `📝 Test: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Temps Pris: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 FÉLICITATIONS ! VOUS AVEZ RÉUSSI ! 🎉' : '📚 Continuez à étudier ! Réessayez.'}\n\n` +
                `Tapez TEST pour passer un autre test.`
        };
        
        return texts[language] || texts.en;
    }
}

module.exports = new TestHandler();