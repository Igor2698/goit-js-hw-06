

const inputValue = document.querySelector('#name-input');
console.log(inputValue.textContent)
const span = document.querySelector('#name-output');
inputValue.addEventListener('input', onInputChange);


function onInputChange() {
    if (event.currentTarget.value === '') {
        span.textContent = 'Anonymous'
    } else 
        span.textContent = event.currentTarget.value

}

