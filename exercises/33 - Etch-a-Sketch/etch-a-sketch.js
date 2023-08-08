console.log('It works');
// Select the elements on the page - canvas, shake button
const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeBtn = document.querySelector('.shake');


// Setup our canvas for drawing

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 22;



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
  // increment the hue  
  // https://mothereffinghsl.com
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
// clear /shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener('animationend', () => {
    canvas.classList.remove('shake');
    console.log('Done the shake!');
  }, 
  {once: true}
  );
}

shakeBtn.addEventListener('click', clearCanvas);
// listen for arrow keys
window.addEventListener('keydown', handleKey);


// Select the elements on the page - canvas, shake button
const canvas1 = document.querySelector("#canvas1");
const clearBtn = document.querySelector(".clear");
const ctx1 = canvas1.getContext("2d");
const MOVE_AMOUNT1 = Math.floor(Math.random() * 50);
// Setup our canvas for drawing
ctx1.lineJoin = "bevel";
ctx1.lineCap = "butt";
ctx1.lineWidth = 27;
// make a variable called height and width from the same properties on our canvas.
const width1 = canvas1.width;
const height1 = canvas1.height;
console.log(width1, height1);
// create random x and y starting points on the canvas
let x1 = Math.floor(Math.random() * width1);
let y1 = Math.floor(Math.random() * height1);
// write a draw function
// let hue1 = 20;
function draw1({key}) {
  // increment the hue
  ctx1.strokeStyle = `hsl(60, 100%, 50%)`;
  ctx1.beginPath();
  ctx1.moveTo(x1, y1);
  switch(key) {
    case "ArrowDown":
      y1 += MOVE_AMOUNT1;
      break;
    case "ArrowUp":
      y1 -= MOVE_AMOUNT1;
      break;
    case "ArrowLeft":
      x1 -= MOVE_AMOUNT1;
      break;
    case "ArrowRight":
      x1 += MOVE_AMOUNT1;
      break;
    default: 
      break;
  }
  ctx1.lineTo(x1, y1);
  ctx1.stroke();
}
// start the path
ctx1.beginPath();
// move our x and y values depending on what the user did
ctx1.moveTo(x1, y1);
ctx1.lineTo(x1, y1);
ctx1.stroke();
// write a handler for the keys
function handleKeys (e) {
  if(e.key.includes("Arrow")) {
    e.preventDefault();
    draw1({key: e.key});
  }
}
// clear /shke function
function clearCanvas1() {
  ctx1.clearRect(0, 0, width1, height1);
  canvas1.classList.add("clear");
  canvas1.addEventListener("animationend", () => {
    canvas1.classList.remove("clear");
  },
  {once: true}
  );
}
clearBtn.addEventListener("click", clearCanvas1);
// listen for arrow keys

window.addEventListener("keydown", handleKeys);
