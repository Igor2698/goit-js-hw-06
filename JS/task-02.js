const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const firtItem = document.createElement("li");
firtItem.textContent = ingredients[0]
firtItem.classList.add('item')
console.log(firtItem.textContent)

const secondItem = document.createElement("li");
secondItem.textContent = ingredients[1]
secondItem.classList.add('item')
console.log(secondItem.textContent)


const thirdItem = document.createElement("li");
thirdItem.textContent = ingredients[2]
thirdItem.classList.add('item')
console.log(thirdItem.textContent)

const fourItem = document.createElement("li");
fourItem.textContent = ingredients[3]
fourItem.classList.add('item')
console.log(fourItem.textContent)

const fiveItem = document.createElement("li");
fiveItem.textContent = ingredients[4]
fiveItem.classList.add('item')
console.log(fiveItem.textContent)

const sixItem = document.createElement("li");
sixItem.textContent = ingredients[5]
sixItem.classList.add('item')
console.log(sixItem.textContent)


list.append(firtItem, secondItem, thirdItem, fourItem, fiveItem, sixItem )
