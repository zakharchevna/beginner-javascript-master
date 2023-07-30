sayHi();

function sayHi() {
  console.log("Hello");
  console.log(add(1, 79));
}

function add(a, b) {
  return a + b;
}

console.log(hoistVar);
// var hoistVar = "blablabla";
// let hoistVar = "blablabla";
const hoistVar = "blablabla";