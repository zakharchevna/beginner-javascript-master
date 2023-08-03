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


function logClickedBtn(buyButton) {
  buyButton.addEventListener('click', handleBtnClicked);
}
function removeClickedBtn(buyButton) {
  buyButton.removeEventListener('click', handleBtnClicked);
}

buyButtons.forEach(logClickedBtn);
buyButtons.forEach(removeClickedBtn);
