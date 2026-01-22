// learningDb.js - WITH HARDCODED CREDENTIALS
const { createClient } = require('@supabase/supabase-js');

class LearningDb {
    constructor() {
        console.log('🔧 Initializing Learning Database...');
        
        // HARDCODED CREDENTIALS DIRECT
        const SUPABASE_URL = 'https://naycamtrebtnntoelucs.supabase.co';
        const SUPABASE_KEY = 'sb_secret_vV554f6o45fEL-cuuBuoVw_SlguyoyH';
        
        // Validate URL format
        if (!SUPABASE_URL.startsWith('https://')) {
            console.error('❌ ERROR: SUPABASE_URL must start with https://');
            console.error('📝 Got:', SUPABASE_URL);
            throw new Error('Invalid SUPABASE_URL format');
        }
        
        console.log('📊 Database URL:', SUPABASE_URL);
        console.log('🔑 Key exists:', !!SUPABASE_KEY);
        
        try {
            this.supabase = createClient(
                SUPABASE_URL,
                SUPABASE_KEY,
                {
                    auth: {
                        persistSession: false,
                        autoRefreshToken: false
                    }
                }
            );
            console.log('✅ Database client created successfully');
        } catch (error) {
            console.error('❌ Failed to create Supabase client:', error.message);
            this.supabase = null;
        }
    }

    // === STUDENT MANAGEMENT ===
    async getStudentLanguage(jid) {
        try {
            if (!this.supabase) return 'en';
            
            const { data, error } = await this.supabase
                .from('users')
                .select('language')
                .eq('jid', jid)
                .single();
            
            if (error) return 'en';
            return data?.language || 'en';
        } catch (error) {
            console.error('getStudentLanguage error:', error.message);
            return 'en';
        }
    }

    async setStudentLanguage(jid, language) {
        try {
            if (!this.supabase) return { error: null };
            
            const number = jid.split('@')[0];
            const { error } = await this.supabase
                .from('users')
                .upsert({
                    jid,
                    number,
                    language,
                    is_student: true,
                    registered_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }, { onConflict: 'jid' });
            
            if (error) throw error;
            return { error: null };
        } catch (error) {
            console.error('setStudentLanguage error:', error.message);
            return { error };
        }
    }

    // === COURSES ===
    async getCourses(language = 'en') {
        try {
            if (!this.supabase) return { data: [], error: null };
            
            const { data, error } = await this.supabase
                .from('courses')
                .select('*')
                .eq('is_active', true)
                .eq('language', language)
                .order('created_at');
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('getCourses error:', error.message);
            return { data: [], error };
        }
    }

    // === PROGRESS ===
    async getStudentProgress(jid, courseId = null) {
        try {
            if (!this.supabase) return { data: [], error: null };
            
            let query = this.supabase
                .from('student_progress')
                .select('*')
                .eq('student_jid', jid);
            
            if (courseId) {
                query = query.eq('course_id', courseId);
            }
            
            const { data, error } = await query.order('completed_at', { ascending: false });
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('getStudentProgress error:', error.message);
            return { data: [], error };
        }
    }

    async completeLesson(jid, lessonId, score, total, correct) {
        try {
            if (!this.supabase) return { data: null, error: null };
            
            const { data, error } = await this.supabase
                .from('student_progress')
                .update({
                    status: 'completed',
                    score,
                    total_questions: total,
                    correct_answers: correct,
                    completed_at: new Date().toISOString()
                })
                .eq('student_jid', jid)
                .eq('lesson_id', lessonId);
            
            if (error) throw error;
            return { data, error: null };
        } catch (error) {
            console.error('completeLesson error:', error.message);
            return { data: null, error };
        }
    }

    // === STATISTICS ===
    async getStudentStats(jid) {
        try {
            if (!this.supabase) {
                return {
                    completedLessons: 0,
                    totalScore: 0,
                    passedExams: 0,
                    totalExams: 0,
                    averageScore: 0
                };
            }
            
            const { data: progress, error: progressError } = await this.supabase
                .from('student_progress')
                .select('*')
                .eq('student_jid', jid);
            
            const { data: exams, error: examsError } = await this.supabase
                .from('exam_results')
                .select('*')
                .eq('student_jid', jid);
            
            if (progressError) console.error('getStudentStats progress error:', progressError.message);
            if (examsError) console.error('getStudentStats exams error:', examsError.message);
            
            const completedLessons = progress?.filter(p => p.status === 'completed').length || 0;
            const totalScore = progress?.reduce((sum, p) => sum + (p.score || 0), 0) || 0;
            const passedExams = exams?.filter(e => e.passed).length || 0;
            
            return {
                completedLessons,
                totalScore,
                passedExams,
                totalExams: exams?.length || 0,
                averageScore: completedLessons > 0 ? Math.round(totalScore / completedLessons) : 0
            };
        } catch (error) {
            console.error('getStudentStats error:', error.message);
            return {
                completedLessons: 0,
                totalScore: 0,
                passedExams: 0,
                totalExams: 0,
                averageScore: 0
            };
        }
    }

    // === PLATFORM STATS ===
    async getPlatformStats() {
        try {
            if (!this.supabase) {
                return {
                    totalStudents: 0,
                    totalLessons: 0,
                    totalQuestions: 0,
                    completedLessons: 0
                };
            }
            
            const { count: totalStudents } = await this.supabase
                .from('users')
                .select('*', { count: 'exact', head: true })
                .eq('is_student', true);
            
            const { count: totalLessons } = await this.supabase
                .from('lessons')
                .select('*', { count: 'exact', head: true })
                .eq('is_active', true);
            
            const { count: totalQuestions } = await this.supabase
                .from('questions')
                .select('*', { count: 'exact', head: true });
            
            const { count: completedLessons } = await this.supabase
                .from('student_progress')
                .select('*', { count: 'exact', head: true })
                .eq('status', 'completed');
            
            return {
                totalStudents: totalStudents || 0,
                totalLessons: totalLessons || 0,
                totalQuestions: totalQuestions || 0,
                completedLessons: completedLessons || 0
            };
        } catch (error) {
            console.error('getPlatformStats error:', error.message);
            return {
                totalStudents: 0,
                totalLessons: 0,
                totalQuestions: 0,
                completedLessons: 0
            };
        }
    }
}

module.exports = new LearningDb();