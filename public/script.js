// script.js
let sessionId = null;
let userName = 'Guest Student';
let userRegistered = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Try to load session from localStorage
    sessionId = localStorage.getItem('charlesAcademySessionId');
    
    if (sessionId) {
        // Check if user is registered
        checkUserStatus();
    } else {
        // Create new session
        sessionId = generateSessionId();
        localStorage.setItem('charlesAcademySessionId', sessionId);
    }
    
    // Focus on input
    document.getElementById('messageInput').focus();
    
    // Load user info
    updateUserInfo();
});

// Generate unique session ID
function generateSessionId() {
    return 'web_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// Send message
async function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Clear input
    input.value = '';
    
    // Disable send button temporarily
    const sendBtn = document.getElementById('sendBtn');
    sendBtn.disabled = true;
    sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Display user message
    addMessage(message, 'user');
    
    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: message,
                sessionId: sessionId
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Display bot response
            addMessage(data.response, 'bot');
            
            // Update user info if registration might have happened
            if (message.toLowerCase().includes('hi') || message.includes('MENU')) {
                setTimeout(checkUserStatus, 1000);
            }
            
            // Save session ID if new
            if (data.sessionId && data.sessionId !== sessionId) {
                sessionId = data.sessionId;
                localStorage.setItem('charlesAcademySessionId', sessionId);
            }
            
        } else {
            addMessage('❌ Error: Could not send message. Please try again.', 'bot');
        }
        
    } catch (error) {
        console.error('Error:', error);
        addMessage('❌ Network error. Please check your connection.', 'bot');
    } finally {
        // Re-enable send button
        sendBtn.disabled = false;
        sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send';
        
        // Scroll to bottom
        scrollToBottom();
    }
}

// Send command from button
function sendCommand(command) {
    document.getElementById('messageInput').value = command;
    sendMessage();
}

// Add message to chat
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Format message text (convert markdown)
    let content = formatMessage(text);
    
    messageDiv.innerHTML = `
        <div class="avatar">
            <i class="fas fa-${sender === 'bot' ? 'robot' : 'user'}"></i>
        </div>
        <div class="content">
            <div class="header">
                <strong>${sender === 'bot' ? 'Charles Academy Bot' : 'You'}</strong>
                <span class="time">${time}</span>
            </div>
            ${content}
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Format message text (bold, lists, etc.)
function formatMessage(text) {
    let formatted = text;
    
    // Convert **bold**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert *italic*
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert `code`
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Convert newlines to paragraphs
    const paragraphs = formatted.split('\n\n');
    formatted = paragraphs.map(p => {
        if (p.includes('\n')) {
            // Handle lists
            const lines = p.split('\n');
            return lines.map(line => {
                if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
                    return `<li>${line.substring(1).trim()}</li>`;
                }
                return `<p>${line}</p>`;
            }).join('');
        }
        return `<p>${p}</p>`;
    }).join('');
    
    // Convert lists
    formatted = formatted.replace(/<li>/g, '</p><li>').replace(/<\/li>/g, '</li><p>');
    
    return formatted;
}

// Scroll to bottom
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Check user status
async function checkUserStatus() {
    try {
        const response = await fetch(`/api/user/${sessionId}`);
        const data = await response.json();
        
        if (data.success) {
            userRegistered = data.registered;
            updateUserInfo();
        }
    } catch (error) {
        console.error('Error checking user status:', error);
    }
}

// Update user info in sidebar
function updateUserInfo() {
    const userNameElement = document.getElementById('userName');
    const userStatusElement = document.getElementById('userStatus');
    
    if (userRegistered) {
        userNameElement.textContent = localStorage.getItem('userName') || 'Registered Student';
        userStatusElement.textContent = '✅ Registered';
        userStatusElement.style.color = '#4CAF50';
    } else {
        userNameElement.textContent = 'Guest Student';
        userStatusElement.textContent = 'Not registered';
        userStatusElement.style.color = '#FF9800';
    }
}

// Reset chat
async function resetChat() {
    if (confirm('Are you sure you want to start fresh? This will clear your current session.')) {
        try {
            await fetch('/api/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId: sessionId })
            });
            
            // Clear chat messages
            document.getElementById('chatMessages').innerHTML = `
                <div class="message bot">
                    <div class="avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="content">
                        <div class="header">
                            <strong>Charles Academy Bot</strong>
                            <span class="time">Just now</span>
                        </div>
                        <p>🎓 <strong>Welcome to Charles Academy!</strong></p>
                        <p>Session reset. Type "Hi" to get started!</p>
                    </div>
                </div>
            `;
            
            // Generate new session
            sessionId = generateSessionId();
            localStorage.setItem('charlesAcademySessionId', sessionId);
            
            // Reset user info
            userRegistered = false;
            updateUserInfo();
            
        } catch (error) {
            console.error('Error resetting chat:', error);
        }
    }
}

// Handle Enter key
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});