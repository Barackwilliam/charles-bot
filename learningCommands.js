// learningCommands.js - Hii ni file yako ya awali "index.js"
const learningDb = require('./learningDb');
const learningSession = require('./learningSession');
const config = require('./learningConfig');

// Helper function for command aliases
function getCommandAlias(command) {
    const aliases = {
        'register': 'r',
        'menu': 'm',
        'courses': 'c',
        'learn': 'l',
        'exercise': 'e',
        'test': 't',
        'exam': 'x',
        'progress': 'p',
        'support': 's',
        'language': 'lang',
        'help': 'h'
    };
    
    return Object.keys(aliases).find(key => aliases[key] === command);
}

module.exports = {
    // === REGISTRATION ===
    "register": {
        description: "📝 Register as a student",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            const { error } = await learningDb.registerStudent(jid);
            
            if (error) {
                return "❌ Registration failed. Please try again.";
            }
            
            return `🎓 *Registration Successful!*\n\n` +
                   `Welcome to ${config.academyName}!\n\n` +
                   `Choose your language:\n` +
                   `1. English 🇬🇧\n` +
                   `2. Kiswahili 🇹🇿\n` +
                   `3. Français 🇫🇷\n\n` +
                   `Type: .language 1 (for English)`;
        }
    },

    // === LANGUAGE ===
    "language": {
        description: "🌍 Change your language",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            
            if (!args.length) {
                return `Select your language:\n\n` +
                       `1. English 🇬🇧\n` +
                       `2. Kiswahili 🇹🇿\n` +
                       `3. Français 🇫🇷\n\n` +
                       `Example: .language 1`;
            }
            
            const choice = args[0];
            let language = 'en';
            
            switch(choice) {
                case '1': language = 'en'; break;
                case '2': language = 'sw'; break;
                case '3': language = 'fr'; break;
                default: return "❌ Invalid choice. Use 1, 2, or 3";
            }
            
            const { error } = await learningDb.setStudentLanguage(jid, language);
            
            if (error) {
                return "❌ Failed to update language.";
            }
            
            const languages = {
                'en': 'English 🇬🇧',
                'sw': 'Kiswahili 🇹🇿', 
                'fr': 'Français 🇫🇷'
            };
            
            return `✅ Language set to ${languages[language]}!`;
        }
    },

    // === MENU ===
    "menu": {
        description: "📱 Main menu",
        async execute(sock, msg, args, db, helpers) {
            return `🎓 *${config.academyName} - Main Menu*\n\n` +
                   `What would you like to do?\n\n` +
                   `1. 📚 Learn a lesson\n` +
                   `2. 🧪 Practice exercise\n` +
                   `3. 📝 Take a test\n` +
                   `4. 🎓 Final exam\n` +
                   `5. 📊 My progress\n` +
                   `6. 🌍 Change language\n` +
                   `7. ❓ Help & Support\n\n` +
                   `Reply with the number of your choice.`;
        }
    },

    // === COURSES ===
    "courses": {
        description: "📚 Available courses",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            const language = await learningDb.getStudentLanguage(jid);
            
            const { data: courses, error } = await learningDb.getCourses(language);
            
            if (error || !courses) {
                return "❌ Unable to load courses. Please try again.";
            }
            
            if (courses.length === 0) {
                return "📝 No courses available yet. Check back soon!";
            }
            
            let courseList = `📚 *Available Courses:*\n\n`;
            
            courses.forEach((course, index) => {
                courseList += `${index + 1}. ${course.icon || '📘'} *${course.name}*\n`;
                if (course.description) {
                    courseList += `   ${course.description}\n`;
                }
                courseList += `\n`;
            });
            
            courseList += `Reply with the number to select a course.`;
            
            return courseList;
        }
    },

    // === LEARN === (Start learning)
    "learn": {
        description: "📖 Start learning",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            
            return `📖 *Start Learning*\n\n` +
                   `First, choose a course:\n\n` +
                   `1. English Language\n` +
                   `2. Kiswahili\n` +
                   `3. Graphics Design\n` +
                   `4. Website Design\n\n` +
                   `Type: .courses\n\n` +
                   `Then select a course number to see lessons.`;
        }
    },

    // === EXERCISE ===
    "exercise": {
        description: "🧪 Practice exercise",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            
            if (!args.length) {
                return `🧪 *Practice Exercise*\n\n` +
                       `Choose exercise type:\n\n` +
                       `1. English Exercises\n` +
                       `2. Kiswahili Exercises\n` +
                       `3. Graphics Design Exercises\n` +
                       `4. Website Design Exercises\n\n` +
                       `Reply with number (e.g., .exercise 1)`;
            }
            
            const courseId = args[0];
            const courseNames = {
                '1': 'English',
                '2': 'Kiswahili',
                '3': 'Graphics Design',
                '4': 'Website Design'
            };
            
            if (!courseNames[courseId]) {
                return "❌ Invalid choice. Use 1, 2, 3, or 4";
            }
            
            // Set up exercise session
            learningSession.setCourse(jid, courseId);
            learningSession.getSession(jid).currentActivity = 'exercise';
            
            // Sample questions for exercise
            const exerciseQuestions = [
                {
                    number: 1,
                    type: 'multiple_choice',
                    text: 'Choose the correct sentence:',
                    options: [
                        'He go to school every day',
                        'He goes to school every day',
                        'He going to school every day',
                        'He gone to school every day'
                    ],
                    correctAnswer: 'B'
                },
                {
                    number: 2,
                    type: 'true_false',
                    text: '"I am going to the market" is in Present Continuous tense.',
                    correctAnswer: 'True'
                },
                {
                    number: 3,
                    type: 'short_answer',
                    text: 'Write the plural form of "child":',
                    correctAnswer: 'children'
                },
                {
                    number: 4,
                    type: 'multiple_choice',
                    text: 'Which word is a verb?',
                    options: ['Happiness', 'Run', 'Table', 'Beautiful'],
                    correctAnswer: 'B'
                },
                {
                    number: 5,
                    type: 'true_false',
                    text: 'The past tense of "eat" is "eated".',
                    correctAnswer: 'False'
                }
            ];
            
            learningSession.setQuestions(jid, exerciseQuestions);
            
            const firstQuestion = exerciseQuestions[0];
            let questionText = `🧪 *Exercise Started: ${courseNames[courseId]}*\n\n`;
            questionText += `You will answer ${exerciseQuestions.length} questions.\n`;
            questionText += `Type READY to begin or CANCEL to stop.\n\n`;
            questionText += `*Topics covered:*\n`;
            
            if (courseId === '1') {
                questionText += `- English Grammar\n- Vocabulary\n- Sentence Structure`;
            } else if (courseId === '2') {
                questionText += `- Sarufi ya Kiswahili\n- Msamiati\n- Uundaji wa Sentensi`;
            } else if (courseId === '3') {
                questionText += `- Design Principles\n- Color Theory\n- Software Tools`;
            } else if (courseId === '4') {
                questionText += `- HTML Basics\n- CSS Styling\n- JavaScript Fundamentals`;
            }
            
            return questionText;
        }
    },

    // === TEST ===
    "test": {
        description: "📝 Take a test",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            
            if (!args.length) {
                return `📝 *Take a Test*\n\n` +
                       `Select test level:\n\n` +
                       `1. Test 1 (Beginner)\n` +
                       `2. Test 2 (Intermediate)\n` +
                       `3. Test 3 (Advanced)\n` +
                       `4. Test 4 (Expert)\n\n` +
                       `Reply with number (e.g., .test 1)`;
            }
            
            const testLevel = args[0];
            const testNames = {
                '1': 'Test 1 (Beginner)',
                '2': 'Test 2 (Intermediate)',
                '3': 'Test 3 (Advanced)',
                '4': 'Test 4 (Expert)'
            };
            
            if (!testNames[testLevel]) {
                return "❌ Invalid choice. Use 1, 2, 3, or 4";
            }
            
            // Set up test session
            learningSession.getSession(jid).currentActivity = 'test';
            learningSession.getSession(jid).currentCourse = testLevel;
            
            // Sample test questions
            const testQuestions = [
                {
                    number: 1,
                    type: 'multiple_choice',
                    text: 'Which word is a verb?',
                    options: ['Happiness', 'Run', 'Table', 'Beautiful'],
                    correctAnswer: 'B'
                },
                {
                    number: 2,
                    type: 'true_false',
                    text: 'Past tense of "eat" is "ate".',
                    correctAnswer: 'True'
                },
                {
                    number: 3,
                    type: 'multiple_choice',
                    text: 'What is the synonym of "happy"?',
                    options: ['Sad', 'Joyful', 'Angry', 'Tired'],
                    correctAnswer: 'B'
                },
                {
                    number: 4,
                    type: 'short_answer',
                    text: 'What is 5 + 7?',
                    correctAnswer: '12'
                },
                {
                    number: 5,
                    type: 'multiple_choice',
                    text: 'Which is a programming language?',
                    options: ['HTML', 'Java', 'CSS', 'JSON'],
                    correctAnswer: 'B'
                },
                {
                    number: 6,
                    type: 'true_false',
                    text: 'CSS stands for Cascading Style Sheets.',
                    correctAnswer: 'True'
                },
                {
                    number: 7,
                    type: 'multiple_choice',
                    text: 'What is the capital of Tanzania?',
                    options: ['Nairobi', 'Kampala', 'Dodoma', 'Dar es Salaam'],
                    correctAnswer: 'C'
                },
                {
                    number: 8,
                    type: 'short_answer',
                    text: 'How many days are in a week?',
                    correctAnswer: '7'
                }
            ];
            
            learningSession.setQuestions(jid, testQuestions);
            
            return `📝 *${testNames[testLevel]} Started*\n\n` +
                   `You will answer ${testQuestions.length} questions.\n` +
                   `Type READY to begin or CANCEL to stop.\n\n` +
                   `*Test Instructions:*\n` +
                   `• Answer all questions\n` +
                   `• For multiple choice, reply with A, B, C, or D\n` +
                   `• For True/False, reply with True or False\n` +
                   `• Passing score is 70%`;
        }
    },

    // === EXAM ===
    "exam": {
        description: "🎓 Final exam",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            
            if (!args.length) {
                return `🎓 *Final Exam*\n\n` +
                       `Ready to take the final exam?\n` +
                       `This exam covers all course material.\n\n` +
                       `Type: .exam start\n` +
                       `To begin your final assessment.`;
            }
            
            if (args[0].toLowerCase() === 'start') {
                // Set up exam session
                learningSession.getSession(jid).currentActivity = 'exam';
                
                // Sample exam questions (10 questions)
                const examQuestions = [
                    {
                        number: 1,
                        type: 'multiple_choice',
                        text: 'Choose the correct sentence:',
                        options: [
                            'He go to school every day',
                            'He goes to school every day',
                            'He going to school every day',
                            'He gone to school every day'
                        ],
                        correctAnswer: 'B'
                    },
                    {
                        number: 2,
                        type: 'true_false',
                        text: '"I am going to the market" is in Present Continuous tense.',
                        correctAnswer: 'True'
                    },
                    {
                        number: 3,
                        type: 'short_answer',
                        text: 'Write the plural form of "child":',
                        correctAnswer: 'children'
                    },
                    {
                        number: 4,
                        type: 'multiple_choice',
                        text: 'Which word is a verb?',
                        options: ['Happiness', 'Run', 'Table'],
                        correctAnswer: 'B'
                    },
                    {
                        number: 5,
                        type: 'true_false',
                        text: 'Past tense of "eat" is "ate".',
                        correctAnswer: 'True'
                    },
                    {
                        number: 6,
                        type: 'multiple_choice',
                        text: 'What does HTML stand for?',
                        options: [
                            'Hyper Text Markup Language',
                            'High Tech Modern Language',
                            'Home Tool Markup Language',
                            'Hyperlinks and Text Markup Language'
                        ],
                        correctAnswer: 'A'
                    },
                    {
                        number: 7,
                        type: 'short_answer',
                        text: 'What is the capital of France?',
                        correctAnswer: 'Paris'
                    },
                    {
                        number: 8,
                        type: 'multiple_choice',
                        text: 'Which is not a programming language?',
                        options: ['Python', 'Java', 'Photoshop', 'C++'],
                        correctAnswer: 'C'
                    },
                    {
                        number: 9,
                        type: 'true_false',
                        text: 'CSS is used for styling web pages.',
                        correctAnswer: 'True'
                    },
                    {
                        number: 10,
                        type: 'multiple_choice',
                        text: 'What is 8 × 9?',
                        options: ['72', '81', '64', '89'],
                        correctAnswer: 'A'
                    }
                ];
                
                learningSession.setQuestions(jid, examQuestions);
                
                return `🎓 *Welcome to the final exam!*\n\n` +
                       `📊 *Exam Details:*\n` +
                       `• Total Questions: ${examQuestions.length}\n` +
                       `• Passing Score: 70%\n` +
                       `• Time: Approximately 10-15 minutes\n\n` +
                       `📝 *Instructions:*\n` +
                       `1. Type the letter (A, B, C, D) for multiple choice\n` +
                       `2. Type True or False for true/false questions\n` +
                       `3. Type your answer for short answer questions\n` +
                       `4. You cannot go back to previous questions\n\n` +
                       `Reply READY to begin or CANCEL to stop.`;
            }
            
            return "❌ Invalid command. Use: .exam start";
        }
    },

    // === PROGRESS ===
    "progress": {
        description: "📊 Check your learning progress",
        async execute(sock, msg, args, db, helpers) {
            const jid = msg.key.remoteJid;
            
            const stats = await learningDb.getStudentStats(jid);
            const { data: progress, error } = await learningDb.getStudentProgress(jid);
            
            if (error) {
                return "❌ Unable to load your progress.";
            }
            
            let progressMsg = `📊 *Your Learning Progress*\n\n`;
            progressMsg += `✅ Completed Lessons: ${stats.completedLessons}\n`;
            progressMsg += `🏆 Average Score: ${stats.averageScore}%\n`;
            progressMsg += `🎓 Exams Passed: ${stats.passedExams}/${stats.totalExams}\n\n`;
            
            if (progress && progress.length > 0) {
                progressMsg += `📈 *Recent Activities:*\n`;
                progress.slice(0, 3).forEach((p, i) => {
                    const date = new Date(p.completed_at).toLocaleDateString();
                    progressMsg += `${i + 1}. ${p.lessons?.title || 'Lesson'}: ${p.score || 0}%\n`;
                });
            } else {
                progressMsg += `📝 No completed lessons yet.\n`;
                progressMsg += `Start learning with: .courses`;
            }
            
            progressMsg += `\nKeep learning! 🚀`;
            
            return progressMsg;
        }
    },

    // === SUPPORT ===
    "support": {
        description: "❓ Get help and support",
        async execute(sock, msg, args, db, helpers) {
            return `❓ *Help & Support*\n\n` +
                   `For any assistance, contact us:\n\n` +
                   `📞 *Support:* +${config.supportPhone || '255776831991'}\n` +
                   `📧 *Email:* support@charlesacademy.co.tz\n\n` +
                   `🕒 *Available:* Mon-Fri, 8AM-6PM\n\n` +
                   `*Common Commands:*\n` +
                   `.menu - Main menu\n` +
                   `.courses - List courses\n` +
                   `.learn - Start learning\n` +
                   `.progress - Your progress\n` +
                   `.language - Change language\n` +
                   `.exercise - Practice exercises\n` +
                   `.test - Take a test\n` +
                   `.exam - Final exam\n` +
                   `.support - This help message`;
        }
    },

    // === HELP ===
    "help": {
        description: "📚 Show all available commands",
        async execute(sock, msg, args, db, helpers) {
            const commands = module.exports;
            let helpText = `🎓 *Charles Academy - Help Center*\n\n`;
            helpText += `*Available Commands:*\n\n`;
            
            Object.keys(commands).forEach(cmd => {
                if (commands[cmd].description) {
                    const alias = getCommandAlias(cmd);
                    helpText += `*.${cmd}*${alias ? ` / .${alias}` : ''} - ${commands[cmd].description}\n`;
                }
            });
            
            helpText += `\n*Quick Start:*\n`;
            helpText += `1. Say "Hi" for quick menu\n`;
            helpText += `2. Type .register to sign up\n`;
            helpText += `3. Type .courses to see available courses\n`;
            helpText += `4. Type .language 1 to set English\n\n`;
            helpText += `*Need Help?* Type .support for assistance.`;
            
            return helpText;
        }
    }
};