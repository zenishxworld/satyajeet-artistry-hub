// Simple test script to test the contact form
const testContactForm = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    inquiryType: "IELTS Training",
    message: "This is a test message from the contact form."
  };

  try {
    const response = await fetch('http://localhost:54321/functions/v1/send-contact-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZXN2Z2xyYXFneG5mcWZ2aHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3Nzg5MzAsImV4cCI6MjA3MjM1NDkzMH0.aqx5J_4rl3_uA_Gzka7ayR93W52i2x580oUL2cv7sFA'
      },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', result);
  } catch (error) {
    console.error('Error testing contact form:', error);
  }
};

testContactForm();
