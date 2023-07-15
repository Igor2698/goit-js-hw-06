const form = document.querySelector(".login-form");

const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');


form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault()

    if (inputPassword.value === '' || inputEmail.value === '') {
        alert('All fields must be full')
        return;
    }

    console.log({
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value

    })
    form.reset()
}