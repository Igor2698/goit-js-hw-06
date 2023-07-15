

const inputValue = document.querySelector('#name-input');

const span = document.querySelector('#name-output');
inputValue.addEventListener('input', onInputChange);


function onInputChange() {
    if (event.currentTarget.value === '') {
        span.textContent = 'Anonymous'
    } else {
        span.textContent = event.currentTarget.value
    }

}

