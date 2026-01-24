// examHandler.js - Handles all exam logic
const examsData = require('./examsData.js');

class ExamHandler {
    constructor() {
        this.examSessions = new Map(); // jid -> exam session
        this.userStates = new Map(); // jid -> { step: 'selecting_course', selectedCourse: null }
    }
    
    // Initialize user state
    initUserState(jid) {
        if (!this.userStates.has(jid)) {
            this.userStates.set(jid, {
                step: 'idle',
                selectedCourse: null,
                selectedExam: null,
                language: 'en'
            });
        }
        return this.userStates.get(jid);
    }
    
    // Clear user state
    clearUserState(jid) {
        this.userStates.delete(jid);
    }
    
    // Get exam menu with CAPITAL LETTERS
    getExamMenu(language = 'en') {
        const menuTexts = {
            en: `🎓 *EXAM SELECTION*\n\n` +
                `Select a course by typing:\n\n` +
                `📚 ENGLISH_1 - English Language Exams\n` +
                `🇹🇿 KISWAHILI_1 - Kiswahili Exams\n` +
                `🎨 GRAPHICS - Graphics Design Exams\n` +
                `💻 WEBSITE - Website Design Exams\n\n` +
                `*Type the word in CAPITAL LETTERS*\n` +
                `Example: Type "ENGLISH_1" for English exams`,
                
            sw: `🎓 *UCHAGUZI WA MTIHANI*\n\n` +
                `Chagua kozi kwa kuandika:\n\n` +
                `📚 ENGLISH_1 - Mitihani ya Lugha ya Kiingereza\n` +
                `🇹🇿 KISWAHILI_1 - Mitihani ya Kiswahili\n` +
                `🎨 GRAPHICS - Mitihani ya Ubunifu wa Michoro\n` +
                `💻 WEBSITE - Mitihani ya Ubunifu wa Tovuti\n\n` +
                `*Andika neno kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "ENGLISH_1" kwa mitihani ya Kiingereza`,
                
            fr: `🎓 *SÉLECTION D'EXAMEN*\n\n` +
                `Sélectionnez un cours en tapant:\n\n` +
                `📚 ENGLISH_1 - Examens de Langue Anglaise\n` +
                `🇹🇿 KISWAHILI_1 - Examens de Kiswahili\n` +
                `🎨 GRAPHICS - Examens de Conception Graphique\n` +
                `💻 WEBSITE - Examens de Conception de Sites Web\n\n` +
                `*Tapez le mot en MAJUSCULES*\n` +
                `Exemple: Tapez "ENGLISH_1" pour les examens d'anglais`
        };
        
        return menuTexts[language] || menuTexts.en;
    }
    
