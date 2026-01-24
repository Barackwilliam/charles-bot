// test-simple.js - Simple test
console.log('🧪 Testing...');

const studentRegistration = require('./studentRegistration');

// Test database connection
console.log('Testing database...');
studentRegistration.isStudentRegistered('test@test.com').then(result => {
    console.log('Result:', result);
    
    // Test registration flow
    console.log('\nTesting registration flow:');
    const msg1 = studentRegistration.startRegistration('test@test.com', 'en');
    console.log('Step 1:', msg1);
    
    // Simulate user providing name
    const msg2 = studentRegistration.handleRegistrationStep('test@test.com', 'John Doe', 'en');
    console.log('Step 2:', msg2);
    
    // Simulate user skipping registration number
    const msg3 = studentRegistration.handleRegistrationStep('test@test.com', 'SKIP', 'en');
    console.log('Step 3:', msg3);
});