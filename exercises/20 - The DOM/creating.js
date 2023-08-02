const list = document.createElement('ul');
const listItem1 = document.createElement('li');
listItem1.textContent = "I am li N1";
listItem1.classList.add("first");

const listItem2 = document.createElement('li');
listItem2.textContent = "I am li N2";
listItem2.classList.add('second');

const listItem4 = document.createElement('li');
listItem4.textContent = 'I am li N4'
listItem4.classList.add('fourth');


const listItem3 = document.createElement('li');
listItem3.textContent = 'I am thirt li';
listItem3.classList.add('third');

// const listItem5 = document.createElement('li');
const listItem5 = listItem1.cloneNode(true);
listItem5.textContent = 'I am fifth li';
listItem5.classList.remove('first');
listItem5.classList.add('fifth');

list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem4);

listItem2.insertAdjacentElement('afterend', listItem3);

listItem4.insertAdjacentElement('afterend', listItem5);
console.log(list);