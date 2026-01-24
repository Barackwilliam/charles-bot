// studentRegistration.js - Handles student registration and exam results storage
const learningDb = require('./learningDb');

class StudentRegistration {
    constructor() {
        this.registrationState = new Map(); // jid -> { step: 'awaiting_name', data: {} }
        this.examResultsCache = new Map(); // jid -> exam results
    }

    // Start registration process
    startRegistration(jid, language = 'en') {
        const startedAt = Date.now(); // Get current timestamp
        this.registrationState.set(jid, {
            step: 'awaiting_name',
            data: { 
                language: language,
                startedAt: startedAt,
                nameProvided: false,
                regNumberProvided: false
            }
        });

        console.log(`📝 Registration started for ${jid} at ${new Date(startedAt).toISOString()}`);

        const messages = {
            en: `🎓 *Welcome to Charles Academy!*\n\n` +
                `First, let's register you.\n\n` +
                `📝 Please send your *FULL NAME*:\n` +
                `Example: John Michael Doe`,
                
            sw: `🎓 *Karibu kwenye Charles Academy!*\n\n` +
                `Kwanza, tujiandikishe.\n\n` +
                `📝 Tafadhali tuma *JINA LAKO KAMILI*:\n` +
                `Mfano: John Michael Doe`,
                
            fr: `🎓 *Bienvenue à Charles Academy!*\n\n` +
                `D'abord, inscrivons-nous.\n\n` +
                `📝 Veuillez envoyer votre *NOM COMPLET*:\n` +
                `Exemple: John Michael Doe`
        };

        return messages[language] || messages.en;
    }

