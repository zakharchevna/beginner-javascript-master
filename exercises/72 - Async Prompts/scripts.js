function wait(ms=0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove("open");
  await wait(1000);
  popup.remove();
  popup = null;
}


function ask(options) {
  return new Promise(async function(resolve) {
    // First we need to create a popup with all the fields in it
    const popup = document.createElement("form");
    popup.classList.add("popup");
    popup.insertAdjacentHTML("afterbegin", `
      <fieldset>
        <label>${options.title}</label>
        <input type="text" name="input" />
        <button type="submit">Submit</button>
      </fieldset>
    `);
    // check if they want a cancel button
    if(options.cancel) {
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.textContent = "Cancel";
      popup.firstElementChild.appendChild(cancelBtn);
      //TODO: Listen for a click on that btn
      cancelBtn.addEventListener("click",
        function() {
          resolve(null);
          destroyPopup(popup);
        }, { once: true }
      )
    }
    document.body.appendChild(popup);
    await wait(50);
    popup.classList.add("open");
    // listen for the submit event on the inputs
    popup.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("submitted!");
      resolve(e.target.input.value);
      destroyPopup(popup);
    }, {once:true})
    // when someone does submit it, resolve the data that was in the input box!
    // insert that popup into the DOM
    // put a very small timeout before we add the open class
  });
}  

async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = "cancel" in button.dataset;
  console.log(button.dataset);
  const answer = await ask({
    title: button.dataset.question,
    cancel
  });
  console.log(answer);
}

const buttons = document.querySelectorAll("[data-question]");
console.log(buttons);

buttons.forEach(button => button.addEventListener("click", askQuestion));

const questions = [
  {title: "What is your name?"},
  {title: "What is your age", cancel: true},
  {title: "What is your hobby?"},
];

// const qPromises = questions.map(ask);
// console.log(qPromises);

// Promise.all(questions.map(ask)).then(data => {
//   console.log(data);
// });

async function asyncMap(array, callback) {
  const results = [];

  for(const data of array) {
    const result = await callback(data);
    results.push(result);
  }

  return results;
}

async function go() {
  const answer = await asyncMap(questions, ask);
  console.log(answer);
}

go();
