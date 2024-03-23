const jokeBtn = document.querySelector(".get-joke");
const jokeEl = document.querySelector(".joke p");
const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'yeah...fine',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeEl.textContent = joke;
  jokeBtn.textContent = getRandomItemFromArr(
    buttonText, 
    jokeBtn.textContent
    );
}

function getRandomItemFromArr(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if(item === not) {
    getRandomItemFromArr(arr, not);
  }
  return item;
}


jokeBtn.addEventListener("click", handleClick);


