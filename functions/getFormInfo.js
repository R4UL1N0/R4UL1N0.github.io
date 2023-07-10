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
}