    // Handle registration step
    async handleRegistrationStep(jid, text, language = 'en') {
        const state = this.registrationState.get(jid);
        if (!state) {
            console.log(`❌ No registration state found for ${jid}`);
            return null;
        }

        console.log(`📝 Registration step for ${jid}: ${state.step}, input: "${text}"`);

        switch (state.step) {
            case 'awaiting_name':
                // Store name and ask for registration number
                state.data.fullName = text.trim();
                state.data.nameProvided = true;
                state.step = 'awaiting_reg_number';
                
                const regMessages = {
                    en: `✅ Name recorded: ${state.data.fullName}\n\n` +
                        `📋 Now send your *REGISTRATION NUMBER*:\n` +
                        `Example: CA2024001\n\n` +
                        `*Optional:* Type "SKIP" if you don't have a registration number`,
                        
                    sw: `✅ Jina limehifadhiwa: ${state.data.fullName}\n\n` +
                        `📋 Sasa tuma *NUKUU YA USAJILI*:\n` +
                        `Mfano: CA2024001\n\n` +
                        `*Hiari:* Andika "SKIP" kama huna nukuu ya usajili`,
                        
                    fr: `✅ Nom enregistré: ${state.data.fullName}\n\n` +
                        `📋 Maintenant envoyez votre *NUMÉRO D'INSCRIPTION*:\n` +
                        `Exemple: CA2024001\n\n` +
                        `*Optionnel:* Tapez "SKIP" si vous n'avez pas de numéro d'inscription`
                };
                
                return regMessages[language] || regMessages.en;

            case 'awaiting_reg_number':
                // Check if user wants to skip
                let regNumber = text.trim().toUpperCase();
                let registrationSkipped = false;
                
                if (regNumber === 'SKIP') {
                    regNumber = 'N/A';
                    registrationSkipped = true;
                    console.log(`📝 User skipped registration number`);
                }
                
                state.data.registrationNumber = regNumber;
                state.data.registrationSkipped = registrationSkipped;
                state.data.regNumberProvided = true;
                state.data.completedAt = Date.now();
                state.step = 'completed';

                console.log(`📝 Registration completed for ${jid}:`, {
                    name: state.data.fullName,
                    regNumber: state.data.registrationNumber,
                    skipped: state.data.registrationSkipped
                });

                // Save to database
                const saveResult = await this.saveStudentInfo(jid, state.data);
                
                // Clear registration state
                this.registrationState.delete(jid);

                // Generate completion message based on whether registration number was skipped
                let completeMessages;
                
                if (saveResult.success) {
                    if (registrationSkipped) {
                        completeMessages = {
                            en: `✅ Registration Successful!\n\n` +
                                `📋 *Student Details:*\n` +
                                `👤 Name: ${state.data.fullName}\n` +
                                `🔢 Reg No: Not Provided (Skipped)\n\n` +
                                `Choose your language:\n` +
                                `Type: ENGLISH 🇬🇧\n` +
                                `Type: KISWAHILI 🇹🇿\n` +
                                `Type: FRANÇAIS 🇫🇷`,
                                
                            sw: `✅ Usajili Umekamilika!\n\n` +
                                `📋 *Taarifa za Mwanafunzi:*\n` +
                                `👤 Jina: ${state.data.fullName}\n` +
                                `🔢 Nukuu: Haijapewa (Imekataliwa)\n\n` +
                                `Chagua lugha yako:\n` +
                                `Andika: ENGLISH 🇬🇧\n` +
                                `Andika: KISWAHILI 🇹🇿\n` +
                                `Andika: FRANÇAIS 🇫🇷`,
                                
                            fr: `✅ Inscription Réussie!\n\n` +
                                `📋 *Détails de l'étudiant:*\n` +
                                `👤 Nom: ${state.data.fullName}\n` +
                                `🔢 N° d'inscription: Non fourni (Sauté)\n\n` +
                                `Choisissez votre langue:\n` +
                                `Tapez: ENGLISH 🇬🇧\n` +
                                `Tapez: KISWAHILI 🇹🇿\n` +
                                `Tapez: FRANÇAIS 🇫🇷`
                        };
                    } else {
                        completeMessages = {
                            en: `✅ Registration Successful!\n\n` +
                                `📋 *Student Details:*\n` +
                                `👤 Name: ${state.data.fullName}\n` +
                                `🔢 Reg No: ${state.data.registrationNumber}\n\n` +
                                `Choose your language:\n` +
                                `Type: ENGLISH 🇬🇧\n` +
                                `Type: KISWAHILI 🇹🇿\n` +
                                `Type: FRANÇAIS 🇫🇷`,
                                
                            sw: `✅ Usajili Umekamilika!\n\n` +
                                `📋 *Taarifa za Mwanafunzi:*\n` +
                                `👤 Jina: ${state.data.fullName}\n` +
                                `🔢 Nukuu: ${state.data.registrationNumber}\n\n` +
                                `Chagua lugha yako:\n` +
                                `Andika: ENGLISH 🇬🇧\n` +
                                `Andika: KISWAHILI 🇹🇿\n` +
                                `Andika: FRANÇAIS 🇫🇷`,
                                
                            fr: `✅ Inscription Réussie!\n\n` +
                                `📋 *Détails de l'étudiant:*\n` +
                                `👤 Nom: ${state.data.fullName}\n` +
                                `🔢 N° d'inscription: ${state.data.registrationNumber}\n\n` +
                                `Choisissez votre langue:\n` +
                                `Tapez: ENGLISH 🇬🇧\n` +
                                `Tapez: KISWAHILI 🇹🇿\n` +
                                `Tapez: FRANÇAIS 🇫🇷`
                        };
                    }
                } else {
                    completeMessages = {
                        en: `⚠️ Registration completed but there was an error saving to database.\n\n` +
                            `You can still continue. Choose your language:\n\n` +
                            `Type: ENGLISH 🇬🇧\n` +
                            `Type: KISWAHILI 🇹🇿\n` +
                            `Type: FRANÇAIS 🇫🇷`,
                        sw: `⚠️ Usajili umekamilika lakini kulikuwa na hitilafu kuhifadhi kwenye database.\n\n` +
                            `Bado unaweza kuendelea. Chagua lugha yako:\n\n` +
                            `Andika: ENGLISH 🇬🇧\n` +
                            `Andika: KISWAHILI 🇹🇿\n` +
                            `Andika: FRANÇAIS 🇫🇷`,
                        fr: `⚠️ Inscription terminée mais une erreur s'est produite lors de l'enregistrement dans la base de données.\n\n` +
                            `Vous pouvez toujours continuer. Choisissez votre langue:\n\n` +
                            `Tapez: ENGLISH 🇬🇧\n` +
                            `Tapez: KISWAHILI 🇹🇿\n` +
                            `Tapez: FRANÇAIS 🇫🇷`
                    };
                }

                return completeMessages[language] || completeMessages.en;

            default:
                console.log(`❌ Unknown registration step: ${state.step}`);
                return null;
        }
    }

