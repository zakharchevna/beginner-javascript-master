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
    }
    document.body.appendChild(popup);
    function wait(ms=0) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await wait(50);
    popup.classList.add("open");
    // listen for the submit event on the inputs
    popup.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("submitted!");
      resolve(e.target.input.value);
    }, {once:true})
    // when someone does submit it, resolve the data that was in the input box!
    // insert that popup into the DOM
    // put a very small timeout before we add the open class
  });
}  

ask({ title: 'does this work' });