// learnHandler.js
// Handles learning sessions and Google Drive access control

const learnsData = require('./learnsData');
const learningDb = require('./learningDb');

class LearnHandler {
    constructor() {
        // Store user learning states
        this.userStates = new Map();
        
        // Store last accessed day per user per course
        this.userProgress = new Map();
        
        console.log('📚 LearnHandler initialized');
    }

    // Initialize user state
    initUserState(jid) {
        if (!this.userStates.has(jid)) {
            this.userStates.set(jid, {
                step: 'selecting_course',
                selectedCourse: null,
                selectedDay: null,
                language: 'en',
                lastAccessDate: null,
                currentCourseProgress: {}
            });
        }
        
        // Load user progress from database
        this.loadUserProgress(jid);
        
        return this.userStates.get(jid);
    }

    // Clear user state
    clearUserState(jid) {
        this.userStates.delete(jid);
    }

    // Load user progress from database
    async loadUserProgress(jid) {
        try {
            const progress = await learningDb.getLearningProgress(jid);
            if (progress && progress.courses) {
                if (!this.userProgress.has(jid)) {
                    this.userProgress.set(jid, {});
                }
                const userProg = this.userProgress.get(jid);
                userProg.courses = progress.courses || {};
                userProg.lastAccessDates = progress.lastAccessDates || {};
            }
        } catch (error) {
            console.error('Error loading user progress:', error);
        }
    }

    // Save user progress to database
    async saveUserProgress(jid, course, day) {
        try {
            if (!this.userProgress.has(jid)) {
                this.userProgress.set(jid, {
                    courses: {},
                    lastAccessDates: {}
                });
            }
            
            const userProg = this.userProgress.get(jid);
            
            // Update course progress
            if (!userProg.courses[course]) {
                userProg.courses[course] = {
                    lastAccessedDay: day,
                    accessedDays: [day],
                    totalAccessed: 1,
                    lastAccessDate: new Date().toISOString()
                };
            } else {
                userProg.courses[course].lastAccessedDay = day;
                if (!userProg.courses[course].accessedDays.includes(day)) {
                    userProg.courses[course].accessedDays.push(day);
                }
                userProg.courses[course].totalAccessed++;
                userProg.courses[course].lastAccessDate = new Date().toISOString();
            }
            
            // Update last access date for this course
            userProg.lastAccessDates[course] = new Date().toISOString();
            
            // Save to database
            await learningDb.saveLearningProgress(jid, userProg);
            
        } catch (error) {
            console.error('Error saving user progress:', error);
        }
    }

    // Check if user can access a specific day
    canAccessDay(jid, course, day) {
        if (!this.userProgress.has(jid)) {
            // First time user, can only access Day 1
            return day === "Day 1";
        }
        
        const userProg = this.userProgress.get(jid);
        
        if (!userProg.courses || !userProg.courses[course]) {
            // First time accessing this course, can only access Day 1
            return day === "Day 1";
        }
        
        const courseProg = userProg.courses[course];
        
        // Check if user has already accessed this day
        if (courseProg.accessedDays && courseProg.accessedDays.includes(day)) {
            return true;
        }
        
        // Check if this is the next sequential day
        const days = Object.keys(learnsData[course].days);
        const currentIndex = days.indexOf(courseProg.lastAccessedDay);
        
        if (currentIndex === -1) {
            // No previous day accessed, can only access Day 1
            return day === "Day 1";
        }
        
        // Can access next day if it's sequential
        const requestedIndex = days.indexOf(day);
        return requestedIndex === currentIndex + 1;
    }

    // Check if user accessed today already
    hasAccessedToday(jid, course) {
        if (!this.userProgress.has(jid) || !this.userProgress.get(jid).courses[course]) {
            return false;
        }
        
        const userProg = this.userProgress.get(jid);
        const courseProg = userProg.courses[course];
        
        if (!courseProg.lastAccessDate) {
            return false;
        }
        
        const lastAccessDate = new Date(courseProg.lastAccessDate);
        const today = new Date();
        
        return lastAccessDate.toDateString() === today.toDateString();
    }

