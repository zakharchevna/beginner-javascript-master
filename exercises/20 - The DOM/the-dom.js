// function init() {
//   const p = document.querySelector('p');
//   console.log(p);
// }
// document.addEventListener('DOMContentLoaded', init);

// const p = document.querySelector('p');
// console.log(p);

// const divs = document.querySelectorAll('div');
// console.log(divs);

// const heading = document.querySelector('h2');
// console.log(heading.textContent);
// console.log(heading.innerText);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`

// pizzaList.insertAdjacentText('', '🍕');

const pic = document.querySelector('.nice');
console.log(pic.classList);
pic.classList.add('open');
console.log(pic.classList);
// pic.classList.add('round');
// pic.classList.toggle('round');
console.log(pic.classList);
function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = "Black roses";
pic.width = "400";

pic.addEventListener('load', function(){
  console.log(pic.naturalWidth);
});

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function(){
  alert(`Hello ${custom.dataset.name} ${custom.dataset.language}`);
});

