const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
let items = [];



function displayItems () {
  const html = items.map((item) => `<li class="shopping-item">
  <input type="checkbox" value="${item.id}" ${ item.complete ? 'checked' : ''}>
  <span class="itemName">${item.name}</span>
  <button aria-label="Remove ${item.name}" value="${item.id}">&times;</button>
  </li>`).join("");
  list.innerHTML = html;
}

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if(!name) return;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  items.push(item);
  e.target.reset();
  displayItems()
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}


function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
  console.info('saving items to local storage');
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if(lsItems.length) {
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

function deleteItem(id) {
  console.log('deleting item', id)
  items = items.filter((item) => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
  const refItem = items.find(item => item.id === id);
  console.log(refItem)
  refItem.complete = !refItem.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
list.addEventListener('click', function(e) {
  const id = parseInt(e.target.value);
  if(e.target.matches('button')) {
    deleteItem(id);
  }
  if(e.target.matches('input[type="checkbox"]')) {
    markAsComplete(id);
  }
})
shoppingForm.addEventListener('submit', handleSubmit);



restoreFromLocalStorage();