    // Get available courses
    getCourses(language = 'en') {
        const courses = [];
        
        Object.keys(learnsData).forEach(courseKey => {
            const course = learnsData[courseKey];
            courses.push({
                key: courseKey,
                name: course.name[language] || course.name.en,
                description: course.description[language] || course.description.en,
                icon: course.icon
            });
        });
        
        return courses;
    }

    // Handle user input
    handleUserInput(jid, text, language = 'en') {
        const userState = this.initUserState(jid);
        userState.language = language;
        
        const upperText = text.toUpperCase().trim();
        
        // Check if selecting course
        if (userState.step === 'selecting_course') {
            return this.handleCourseSelection(jid, upperText, language);
        }
        
        // Check if selecting day
        if (userState.step === 'selecting_day') {
            return this.handleDaySelection(jid, upperText, language);
        }
        
        // Default response
        return this.getErrorResponse(language);
    }

    // Handle course selection
    handleCourseSelection(jid, text, language) {
        const courseKeys = Object.keys(learnsData);
        
        // Check if text matches any course
        for (const courseKey of courseKeys) {
            const upperCourseKey = courseKey.toUpperCase();
            
            if (text === upperCourseKey || 
                text === `CHOOSE ${upperCourseKey}` ||
                text.includes(upperCourseKey)) {
                
                const userState = this.userStates.get(jid);
                userState.selectedCourse = courseKey;
                userState.step = 'selecting_day';
                
                return {
                    type: 'show_days',
                    data: this.getDaysMenu(courseKey, language, jid)
                };
            }
        }
        
        // If no match, show courses again
        return {
            type: 'show_courses',
            data: this.getCoursesMenu(language)
        };
    }

    // Handle day selection
    handleDaySelection(jid, text, language) {
        const userState = this.userStates.get(jid);
        const courseKey = userState.selectedCourse;
        
        if (!courseKey || !learnsData[courseKey]) {
            return {
                type: 'error',
                data: this.getErrorResponse(language)
            };
        }
        
        const days = Object.keys(learnsData[courseKey].days);
        
        // Check if text matches a day
        for (const day of days) {
            const upperDay = day.toUpperCase();
            
            if (text === upperDay || 
                text === `CHOOSE ${upperDay}` ||
                text === `DAY ${day.split(' ')[1]}`) {
                
                // Check if user can access this day
                if (!this.canAccessDay(jid, courseKey, day)) {
                    return {
                        type: 'access_denied',
                        data: this.getAccessDeniedMessage(courseKey, day, language, jid)
                    };
                }
                
                // Check if user already accessed today
                if (this.hasAccessedToday(jid, courseKey)) {
                    return {
                        type: 'already_accessed',
                        data: this.getAlreadyAccessedMessage(courseKey, language)
                    };
                }
                
                userState.selectedDay = day;
                
                // Save access
                this.saveUserProgress(jid, courseKey, day);
                
                // Get Google Drive link
                const driveLink = learnsData[courseKey].days[day].drive_link;
                const dayTitle = learnsData[courseKey].days[day].title[language] || 
                                learnsData[courseKey].days[day].title.en;
                
                return {
                    type: 'show_drive_link',
                    data: this.getDriveLinkMessage(courseKey, day, dayTitle, driveLink, language)
                };
            }
        }
        
        // If no match, show days again
        return {
            type: 'show_days',
            data: this.getDaysMenu(courseKey, language, jid)
        };
    }

    // Get courses menu
    getCoursesMenu(language = 'en') {
        const courses = this.getCourses(language);
        
        let menu = '';
        
        if (language === 'en') {
            menu = `📚 *Choose a Course:*\n\n`;
            courses.forEach(course => {
                menu += `${course.icon} *${course.name}*\n`;
                menu += `${course.description}\n`;
                menu += `Type: *${course.key.toUpperCase()}*\n\n`;
            });
            menu += `*Example:* Type "ENGLISH LANGUAGE" to choose English`;
            
        } else if (language === 'sw') {
            menu = `📚 *Chagua Kozi:*\n\n`;
            courses.forEach(course => {
                menu += `${course.icon} *${course.name}*\n`;
                menu += `${course.description}\n`;
                menu += `Andika: *${course.key.toUpperCase()}*\n\n`;
            });
            menu += `*Mfano:* Andika "ENGLISH LANGUAGE" kuchagua Kiingereza`;
            
        } else if (language === 'fr') {
            menu = `📚 *Choisissez un Cours:*\n\n`;
            courses.forEach(course => {
                menu += `${course.icon} *${course.name}*\n`;
                menu += `${course.description}\n`;
                menu += `Tapez: *${course.key.toUpperCase()}*\n\n`;
            });
            menu += `*Exemple:* Tapez "ENGLISH LANGUAGE" pour choisir l'anglais`;
        }
        
        return menu;
    }

