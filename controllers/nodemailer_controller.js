export { app } from '../server.js'
export { sendEmail } from '../server_functions/nodemailer_functions.js'


app.post("/submit-form", function (req, res) {

    console.log("Hello from Submit Form")
    // Retrieve form data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
  
    // Compose email content
    const messageBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
    // Send the email
    sendEmail(messageBody);
  
    // Respond with success message or redirect to a thank you page
    res.send('Email sent successfully!');
  });