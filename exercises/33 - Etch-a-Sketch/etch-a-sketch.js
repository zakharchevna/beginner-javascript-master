console.log('It works');
// Select the elements on the page - canvas, shake button
const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');


// Setup our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;



// make a variable called height and width from the same properties on our canvas.
const {width, height} = canvas; 
// const width = canvas.width; const height = canvas.height;
console.log(width, height);
// create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
const MOVE_AMOUNT = 10;
// write a draw function
let hue = 0;
function draw({key}) {
  console.log(key);
  hue +=2;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch(key) {
    case 'ArrowUp':
    y -= MOVE_AMOUNT;
    break;
    case 'ArrowDown':
    y += MOVE_AMOUNT;
    break;
    case 'ArrowRight':
    x += MOVE_AMOUNT;
    break;
    case 'ArrowLeft':
    x -= MOVE_AMOUNT;
    break;
    default: 
    break;
  }
  
  ctx.lineTo(x,y);
  ctx.stroke();
}
// increment the hue  
// https://mothereffinghsl.com

// start the path
ctx.beginPath();
// move our x and y values depending on what the user did
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// write a handler for the keys
function handleKey(e) {
  if(e.key.includes('Arrow')) {
    e.preventDefault();
    draw({key: e.key});
    // console.log(e.key);
    // console.log('Handling Key');
  }
}
// clear /shke function
function clearCanvas() {
  shakeBtn.classList.add('shake');
}
// listen for arrow keys
window.addEventListener('keydown', handleKey);





























// Select the elements on the page - canvas, shake button
// Setup our canvas for drawing
// make a variable called height and width from the same properties on our canvas.
// create random x and y starting points on the canvas
// write a draw function
// increment the hue
// start the path
// move our x and y values depending on what the user did

// write a handler for the keys
// clear /shke function
// listen for arrow keys
