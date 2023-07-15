
// 1 task
const listCategories = document.querySelector('#categories')
console.log(`Number of categories: ${listCategories.children.length} `)
// 2 task

const items = document.querySelectorAll('.item')


items.forEach(item =>console.log(`Category: ${item.firstElementChild.textContent} 
Elements: ${item.lastElementChild.children.length} `))