    // Get course selection text
    getCourseSelectionText(courseId, language = 'en') {
        const courseNames = {
            'english': {
                en: `📚 *ENGLISH LANGUAGE EXAMS*\n\n` +
                    `Available exams:\n\n` +
                    `✍️ WRITING SKILLS\n` +
                    `📖 READING SKILLS\n` +
                    `📝 ENGLISH GRAMMAR\n\n` +
                    `*Type the exam name in CAPITAL LETTERS*\n` +
                    `Example: Type "WRITING SKILLS"`,
                    
                sw: `📚 *MITIHANI YA LUGHA YA KIINGEREZA*\n\n` +
                    `Mitihani inayopatikana:\n\n` +
                    `✍️ WRITING SKILLS\n` +
                    `📖 READING SKILLS\n` +
                    `📝 ENGLISH GRAMMAR\n\n` +
                    `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                    `Mfano: Andika "WRITING SKILLS"`,
                    
                fr: `📚 *EXAMENS DE LANGUE ANGLAISE*\n\n` +
                    `Examens disponibles:\n\n` +
                    `✍️ WRITING SKILLS\n` +
                    `📖 READING SKILLS\n` +
                    `📝 ENGLISH GRAMMAR\n\n` +
                    `*Tapez le nom de l'examen en MAJUSCULES*\n` +
                    `Exemple: Tapez "WRITING SKILLS"`
            },
            'kiswahili': {
                en: `🇹🇿 *KISWAHILI EXAMS*\n\n` +
                    `Available exams:\n\n` +
                    `📖 KUSOMA (Reading)\n` +
                    `✍️ MAANDISHI (Writing)\n` +
                    `📝 SARUFI (Grammar)\n\n` +
                    `*Type the exam name in CAPITAL LETTERS*\n` +
                    `Example: Type "KUSOMA"`,
                    
                sw: `🇹🇿 *MITIHANI YA KISWAHILI*\n\n` +
                    `Mitihani inayopatikana:\n\n` +
                    `📖 KUSOMA\n` +
                    `✍️ MAANDISHI\n` +
                    `📝 SARUFI\n\n` +
                    `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                    `Mfano: Andika "KUSOMA"`,
                    
                fr: `🇹🇿 *EXAMENS DE KISWAHILI*\n\n` +
                    `Examens disponibles:\n\n` +
                    `📖 KUSOMA (Lecture)\n` +
                    `✍️ MAANDISHI (Écriture)\n` +
                    `📝 SARUFI (Grammaire)\n\n` +
                    `*Tapez le nom de l'examen en MAJUSCULES*\n` +
                    `Exemple: Tapez "KUSOMA"`
            },
            'graphics': {
                en: `🎨 *GRAPHICS DESIGN EXAMS*\n\n` +
                    `Available exams:\n\n` +
                    `🏷️ BRANDING\n` +
                    `🎨 CANVA\n` +
                    `📐 DESIGN PRINCIPLES\n` +
                    `📱 PIXELLAB\n` +
                    `🛠️ PRACTICAL FINAL\n\n` +
                    `*Type the exam name in CAPITAL LETTERS*\n` +
                    `Example: Type "BRANDING"`,
                    
                sw: `🎨 *MITIHANI YA UBUNIFU WA MICHORO*\n\n` +
                    `Mitihani inayopatikana:\n\n` +
                    `🏷️ BRANDING\n` +
                    `🎨 CANVA\n` +
                    `📐 DESIGN PRINCIPLES\n` +
                    `📱 PIXELLAB\n` +
                    `🛠️ PRACTICAL FINAL\n\n` +
                    `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                    `Mfano: Andika "BRANDING"`,
                    
                fr: `🎨 *EXAMENS DE CONCEPTION GRAPHIQUE*\n\n` +
                    `Examens disponibles:\n\n` +
                    `🏷️ BRANDING\n` +
                    `🎨 CANVA\n` +
                    `📐 DESIGN PRINCIPLES\n` +
                    `📱 PIXELLAB\n` +
                    `🛠️ PRACTICAL FINAL\n\n` +
                    `*Tapez le nom de l'examen en MAJUSCULES*\n` +
                    `Exemple: Tapez "BRANDING"`
            },
            'website': {
                en: `💻 *WEBSITE DESIGN EXAMS*\n\n` +
                    `Available exams:\n\n` +
                    `💻 FINAL THEORY\n\n` +
                    `*Type: FINAL THEORY*`,
                    
                sw: `💻 *MITIHANI YA UBUNIFU WA TOVUTI*\n\n` +
                    `Mitihani inayopatikana:\n\n` +
                    `💻 FINAL THEORY\n\n` +
                    `*Andika: FINAL THEORY*`,
                    
                fr: `💻 *EXAMENS DE CONCEPTION DE SITES WEB*\n\n` +
                    `Examens disponibles:\n\n` +
                    `💻 FINAL THEORY\n\n` +
                    `*Tapez: FINAL THEORY*`
            }
        };
        
        return courseNames[courseId][language] || courseNames[courseId].en;
    }
    
    // Handle user input
    handleUserInput(jid, text, language = 'en') {
        const upperText = text.toUpperCase().trim();
        const userState = this.initUserState(jid);
        userState.language = language;
        
        // If user has active exam, handle exam response
        if (this.hasActiveExam(jid)) {
            return { type: 'exam_response', data: upperText };
        }
        
        // Handle CANCEL command
        if (upperText === 'CANCEL' || upperText === 'STOP') {
            this.cancelExam(jid);
            this.clearUserState(jid);
            return {
                type: 'exam_cancelled',
                data: this.getExamCancelledText(language)
            };
        }
        
        // Handle course selection
        if (userState.step === 'selecting_course') {
            return this.handleCourseSelection(jid, upperText, language);
        }
        
        // Handle exam selection
        if (userState.step === 'selecting_exam') {
            return this.handleExamSelection(jid, upperText, language);
        }
        
        // Default: start exam selection
        if (upperText === 'EXAM') {
            userState.step = 'selecting_course';
            return { 
                type: 'show_menu', 
                data: this.getExamMenu(language) 
            };
        }
        
        return { type: 'invalid', data: null };
    }
    
