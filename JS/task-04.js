let counterValue = 0;
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');


const counter = document.querySelector('#value');

plusButton.addEventListener("click", () => {
    counterValue += 1
    counter.textContent = counterValue
})


minusButton.addEventListener("click", () => {
    counterValue -= 1
    counter.textContent = counterValue
})