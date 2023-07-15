function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector("#controls input");
const createButton = document.querySelector('button[data-create]');
const baseDiv = document.querySelector('#boxes');



function createBoxes(amount) {
  input.value = 0;

  let widthDiv = 20;
  let hightDiv = 20;
  const step = 10;

  let newDiv;
  
  for (let i = 1; i <= amount; i += 1) {
    newDiv = document.createElement("div");
    newDiv.style.width = (widthDiv += 10) + "px"
    newDiv.style.height = (hightDiv += 10) + "px"
    newDiv.style.background = getRandomHexColor()

    baseDiv.append(newDiv)
  }
}

createButton.addEventListener("click", function () {
  createBoxes(input.value);
});

destroyButton.addEventListener("click", function () {
  baseDiv.innerHTML = '';
  input.value = 0;
  if (newDiv) {
    newDiv.style.height = "30px";
  }
});






