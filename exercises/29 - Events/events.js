// console.log("It works");
const button = document.querySelector('.btn');
function handleBtnClicked() {
  console.log('Button was clicked');
}
button.addEventListener('click', handleBtnClicked);
// button.removeEventListener('click', handleBtnClicked);

const btn = document.querySelector('.btn-main');
btn.addEventListener('click', handleBtnClicked);
btn.removeEventListener('click', handleBtnClicked);

const buyButtons = document.querySelectorAll('button.buy');


// function logClickedBtn(buyButton) {
//   buyButton.addEventListener('click', handleBtnClicked);
// }
// function removeClickedBtn(buyButton) {
//   buyButton.removeEventListener('click', handleBtnClicked);
// }

// buyButtons.forEach(logClickedBtn);
// buyButtons.forEach(removeClickedBtn);
function handleBuyButtonClick(event) {
  console.log("You are buying it");
  console.log(event.target.dataset.price);
  // console.log(typeof event.target.dataset.price); //string
  console.log(parseFloat(event.target.dataset.price));
  // console.log(typeof parseFloat(event.target.dataset.price)); //number
  const button = event.target;
  console.log(button.textContent);
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.target === event.currentTarget); // true
  // event.stopPropagation();
};

window.addEventListener('click', (event) => {
  console.log('You have clicked the window');
  console.log(event.target);
  console.log(event.type);
  event.stopPropagation();
  console.log(event.bubbles);
}), {capture: true};

buyButtons.forEach(function(buyButton){
  buyButton.addEventListener('click', handleBuyButtonClick);
});

const photoEl = document.querySelector(".photo");
photoEl.addEventListener('mousemove', function(e){
  console.log(e.currentTarget);
  console.count(e.currentTarget);
  console.log(this); 
});