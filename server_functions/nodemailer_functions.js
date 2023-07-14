import { nodemailer } from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export function sendEmail(message) {
    
    const emailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New message from you Presentation Page!",
        text: message
    }

    transporter.sendMail(emailOptions, function(error, info) {
        if (error) {
            console.error('Error sending email:', error);
          } else {
            window.alert('E-mail successfully sent!')
          }
    })
}