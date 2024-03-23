// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"
const form = document.querySelector(".search");
const recipesGrid = document.querySelector(".recipes");
const basePoint = 'https://recipes.beginnerjavascript.com/api';

async function fetchRecipes() {
  const res = await fetch(`${basePoint}`);
  const data = await res.json();
  return data;
}

async function submitHandler(e) {
  e.preventDefault();
  // let queryValue = e.currentTarget.query.value;
  fetchAndDisplay(form.query.value);
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  console.log(recipes.results);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
  // e.currentTarget.query.value = "";
}

function displayRecipes(recipes) {
  const recipesHtml = recipes.map((recipe) => {
    return `<div class="recipe">
      <h2 class="recipe-title">${recipe.title}</h2>
      <img class="recipe-img" src="${recipe.thumbnail}" alt="${recipe.title}">
      <p class="recipe-description">${recipe.description}</p>
      <a class="recipe-link" href="${recipe.href}" target="_blank">Watch the recipe →</a>
    </div>
    `
  })
  recipesGrid.innerHTML = recipesHtml.join("");
}

form.addEventListener("submit", submitHandler);
fetchAndDisplay("pizza");