    // Get days menu
    getDaysMenu(courseKey, language = 'en', jid = null) {
        const course = learnsData[courseKey];
        if (!course) return this.getErrorResponse(language);
        
        const days = Object.keys(course.days);
        
        let menu = '';
        const courseName = course.name[language] || course.name.en;
        
        if (language === 'en') {
            menu = `${course.icon} *${courseName}*\n\n`;
            menu += `*Available Days:*\n\n`;
            
            days.forEach(day => {
                const dayTitle = course.days[day].title[language] || course.days[day].title.en;
                const canAccess = jid ? this.canAccessDay(jid, courseKey, day) : true;
                const accessed = jid && this.userProgress.has(jid) && 
                               this.userProgress.get(jid).courses[courseKey] &&
                               this.userProgress.get(jid).courses[courseKey].accessedDays &&
                               this.userProgress.get(jid).courses[courseKey].accessedDays.includes(day);
                
                const status = accessed ? '✅ Viewed' : (canAccess ? '🔓 Available' : '🔒 Locked');
                menu += `${day}: ${dayTitle} - ${status}\n`;
            });
            
            menu += `\n*Type the day name (e.g., "DAY 1")*\n`;
            menu += `Or type CANCEL to go back`;
            
        } else if (language === 'sw') {
            menu = `${course.icon} *${courseName}*\n\n`;
            menu += `*Siku Zilizopo:*\n\n`;
            
            days.forEach(day => {
                const dayTitle = course.days[day].title[language] || course.days[day].title.en;
                const canAccess = jid ? this.canAccessDay(jid, courseKey, day) : true;
                const accessed = jid && this.userProgress.has(jid) && 
                               this.userProgress.get(jid).courses[courseKey] &&
                               this.userProgress.get(jid).courses[courseKey].accessedDays &&
                               this.userProgress.get(jid).courses[courseKey].accessedDays.includes(day);
                
                const status = accessed ? '✅ Iliangaliwa' : (canAccess ? '🔓 Inapatikana' : '🔒 Imefungwa');
                menu += `${day}: ${dayTitle} - ${status}\n`;
            });
            
            menu += `\n*Andika jina la siku (mfano, "DAY 1")*\n`;
            menu += `Au andika CANCEL kurudi nyuma`;
            
        } else if (language === 'fr') {
            menu = `${course.icon} *${courseName}*\n\n`;
            menu += `*Jours Disponibles:*\n\n`;
            
            days.forEach(day => {
                const dayTitle = course.days[day].title[language] || course.days[day].title.en;
                const canAccess = jid ? this.canAccessDay(jid, courseKey, day) : true;
                const accessed = jid && this.userProgress.has(jid) && 
                               this.userProgress.get(jid).courses[courseKey] &&
                               this.userProgress.get(jid).courses[courseKey].accessedDays &&
                               this.userProgress.get(jid).courses[courseKey].accessedDays.includes(day);
                
                const status = accessed ? '✅ Consulté' : (canAccess ? '🔓 Disponible' : '🔒 Verrouillé');
                menu += `${day}: ${dayTitle} - ${status}\n`;
            });
            
            menu += `\n*Tapez le nom du jour (ex., "DAY 1")*\n`;
            menu += `Ou tapez CANCEL pour revenir`;
        }
        
        return menu;
    }

