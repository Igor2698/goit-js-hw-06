const body = document.querySelector('body')
const span = document.querySelector('.color');
const buttonChangeCollor = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;


}

buttonChangeCollor.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  span.textContent = newColor;
});










