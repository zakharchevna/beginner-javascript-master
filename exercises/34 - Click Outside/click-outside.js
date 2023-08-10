console.log("it works");

const cardButtons = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");


function handleCardButtonClick(event) {
  console.log("clicked");
  const button = event.currentTarget;
  const card = button.closest(".card");
  console.log(card);
  const imgSrc = card.querySelector("img").src;
  console.log(imgSrc);
  const desc = card.dataset.description;
  console.log(desc);
  const name = card.querySelector("h2").textContent;
  modalInner.innerHTML = `
  <img src = "${imgSrc.replace('200', '600')}" alt = "${name}" width ="600" height = "600"/>
  <p>${desc}</p>
  `;
  modalOuter.classList.add("open");
}
cardButtons.forEach(button => button.addEventListener("click", handleCardButtonClick));

function closeModal() {
  modalOuter.classList.remove("open");
}

modalOuter.addEventListener("click", function(event) {
  const isOutside = !event.target.closest(".modal-inner");
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", event => {
  console.log(event);
  if(event.key === "Escape") {
    closeModal();
  }
})


