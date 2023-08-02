const item = document.querySelector('.item');
console.log(item.innerHTML);

// item.innerHTML = `<h1>Hey, how are you doing?</h1>`;

const width = 500;
const src = `https://picsum.photos/400`;
const desc = 'Cute pup';
const myHTML = `
<div class='wrapper'>
<h2>${desc}</h2>
<img src='${src}' alt='${desc}' />
</div>
`;

// item.innerHTML = myHTML;
// console.log(item.innerHTML);

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);

document.body.appendChild(myFragment);