    // Handle course selection
    handleCourseSelection(jid, input, language) {
        const userState = this.userStates.get(jid);
        const courseMap = {
            'ENGLISH_1': 'english',
            'KISWAHILI_1': 'kiswahili',
            'GRAPHICS': 'graphics',
            'WEBSITE': 'website',
            'GRAPHIC': 'graphics', // Alternative
            'WEB': 'website' // Alternative
        };
        
        if (courseMap[input]) {
            userState.selectedCourse = courseMap[input];
            userState.step = 'selecting_exam';
            
            return {
                type: 'show_course_exams',
                data: this.getCourseSelectionText(courseMap[input], language)
            };
        } else {
            return {
                type: 'invalid_choice',
                data: this.getInvalidChoiceText(language) + '\n\n' + this.getExamMenu(language)
            };
        }
    }
    
    // Handle exam selection
    handleExamSelection(jid, input, language) {
        const userState = this.userStates.get(jid);
        const courseId = userState.selectedCourse;
        
        if (!courseId) {
            userState.step = 'selecting_course';
            return {
                type: 'show_menu',
                data: this.getExamMenu(language)
            };
        }
        
        // Map exam names to exam IDs
        const examMaps = {
            'english': {
                'WRITING SKILLS': 'writing_skills',
                'WRITING': 'writing_skills',
                'READING SKILLS': 'reading_skills',
                'READING': 'reading_skills',
                'ENGLISH GRAMMAR': 'grammar',
                'GRAMMAR': 'grammar'
            },
            'kiswahili': {
                'KUSOMA': 'kusoma',
                'READING': 'kusoma',
                'MAANDISHI': 'maandishi',
                'WRITING': 'maandishi',
                'SARUFI': 'sarufi',
                'GRAMMAR': 'sarufi'
            },
            'graphics': {
                'BRANDING': 'branding',
                'BRAND': 'branding',
                'CANVA': 'canva',
                'DESIGN PRINCIPLES': 'principles',
                'PRINCIPLES': 'principles',
                'PIXELLAB': 'pixellab',
                'PIXEL': 'pixellab',
                'PRACTICAL FINAL': 'practical',
                'PRACTICAL': 'practical'
            },
            'website': {
                'FINAL THEORY': 'theory',
                'THEORY': 'theory',
                'WEBSITE THEORY': 'theory'
            }
        };
        
        const examMap = examMaps[courseId] || {};
        const examId = examMap[input];
        
        if (examId) {
            // Start the exam
            const exam = this.startExam(jid, courseId, examId, language);
            
            if (exam.error) {
                return {
                    type: 'error',
                    data: this.getErrorText(language)
                };
            }
            
            // Clear user state
            this.clearUserState(jid);
            
            // Get exam instructions and first question
            const instructions = this.getExamInstructions(jid);
            const question = this.getCurrentQuestion(jid);
            
            let startText = `🎓 *${exam.examSession.title}*\n\n`;
            startText += `⏰ Time: ${exam.examSession.time}\n`;
            startText += `📊 Total Marks: ${exam.examSession.totalMarks}\n\n`;
            startText += `📝 *Instructions:*\n${instructions}\n\n`;
            
            if (question) {
                startText += `*First Question:*\n\n`;
                startText += this.formatExamQuestion(question, language);
            }
            
            startText += `\n\nType your answer or CANCEL to stop.`;
            
            return {
                type: 'exam_started',
                data: startText
            };
        } else {
            return {
                type: 'invalid_choice',
                data: this.getInvalidChoiceText(language) + '\n\n' + 
                      this.getCourseSelectionText(courseId, language)
            };
        }
    }
    
    // Start an exam for a user
    startExam(jid, courseId, examId, language = 'en') {
        const course = examsData[courseId];
        if (!course || !course[examId]) {
            return { error: true, message: 'Exam not found' };
        }
        
        const exam = course[examId];
        const examSession = {
            jid: jid,
            courseId: courseId,
            examId: examId,
            language: language,
            title: exam.title[language],
            time: exam.time,
            totalMarks: exam.totalMarks,
            instructions: exam.instructions ? exam.instructions[language] : '',
            questions: exam.questions,
            currentQuestion: 0,
            currentSubQuestion: 0,
            answers: [],
            startTime: Date.now(),
            score: 0,
            completed: false
        };
        
        this.examSessions.set(jid, examSession);
        return { success: true, examSession };
    }
    
