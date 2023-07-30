// const name = "Olha";
// let flower = "rose";
// var favouriteTime = "morning";

// function sayHi() {
//   console.log("Hi");
// }

const age = 28;

function go() {
  const hair = "gold";
  const userAge = 30;
  console.log(hair);
  console.log(userAge);

}

go();

console.log(age);
// console.log(hair);



function isCool(name) {
  let cool;
  if (name === "Olha") {
    // const cool = true;
    // let cool = true;
    // var cool = true;
    cool = true;
  }
  console.log(cool);
  return cool;
}

const dog = "snickers";

// function logDog() {
//   console.log(dog);
// }
function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = "pepe";
  logDog("Rahman");
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

sayHi("Olha");