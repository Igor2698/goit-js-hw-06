const input = document.querySelector('#font-size-control')

const span = document.querySelector('#text')


input.addEventListener('input', onInputChange);

function onInputChange() {
    span.style.fontSize = input.value + "px"
}