    // Get drive link message
    getDriveLinkMessage(courseKey, day, dayTitle, driveLink, language) {
        const course = learnsData[courseKey];
        const courseName = course.name[language] || course.name.en;
        
        let message = '';
        
        if (language === 'en') {
            message = `🎉 *Access Granted!*\n\n`;
            message += `${course.icon} *${courseName}*\n`;
            message += `📅 *${day}: ${dayTitle}*\n\n`;
            message += `🔗 *Google Drive Link:*\n`;
            message += `${driveLink}\n\n`;
            message += `📝 *Instructions:*\n`;
            message += `1. Copy the link above and paste in Browser\n`;
            message += `2. Access the notes and materials\n`;
            message += `3. Study at your own pace\n\n`;
            message += `⚠️ *Note:* You can only access ONE lesson per day.\n`;
            message += `Tomorrow you can access the next lesson.\n\n`;
            message += `Type MENU to return to main menu`;
            
        } else if (language === 'sw') {
            message = `🎉 *Ufikiaji Umekubaliwa!*\n\n`;
            message += `${course.icon} *${courseName}*\n`;
            message += `📅 *${day}: ${dayTitle}*\n\n`;
            message += `🔗 *Kiungo cha Google Drive:*\n`;
            message += `${driveLink}\n\n`;
            message += `📝 *Maagizo:*\n`;
            message += `1. Nakili kiungo hapo juu na weka kwenye browser\n`;
            message += `2. Pata maelezo na nyenzo\n`;
            message += `3. Somo kwa kasi yako mwenyewe\n\n`;
            message += `⚠️ *Kumbuka:* Unaweza kufikia somo MOJA tu kwa siku.\n`;
            message += `Kesho utaweza kufikia somo linalofuata.\n\n`;
            message += `Andika MENU kurudi kwenye menyu kuu`;
            
        } else if (language === 'fr') {
            message = `🎉 *Accès Autorisé!*\n\n`;
            message += `${course.icon} *${courseName}*\n`;
            message += `📅 *${day}: ${dayTitle}*\n\n`;
            message += `🔗 *Lien Google Drive:*\n`;
            message += `${driveLink}\n\n`;
            message += `📝 *Instructions:*\n`;
            message += `1. Cliquez sur le lien ci-dessus\n`;
            message += `2. Accédez aux notes et au matériel\n`;
            message += `3. Étudiez à votre propre rythme\n\n`;
            message += `⚠️ *Note:* Vous ne pouvez accéder qu'à UNE leçon par jour.\n`;
            message += `Demain, vous pourrez accéder à la leçon suivante.\n\n`;
            message += `Tapez MENU pour retourner au menu principal`;
        }
        
        return message;
    }

    // Get access denied message
    getAccessDeniedMessage(courseKey, day, language, jid) {
        const course = learnsData[courseKey];
        const courseName = course.name[language] || course.name.en;
        
        let message = '';
        
        if (language === 'en') {
            message = `⛔ *Access Denied*\n\n`;
            message += `${course.icon} *${courseName} - ${day}*\n\n`;
            message += `❌ You cannot access this day yet.\n\n`;
            
            if (jid && this.userProgress.has(jid) && this.userProgress.get(jid).courses[courseKey]) {
                const lastDay = this.userProgress.get(jid).courses[courseKey].lastAccessedDay;
                if (lastDay) {
                    message += `📅 Your last accessed day: ${lastDay}\n`;
                    message += `✅ Complete ${lastDay} first before accessing ${day}\n\n`;
                }
            }
            
            message += `*Rules:*\n`;
            message += `• You can only access ONE lesson per day\n`;
            message += `• You must complete days in order\n`;
            message += `• Day 1 → Day 2 → Day 3 → etc.\n\n`;
            message += `Type CANCEL to choose another day`;
            
        } else if (language === 'sw') {
            message = `⛔ *Ufikiaji Umekataliwa*\n\n`;
            message += `${course.icon} *${courseName} - ${day}*\n\n`;
            message += `❌ Hauwezi kufikia siku hii bado.\n\n`;
            
            if (jid && this.userProgress.has(jid) && this.userProgress.get(jid).courses[courseKey]) {
                const lastDay = this.userProgress.get(jid).courses[courseKey].lastAccessedDay;
                if (lastDay) {
                    message += `📅 Siku yako ya mwisho iliyofikiwa: ${lastDay}\n`;
                    message += `✅ Kamilisha ${lastDay} kwanza kabla ya kufikia ${day}\n\n`;
                }
            }
            
            message += `*Kanuni:*\n`;
            message += `• Unaweza kufikia somo MOJA tu kwa siku\n`;
            message += `• Lazima ukamilishe siku kwa mpangilio\n`;
            message += `• Day 1 → Day 2 → Day 3 → n.k.\n\n`;
            message += `Andika CANCEL kuchagua siku nyingine`;
            
        } else if (language === 'fr') {
            message = `⛔ *Accès Refusé*\n\n`;
            message += `${course.icon} *${courseName} - ${day}*\n\n`;
            message += `❌ Vous ne pouvez pas encore accéder à ce jour.\n\n`;
            
            if (jid && this.userProgress.has(jid) && this.userProgress.get(jid).courses[courseKey]) {
                const lastDay = this.userProgress.get(jid).courses[courseKey].lastAccessedDay;
                if (lastDay) {
                    message += `📅 Votre dernier jour consulté: ${lastDay}\n`;
                    message += `✅ Complétez ${lastDay} d'abord avant d'accéder à ${day}\n\n`;
                }
            }
            
            message += `*Règles:*\n`;
            message += `• Vous ne pouvez accéder qu'à UNE leçon par jour\n`;
            message += `• Vous devez compléter les jours dans l'ordre\n`;
            message += `• Day 1 → Day 2 → Day 3 → etc.\n\n`;
            message += `Tapez CANCEL pour choisir un autre jour`;
        }
        
        return message;
    }

