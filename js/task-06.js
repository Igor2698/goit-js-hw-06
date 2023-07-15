const input = document.querySelector('#validation-input')
input.addEventListener('blur', loseFocus);


function loseFocus() {
    if (input.value.length == input.dataset.length) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
    else if (input.value.length === 0) {
        input.classList.remove('invalid')
        input.classList.remove('valid')
    }

    else {
        input.classList.add('invalid')
    }
}
