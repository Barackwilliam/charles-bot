// config/learningSession.js
class LearningSession {
    constructor() {
        this.sessions = new Map(); // jid -> session data
    }

    createSession(jid) {
        const session = {
            jid,
            language: 'en',
            currentCourse: null,
            currentLesson: null,
            currentActivity: null, // 'learning', 'exercise', 'test', 'exam'
            questionIndex: 0,
            correctAnswers: 0,
            startTime: Date.now(),
            questions: [],
            answers: []
        };
        
        this.sessions.set(jid, session);
        return session;
    }

    getSession(jid) {
        if (!this.sessions.has(jid)) {
            return this.createSession(jid);
        }
        return this.sessions.get(jid);
    }

    setCourse(jid, courseId) {
        const session = this.getSession(jid);
        session.currentCourse = courseId;
        session.currentLesson = null;
        session.questionIndex = 0;
        return session;
    }

    setLesson(jid, lessonId) {
        const session = this.getSession(jid);
        session.currentLesson = lessonId;
        session.questionIndex = 0;
        session.correctAnswers = 0;
        return session;
    }

    setQuestions(jid, questions) {
        const session = this.getSession(jid);
        session.questions = questions;
        session.answers = [];
        return session;
    }

    recordAnswer(jid, answer, isCorrect) {
        const session = this.getSession(jid);
        session.answers.push({
            question: session.questions[session.questionIndex],
            answer,
            isCorrect,
            timestamp: Date.now()
        });
        
        if (isCorrect) {
            session.correctAnswers++;
        }
        
        session.questionIndex++;
        return session;
    }

    getCurrentQuestion(jid) {
        const session = this.getSession(jid);
        if (session.questionIndex < session.questions.length) {
            return session.questions[session.questionIndex];
        }
        return null;
    }

    isComplete(jid) {
        const session = this.getSession(jid);
        return session.questionIndex >= session.questions.length;
    }

    getScore(jid) {
        const session = this.getSession(jid);
        if (session.answers.length === 0) return 0;
        return Math.round((session.correctAnswers / session.answers.length) * 100);
    }

    clearSession(jid) {
        this.sessions.delete(jid);
    }

    getStats(jid) {
        const session = this.getSession(jid);
        return {
            totalQuestions: session.questions.length,
            answered: session.answers.length,
            correct: session.correctAnswers,
            score: this.getScore(jid),
            timeElapsed: Date.now() - session.startTime
        };
    }
}

module.exports = new LearningSession();