    // Get already accessed message
    getAlreadyAccessedMessage(courseKey, language) {
        const course = learnsData[courseKey];
        const courseName = course.name[language] || course.name.en;
        
        let message = '';
        
        if (language === 'en') {
            message = `⏰ *Already Accessed Today*\n\n`;
            message += `${course.icon} *${courseName}*\n\n`;
            message += `⚠️ You have already accessed a lesson for this course today.\n\n`;
            message += `*Daily Limit:*\n`;
            message += `• ONE lesson per day per course\n`;
            message += `• Try again tomorrow\n`;
            message += `• Or choose another course\n\n`;
            message += `Type CANCEL to go back`;
            
        } else if (language === 'sw') {
            message = `⏰ *Tayari Imefikiwa Leo*\n\n`;
            message += `${course.icon} *${courseName}*\n\n`;
            message += `⚠️ Tayari umefikia somo kwa kozi hii leo.\n\n`;
            message += `*Kikomo cha Kila Siku:*\n`;
            message += `• SOMO MOJA kwa siku kwa kila kozi\n`;
            message += `• Jaribu tena kesho\n`;
            message += `• Au chagua kozi nyingine\n\n`;
            message += `Andika CANCEL kurudi nyuma`;
            
        } else if (language === 'fr') {
            message = `⏰ *Déjà Consulté Aujourd'hui*\n\n`;
            message += `${course.icon} *${courseName}*\n\n`;
            message += `⚠️ Vous avez déjà consulté une leçon pour ce cours aujourd'hui.\n\n`;
            message += `*Limite Quotidienne:*\n`;
            message += `• UNE leçon par jour par cours\n`;
            message += `• Réessayez demain\n`;
            message += `• Ou choisissez un autre cours\n\n`;
            message += `Tapez CANCEL pour revenir`;
        }
        
        return message;
    }

    // Get error response
    getErrorResponse(language) {
        const texts = {
            'en': `❌ An error occurred. Please try again or type MENU.`,
            'sw': `❌ Hitilafu imetokea. Tafadhali jaribu tena au andika MENU.`,
            'fr': `❌ Une erreur s'est produite. Veuillez réessayer ou tapez MENU.`
        };
        return texts[language] || texts['en'];
    }

    // Cancel learning session
    cancelLearning(jid) {
        this.clearUserState(jid);
        
        const texts = {
            'en': `📚 Learning session cancelled. Type MENU to continue.`,
            'sw': `📚 Kikao cha kujifunza kimesitishwa. Andika MENU kuendelea.`,
            'fr': `📚 Session d'apprentissage annulée. Tapez MENU pour continuer.`
        };
        
        return texts[this.userStates.get(jid)?.language || 'en'] || texts['en'];
    }

