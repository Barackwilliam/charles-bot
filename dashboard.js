// dashboard.js - Simple web dashboard to display exam results
const express = require('express');
const learningDb = require('./learningDb');
const studentRegistration = require('./studentRegistration');

class ExamDashboard {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.setupMiddleware();
        this.setupRoutes();
    }

    setupMiddleware() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static('public'));
        this.app.set('view engine', 'ejs');
    }

    setupRoutes() {
        // Main dashboard page
        this.app.get('/', async (req, res) => {
            try {
                const stats = await studentRegistration.getDashboardStats();
                const { data: allResults } = await studentRegistration.getAllExamResults();
                
                res.render('dashboard', {
                    title: 'Charles Academy - Exam Dashboard',
                    stats: stats,
                    examResults: allResults || [],
                    currentTime: new Date().toLocaleString()
                });
            } catch (error) {
                res.status(500).send('Error loading dashboard: ' + error.message);
            }
        });

        // Student details page
        this.app.get('/student/:jid', async (req, res) => {
            try {
                const jid = decodeURIComponent(req.params.jid);
                const { data: student } = await learningDb.supabase
                    .from('students')
                    .select('*')
                    .eq('jid', jid)
                    .single();

                const { data: examResults } = await studentRegistration.getStudentExamResults(jid);

                if (!student) {
                    return res.status(404).send('Student not found');
                }

                res.render('student', {
                    title: `Student: ${student.full_name}`,
                    student: student,
                    examResults: examResults || [],
                    totalScore: examResults?.reduce((sum, r) => sum + r.score, 0) || 0,
                    averageScore: examResults?.length > 0 
                        ? Math.round(examResults.reduce((sum, r) => sum + r.score, 0) / examResults.length)
                        : 0
                });
            } catch (error) {
                res.status(500).send('Error loading student details: ' + error.message);
            }
        });

        // API: Get all exam results (JSON)
        this.app.get('/api/exam-results', async (req, res) => {
            try {
                const { data } = await studentRegistration.getAllExamResults();
                res.json({ success: true, data: data || [] });
            } catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });

        // API: Get dashboard stats (JSON)
        this.app.get('/api/stats', async (req, res) => {
            try {
                const stats = await studentRegistration.getDashboardStats();
                res.json({ success: true, stats: stats });
            } catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });

        // API: Search students
        this.app.get('/api/search', async (req, res) => {
            try {
                const { q } = req.query;
                if (!q) {
                    return res.json({ success: true, data: [] });
                }

                const { data } = await learningDb.supabase
                    .from('students')
                    .select('*')
                    .or(`full_name.ilike.%${q}%,registration_number.ilike.%${q}%`)
                    .limit(20);

                res.json({ success: true, data: data || [] });
            } catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`📊 Dashboard running at http://localhost:${this.port}`);
            console.log(`📈 View exam results in real-time`);
        });
    }
}

module.exports = ExamDashboard;