    // Get current question
    getCurrentQuestion(jid) {
        const session = this.examSessions.get(jid);
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
        const session = this.examSessions.get(jid);
        if (!session || session.completed) return { error: true, message: 'No active exam' };
        
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
        
        // Check if exam is complete
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
            return user.length > 3;
        }
        
        // For multiple choice questions
        if (correctAnswer.includes('/')) {
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
    
    // Get exam results
    getExamResults(jid) {
        const session = this.examSessions.get(jid);
        if (!session || !session.completed) return null;
        
        const timeTaken = Math.round((session.endTime - session.startTime) / 1000 / 60); // in minutes
        const correctAnswers = session.answers.filter(a => a.isCorrect).length;
        const totalQuestions = session.answers.length;
        
        return {
            title: session.title,
            course: session.courseId,
            exam: session.examId,
            score: session.score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            timeTaken: timeTaken,
            passed: session.score >= 70,
            answers: session.answers
        };
    }
    
    // Cancel exam
    cancelExam(jid) {
        this.examSessions.delete(jid);
        this.clearUserState(jid);
        return { success: true };
    }
    
    // Check if user has active exam
    hasActiveExam(jid) {
        const session = this.examSessions.get(jid);
        return session && !session.completed;
    }
    
    // Get active exam info
    getActiveExamInfo(jid) {
        const session = this.examSessions.get(jid);
        if (!session || session.completed) return null;
        
        const current = this.getCurrentQuestion(jid);
        const answered = session.answers.length;
        const totalSubQuestions = session.questions.reduce((sum, q) => {
            return sum + (q.subQuestions ? q.subQuestions.length : 1);
        }, 0);
        
        return {
            course: session.courseId,
            exam: session.examId,
            title: session.title,
            progress: `${answered}/${totalSubQuestions}`,
            currentQuestion: current ? current.questionNumber : 0,
            totalQuestions: session.questions.length
        };
    }
    
    // Get exam instructions
    getExamInstructions(jid) {
        const session = this.examSessions.get(jid);
        if (!session) return null;
        
        return session.instructions || 'Answer all questions.';
    }
    
    // Format exam question for display
    formatExamQuestion(question, language) {
        let text = `📝 *Question ${question.questionNumber}`;
        
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
    
    // Get exam cancelled text
    getExamCancelledText(language = 'en') {
        const texts = {
            en: '❌ Exam cancelled. Type EXAM to start a new exam.',
            sw: '❌ Mtihani umeondolewa. Andika EXAM kuanza mtihani mpya.',
            fr: '❌ Examen annulé. Tapez EXAM pour commencer un nouvel examen.'
        };
        return texts[language] || texts.en;
    }
    
    // Get exam result text
    getExamResultText(results, language = 'en') {
        const texts = {
            en: `🎓 *EXAM RESULTS*\n\n` +
                `📚 Exam: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Time Taken: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 CONGRATULATIONS! YOU PASSED! 🎉' : '📚 Keep studying! Try again.'}\n\n` +
                `Type EXAM to take another exam.`,
                
            sw: `🎓 *MATOKEO YA MTIHANI*\n\n` +
                `📚 Mtihani: ${results.title}\n` +
                `📊 Alama: ${results.score}%\n` +
                `✅ Sahihi: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Muda Uliochukuliwa: ${results.timeTaken} dakika\n\n` +
                `${results.passed ? '🎉 HONGERA! UMEWEZA KUPITA! 🎉' : '📚 Endelea kujifunza! Jaribu tena.'}\n\n` +
                `Andika EXAM kuchukua mtihani mwingine.`,
                
            fr: `🎓 *RÉSULTATS DE L'EXAMEN*\n\n` +
                `📚 Examen: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Temps Pris: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 FÉLICITATIONS ! VOUS AVEZ RÉUSSI ! 🎉' : '📚 Continuez à étudier ! Réessayez.'}\n\n` +
                `Tapez EXAM pour passer un autre examen.`
        };
        
        return texts[language] || texts.en;
    }
}

module.exports = new ExamHandler();