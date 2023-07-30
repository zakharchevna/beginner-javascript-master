const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // console.log(person.name);
  // console.table(people);
  console.group(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.groupEnd(`${person.name}`);
});

// Console Methods
/*  console.group()
    console.count()
    console.table()
    console.warn()
    console.error()
    console.log()
    console.groupCollapsed()
    console.groupEnd()
*/

// Callstack

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  console.count(`running doctorize ${name}`);
  return `Dr. ${name}`;
}

function doALotOfStuff() {
  console.group("Doing a lot of stuff")
  console.log("loging");
  console.warn("warning");
  console.error("error");
  console.groupEnd("Doing a lot of stuff")
}



function greet(name) {
  doesntExist();
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