    // Get user progress
    async getUserProgress(jid, language = 'en') {
        await this.loadUserProgress(jid);
        
        if (!this.userProgress.has(jid) || !this.userProgress.get(jid).courses) {
            return {
                type: 'no_progress',
                data: this.getNoProgressMessage(language)
            };
        }
        
        const userProg = this.userProgress.get(jid);
        const courses = userProg.courses;
        
        let message = '';
        
        if (language === 'en') {
            message = `📊 *Your Learning Progress*\n\n`;
            
            Object.keys(courses).forEach(courseKey => {
                const course = learnsData[courseKey];
                if (course) {
                    const courseName = course.name[language] || course.name.en;
                    const prog = courses[courseKey];
                    
                    message += `${course.icon} *${courseName}*\n`;
                    message += `Last Accessed: ${prog.lastAccessedDay || 'None'}\n`;
                    message += `Total Days Accessed: ${prog.totalAccessed || 0}\n`;
                    message += `Accessed Days: ${prog.accessedDays ? prog.accessedDays.join(', ') : 'None'}\n`;
                    message += `Last Access: ${prog.lastAccessDate ? new Date(prog.lastAccessDate).toLocaleDateString() : 'Never'}\n\n`;
                }
            });
            
            if (Object.keys(courses).length === 0) {
                message += `No progress yet. Start learning with LEARN command.\n`;
            }
            
        } else if (language === 'sw') {
            message = `📊 *Maendeleo Yako ya Kujifunza*\n\n`;
            
            Object.keys(courses).forEach(courseKey => {
                const course = learnsData[courseKey];
                if (course) {
                    const courseName = course.name[language] || course.name.en;
                    const prog = courses[courseKey];
                    
                    message += `${course.icon} *${courseName}*\n`;
                    message += `Mara Ya Mwisho Iliofikia: ${prog.lastAccessedDay || 'Hakuna'}\n`;
                    message += `Jumla ya Siku Zilizofikiwa: ${prog.totalAccessed || 0}\n`;
                    message += `Siku Zilizofikiwa: ${prog.accessedDays ? prog.accessedDays.join(', ') : 'Hakuna'}\n`;
                    message += `Ufikiaji wa Mwisho: ${prog.lastAccessDate ? new Date(prog.lastAccessDate).toLocaleDateString() : 'Kamwe'}\n\n`;
                }
            });
            
            if (Object.keys(courses).length === 0) {
                message += `Bila maendeleo bado. Anza kujifunza kwa amri ya LEARN.\n`;
            }
            
        } else if (language === 'fr') {
            message = `📊 *Vos Progrès d'Apprentissage*\n\n`;
            
            Object.keys(courses).forEach(courseKey => {
                const course = learnsData[courseKey];
                if (course) {
                    const courseName = course.name[language] || course.name.en;
                    const prog = courses[courseKey];
                    
                    message += `${course.icon} *${courseName}*\n`;
                    message += `Dernier Jour Consulté: ${prog.lastAccessedDay || 'Aucun'}\n`;
                    message += `Total des Jours Consultés: ${prog.totalAccessed || 0}\n`;
                    message += `Jours Consultés: ${prog.accessedDays ? prog.accessedDays.join(', ') : 'Aucun'}\n`;
                    message += `Dernier Accès: ${prog.lastAccessDate ? new Date(prog.lastAccessDate).toLocaleDateString() : 'Jamais'}\n\n`;
                }
            });
            
            if (Object.keys(courses).length === 0) {
                message += `Aucun progrès pour le moment. Commencez à apprendre avec la commande LEARN.\n`;
            }
        }
        
        return {
            type: 'show_progress',
            data: message
        };
    }

    getNoProgressMessage(language) {
        const texts = {
            'en': `📊 No learning progress yet.\n\nStart your learning journey with: LEARN`,
            'sw': `📊 Bila maendeleo ya kujifunza bado.\n\nAnza safari yako ya kujifunza kwa: LEARN`,
            'fr': `📊 Aucun progrès d'apprentissage pour le moment.\n\nCommencez votre parcours d'apprentissage avec: LEARN`
        };
        return texts[language] || texts['en'];
    }
}

module.exports = new LearnHandler();