    // Check if user is in registration process
    isRegistering(jid) {
        const isReg = this.registrationState.has(jid);
        console.log(`🔍 isRegistering(${jid}): ${isReg}`);
        return isReg;
    }

    // Save student information to database
    async saveStudentInfo(jid, studentData) {
        try {
            console.log(`💾 Saving student info for ${jid}:`, {
                name: studentData.fullName,
                regNumber: studentData.registrationNumber,
                startedAt: studentData.startedAt
            });

            // Validate timestamp
            const startedAt = studentData.startedAt || Date.now();
            const registeredDate = new Date(startedAt);
            
            if (isNaN(registeredDate.getTime())) {
                console.log(`⚠️ Invalid timestamp: ${startedAt}, using current time`);
                registeredDate = new Date();
            }

            const studentInfo = {
                jid: jid,
                number: jid.split('@')[0],
                full_name: studentData.fullName,
                registration_number: studentData.registrationNumber || 'N/A',
                has_registration_number: !studentData.registrationSkipped,
                language: studentData.language || 'en',
                registered_at: registeredDate.toISOString(),
                updated_at: new Date().toISOString()
            };

            console.log(`📝 Student info prepared:`, studentInfo);

            // First check if student already exists
            const { data: existingStudent, error: fetchError } = await learningDb.supabase
                .from('students')
                .select('*')
                .eq('jid', jid)
                .maybeSingle();

            if (fetchError) {
                console.error('❌ Error fetching existing student:', fetchError.message);
            }

            let result;
            if (existingStudent) {
                // Update existing student
                console.log(`📝 Updating existing student record`);
                const { data, error } = await learningDb.supabase
                    .from('students')
                    .update(studentInfo)
                    .eq('jid', jid)
                    .select();

                if (error) throw error;
                result = { success: true, data };
            } else {
                // Create new student
                console.log(`📝 Creating new student record`);
                const { data, error } = await learningDb.supabase
                    .from('students')
                    .insert([studentInfo])
                    .select();

                if (error) throw error;
                result = { success: true, data };
            }

            console.log(`✅ Student info saved successfully for ${studentData.fullName}`);
            if (studentData.registrationSkipped) {
                console.log(`   📝 Registration number: Not provided (skipped)`);
            } else {
                console.log(`   📝 Registration number: ${studentData.registrationNumber}`);
            }
            
            return result;
        } catch (error) {
            console.error('❌ Error saving student info:', error.message);
            console.error('❌ Error details:', error);
            return { success: false, error: error.message };
        }
    }

    // Save exam results to database
    async saveExamResult(jid, examData) {
        try {
            console.log(`💾 Saving exam result for ${jid}:`, {
                title: examData.title,
                score: examData.score,
                course: examData.course
            });

            // Get student info first
            const { data: student, error: studentError } = await learningDb.supabase
                .from('students')
                .select('full_name, registration_number')
                .eq('jid', jid)
                .maybeSingle();

            if (studentError) {
                console.error('❌ Error fetching student:', studentError.message);
                return { success: false, error: studentError.message };
            }

            if (!student) {
                console.error(`❌ Student not found for ${jid}`);
                return { success: false, error: 'Student not found' };
            }

            const result = {
                student_jid: jid,
                student_name: student.full_name,
                registration_number: student.registration_number,
                exam_title: examData.title,
                exam_type: examData.type || 'final',
                course: examData.course,
                exam_id: examData.examId,
                score: examData.score,
                total_questions: examData.totalQuestions,
                correct_answers: examData.correctAnswers,
                time_taken_minutes: examData.timeTaken || 0,
                passed: examData.score >= 70,
                started_at: new Date(examData.startTime || Date.now()).toISOString(),
                completed_at: new Date().toISOString(),
                answers_data: JSON.stringify(examData.answers || []),
                language: examData.language || 'en'
            };

            console.log(`📝 Exam result prepared:`, result);

            // Save to exam_results table
            const { data, error } = await learningDb.supabase
                .from('exam_results')
                .insert([result])
                .select();

            if (error) throw error;

            console.log(`📊 Exam result saved successfully: ${student.full_name} - ${examData.title} - ${examData.score}%`);
            return { success: true, data };
        } catch (error) {
            console.error('❌ Error saving exam result:', error.message);
            console.error('❌ Error details:', error);
            return { success: false, error: error.message };
        }
    }

