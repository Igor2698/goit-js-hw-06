const body = document.querySelector('body')
const span = document.querySelector('.color');
const buttonChangeCollor = document.querySelector('.change-color');

function getRandomHexColor() {
  const newColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  body.style.backgroundColor = newColor;
  span.textContent = newColor;

}

buttonChangeCollor.addEventListener("click", getRandomHexColor)













