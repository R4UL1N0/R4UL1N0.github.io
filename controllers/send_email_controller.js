export class SendEmailController {

  static sendEmail(name, message) {
    const apiUrl = "https://email-sender-spring-api-production.up.railway.app/send-email"

    const postData = {
      to: "raulino.storage@gmail.com",
      subject: `${name} wants to work with you!`,
      text: message
    }

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(postData)
    })
    .then(() => console.log("E-mail sent successfully!"))
    .catch((e) => console.log(e))
  }

}

