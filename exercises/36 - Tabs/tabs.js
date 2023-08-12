console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll("[role = 'tab']");
const tabPanels = Array.from(tabs.querySelectorAll("[role = 'tabpanel']"));



function handleTabClick(event) {
  // event.stopPropagation();
  // console.log("button clicked");
  // console.log(event);
  // console.log(event.currentTarget);
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  tabButtons.forEach(tab => {
    tab.setAttribute("aria-selected", false);
  });
  event.currentTarget.setAttribute("aria-selected", true);
  const { id } = event.currentTarget;
  // const tabPanel = tabs.querySelector(`[aria-labelledby = ${id}]`);
  // console.log(tabPanel);
  // tabPanel.hidden = false;
  const tabPanel = tabPanels.find((panel) => {
    if (panel.getAttribute("aria-labelledby") === id) {
      return true;
    }
  });
  tabPanel.hidden = false;
  console.log(tabPanel);
}


tabButtons.forEach(button => button.addEventListener("click", handleTabClick));

// hide all tab panels
// mark all tabs as unselected
// mark the clicked tab as selected
// find the associated tabPanel and show it!


// const tabs = document.querySelector(".tabs");
// const tabButtons = tabs.querySelectorAll("[role = 'tab']");
// const tabPanels = Array.from(tabs.querySelectorAll("[role = 'tabpanel']"));

// const tabPanel = tabPanels.find((panel) => {
//   if (panel.getAttribute("aria-labelledby") === id) {
//     return true;
//   }
// })