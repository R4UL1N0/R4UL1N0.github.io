// import { sendEmail } from "../server_functions/nodemailer_functions.js"


export function getFormInfo() {
    const nameForm = document.getElementById('name-form').value
    const emailForm = document.getElementById('email-form').value
    const descriptionForm = document.getElementById('description-form').value

    console.log(nameForm)
    console.log(emailForm)
    console.log(descriptionForm)

    const formArray = {
        name : nameForm,
        email: emailForm,
        description: descriptionForm
    }

    // // Compose email content
    // const messageBody = `Name: ${nameForm}\nEmail: ${emailForm}\nMessage: ${descriptionForm}`;
  
    // // Send the email
    // sendEmail(messageBody);


}
