import { SendEmailController } from '../controllers/send_email_controller.js'

export function getFormInfo() {
    const nameForm = document.getElementById('name-form').value
    const emailForm = document.getElementById('email-form').value
    const descriptionForm = document.getElementById('description-form').value

    console.log(nameForm)
    console.log(emailForm)
    console.log(descriptionForm)


    const messageBody = `Name: ${nameForm}\nEmail: ${emailForm}\nMessage: ${descriptionForm}`;
  
    SendEmailController.sendEmail(nameForm, messageBody)

}
