// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const unList = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

listItem1.textContent = 'one';
listItem2.textContent = 'two';
listItem3.textContent = 'three';

unList.appendChild(listItem1);
listItem1.insertAdjacentElement('afterend', listItem2);
listItem2.insertAdjacentElement('afterend', listItem3);


// put that list into the above wrapper

div.appendChild(unList);

// create an image

const image = document.createElement('img');

// set the source to an image

image.src = `https://source.unsplash.com/random/300x300`;
// set the width to 250

image.width = `250`;
image.height = `250`;
// add a class of cute

image.classList.add('cute');
// add an alt of Cute Puppy

image.setAttribute('alt', 'Cute Puppy');
// Append that image to the wrapper

div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
  </div>
`;

// put this div before the unordered list from above
const htmlFragment = document.createRange().createContextualFragment(myHTML);

unList.insertAdjacentHTML('beforebegin', myHTML);
// div.appendChild(htmlFragment);

// add a class to the second paragraph called warning
const myDiv = document.querySelector('.myDiv');
myDiv.lastElementChild.classList.add('warning');

// remove the first paragraph

myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {

}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  const ageInDogYears = age * 7;
  const card = `
    <div class = 'playerCard'>
      <h2>${name} - ${age}</h2>
      <p>${name}'s height is ${height} and ${name} is ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
    </div>
  `;
  const cardFragment = document.createRange().createContextualFragment(card);
  return cardFragment;
}


// make a new div with a class of cards

const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard

const card1 = generatePlayerCard("Olha", 28, 174);
const card2 = generatePlayerCard("Wes", 100, 185);
const card3 = generatePlayerCard("Bos", 100, 105);
const card4 = generatePlayerCard("User", 77, 180);

// append those cards to the div

cards.appendChild(card1);
cards.appendChild(card2);
cards.appendChild(card3);
cards.appendChild(card4);


// put the div into the DOM just before the wrapper element

div.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const deleteBtn1 = document.createElement('button');
deleteBtn1.textContent = "Delete";
deleteBtn1.addEventListener('click', function(){
  document.body.children[1].children[0].remove()
});


const deleteBtn2 = document.createElement('button');
deleteBtn2.textContent = "Delete";
deleteBtn2.addEventListener('click', function(){
  document.body.children[1].children[0].remove()
});
const deleteBtn3 = document.createElement('button');
deleteBtn3.textContent = "Delete";
deleteBtn3.addEventListener('click', function(){
  document.body.children[1].children[0].remove()
});
const deleteBtn4 = document.createElement('button');
deleteBtn4.textContent = "Delete";
deleteBtn4.addEventListener('click', function(){
  document.body.children[1].children[0].remove()
});

document.body.children[1].lastElementChild.insertAdjacentElement('beforeend', deleteBtn4);

document.body.children[1].firstElementChild.insertAdjacentElement('beforeend', deleteBtn1);

document.body.children[1].children[1].insertAdjacentElement('beforeend', deleteBtn2);

document.body.children[1].children[2].insertAdjacentElement('beforeend', deleteBtn3);

// select all the buttons!
const buttons = document.querySelectorAll('.deleteBtn');
// make out delete function
// loop over them and attach a listener
