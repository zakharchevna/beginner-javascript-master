/* eslint-disable */
/*
const name = 'wes';
const middle = "topher";
const last = `bos`;

const sentence = "shes's so \"cool\"";
const sentence2 = `shes's so "cool"`;

const song = `Ohhh

ya

I like
pizza`;

const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;

*/

// const age = 100.5;
// const name = 'wes';

// const a = 10;
// const b = 20;
/*
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kids gets ${eachKidGets}`);

const price = 1034;
*/


/*
const person = {
  first: 'wes',
  last: 'bos',
  age: 100
};


let dog;
console.log(dog);
dog = 'snickers';


let somethingUndefined;
const somethingNull = null;

const cher = {
  first: 'cher'
};

const teller = {
  first: 'Raymond',
  last: 'Teller'
}

teller.first = 'Teller';
teller.last = null;

*/

// let isDrawing = false;
// let age = 18;
// const ofAge = age > 19;
// console.log(ofAge);

// age = 100;
// let age2 = 100;


function getMaxSubSum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // Результат: 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // Результат: 6

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + " <> " + b );
//   return a - b;
// });




function camelize(str) {
  return str
  .split('*')
  .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
  .join("");
}

console.log(camelize("go*to*school"));

// function filterRange(arr, a, b) {
//   const filteredArr = arr.filter((value) => value >= a && value <= b);
//   console.log(arr);
//   return filteredArr;
// }

// console.log(filterRange([], 3, 15));
let arr = [4, 1, 9, 45, 3, 2, 1, 9, 45, 3, 2, 8, 5, 34];
function filterRangeInPlace(arr, a, b) {
  const filteredArr = arr.filter(value => value >= a && value <= b);
  arr.splice(0, arr.length, ...filteredArr);
}

filterRangeInPlace(arr, 3, 35);
console.log(arr);

let arrForSort = [5, 2, 1, -10, 8];
arrForSort.sort((a, b) => b - a )
console.log(arrForSort);

let arrForSorting = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return [...arr].sort();
}

let sorted = copySorted(arrForSorting);
console.log(sorted);
console.log(arrForSorting);

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let users = [ ivan, petro, mariya ];

let names = [];
users.forEach((user) => names.push(user.name));
// let names = users.map(item => item.name);

console.log(names);

let joahn = { name: "Іван", surname: "Іванко", id: 1 };
let peter= { name: "Петро", surname: "Петренко", id: 2 };
let mary = { name: "Марія", surname: "Мрійко", id: 3 };

let users2 = [ joahn, peter, mary ];

let usersMapped = users2.map((user) => ({
    fullName: `${user.name} ${user.surname}`, 
    id: user.id
  })
)

let ola = { name: "Іван", age: 25 };
let maks = { name: "Петро", age: 30 };
let leokadia = { name: "Марія", age: 70 };

let guests = [ leokadia, maks, ola ];


function sortByAge(arr) {
  return arr.map(item => item.age).sort((a, b) => a - b);
  // arr.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(guests));






