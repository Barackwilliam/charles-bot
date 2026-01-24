// startDashboard.js - Start the dashboard server
const ExamDashboard = require('./dashboard');

console.log('🚀 Starting Charles Academy Dashboard...');
const dashboard = new ExamDashboard();
dashboard.start();