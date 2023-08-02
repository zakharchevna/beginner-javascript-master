// function init() {
//   const p = document.querySelector('p');
//   console.log(p);
// }
// document.addEventListener('DOMContentLoaded', init);

const p = document.querySelector('p');
// console.log(p);

const divs = document.querySelectorAll('div');
// console.log(divs);

const heading = document.querySelector('h2');
console.log(heading.textContent);
console.log(heading.innerText);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`

pizzaList.insertAdjacentText('beforeend', '🍕');
