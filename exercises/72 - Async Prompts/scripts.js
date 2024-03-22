function ask(options) {
  // First we need to create a popup with all the fields in it
  const popup = document.createElement("form");
  popup.classList.add("popup");
  popup.insertAdjacentHTML("afterbegin", `
    <fieldset>
      <label>${options.title}</label>
    </fieldset>
  `);
  // check if they want a cancel button
  if(options.cancel) {
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";
    //TODO: Listen for a click on that btn
  }
  document.body.appendChild(popup);
  // listen for the submit event on the inputs
  // when someone does submit it, resolve the data that was in the input box!
  // insert that popup into the DOM
  // put a very small timeout before we add the open class
}

ask({ title: 'does this work' });