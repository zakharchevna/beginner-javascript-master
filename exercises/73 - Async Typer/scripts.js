function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150) {
  return Math.floor(Math.random() * (max - min) + min);
}

// async function draw(el) {
//   console.log(el);
//   const text = el.textContent;
//   let soFar = "";

//   for(const letter of text) {
//     soFar += letter;
//     el.textContent = soFar;
//     const { typeMin, typeMax } = el.dataset;
//     const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountOfTimeToWait);
//   }
// }


function drawRecursion(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    
    if(index <= text.length) {
      drawLetter();
    }
  }

  drawLetter();
}

const els = document.querySelectorAll("[data-type]").forEach(drawRecursion);