    // Get all exam results for dashboard
    async getAllExamResults() {
        try {
            const { data, error } = await learningDb.supabase
                .from('exam_results')
                .select('*')
                .order('completed_at', { ascending: false });

            if (error) throw error;
            return { success: true, data: data || [] };
        } catch (error) {
            console.error('❌ Error getting exam results:', error.message);
            return { success: false, error: error.message, data: [] };
        }
    }

    // Get student's exam results
    async getStudentExamResults(jid) {
        try {
            const { data, error } = await learningDb.supabase
                .from('exam_results')
                .select('*')
                .eq('student_jid', jid)
                .order('completed_at', { ascending: false });

            if (error) throw error;
            return { success: true, data: data || [] };
        } catch (error) {
            console.error('❌ Error getting student exam results:', error.message);
            return { success: false, error: error.message, data: [] };
        }
    }

    // Get dashboard statistics
    async getDashboardStats() {
        try {
            const { count: totalStudents } = await learningDb.supabase
                .from('students')
                .select('*', { count: 'exact', head: true });

            const { count: totalExams } = await learningDb.supabase
                .from('exam_results')
                .select('*', { count: 'exact', head: true });

            const { count: passedExams } = await learningDb.supabase
                .from('exam_results')
                .select('*', { count: 'exact', head: true })
                .eq('passed', true);

            const { data: recentExams } = await learningDb.supabase
                .from('exam_results')
                .select('*')
                .order('completed_at', { ascending: false })
                .limit(10);

            return {
                totalStudents: totalStudents || 0,
                totalExams: totalExams || 0,
                passedExams: passedExams || 0,
                passRate: totalExams > 0 ? Math.round((passedExams / totalExams) * 100) : 0,
                recentExams: recentExams || []
            };
        } catch (error) {
            console.error('❌ Error getting dashboard stats:', error.message);
            return {
                totalStudents: 0,
                totalExams: 0,
                passedExams: 0,
                passRate: 0,
                recentExams: []
            };
        }
    }

    // Check if student is registered
    async isStudentRegistered(jid) {
        try {
            console.log(`🔍 Checking registration for ${jid}...`);
            
            // Check if database is connected
            if (!learningDb.supabase) {
                console.log(`⚠️ Database not connected for ${jid}`);
                return { isRegistered: false, student: null };
            }
            
            const { data, error } = await learningDb.supabase
                .from('students')
                .select('full_name, registration_number, registered_at')
                .eq('jid', jid)
                .maybeSingle();

            if (error) {
                console.log(`⚠️ Database error for ${jid}: ${error.message}`);
                return { isRegistered: false, student: null };
            }

            const isReg = !!data;
            console.log(`📊 Registration check for ${jid}: ${isReg ? '✅ Registered' : '❌ Not registered'}`);
            if (isReg) {
                console.log(`   👤 Name: ${data.full_name}`);
                console.log(`   🔢 Reg No: ${data.registration_number}`);
            }
            
            return { isRegistered: isReg, student: data };
        } catch (error) {
            console.error(`❌ Error checking registration for ${jid}:`, error.message);
            return { isRegistered: false, student: null };
        }
    }
}

module.exports = new StudentRegistration();