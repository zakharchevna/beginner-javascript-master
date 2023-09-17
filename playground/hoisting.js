sayHi();

function sayHi() {
  console.log("Hello");
  console.log(add(1, 79));
}

function add(a, b) {
  return a + b;
}

// var hoistVar = "blablabla";
// let hoistVar = "blablabla";
const hoistVar = "blablabla";
console.log(hoistVar);

function nextItem(xs, item) {
  const indexItem = xs.indexOf(item);
  return xs[indexItem + 1];
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3));
console.log(nextItem("testing", "t"));

function eachCons(array, n) {
  let arr = [];
  for(let i = 0; i < array.length; i++) { 
    if(array.slice(i, n + i).length === n) {
      arr.push(array.slice(i, n + i));
    }
  }
  console.log(arr)
  return arr;
}

console.log(eachCons([1,2,3,4,5,6,7], 3));


function warnTheSheep(queue) {
  for (let i = queue.length - 1; i >= 0 ; i--) {
    if(queue[i] === 'wolf') {
      return 'Pls go away and stop eating my sheep'
    } else {
        const n = queue.length - (queue.indexOf("wolf") + 1);
        return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
    }
  }
}

console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep","sheep", "sheep","sheep", "sheep","sheep", "sheep"]));

function points(games) {
  let sumPoints = 0;
  for (let i = 0; i < games.length; i++) {
    if(+games[i][0] > +games[i][2]) {
      sumPoints += 3;
    } else if(+games[i][0] === +games[i][2]) {
      sumPoints += 1;
    }
  }
  return sumPoints;
}

console.log(points(["1:0","2:0","0:0","4:0","2:1","3:1","4:1","3:2","0:2","4:3"]));


function twoSort(s) {
  const sortedArr = [...s].map(item => item.toLowerCase()).sort();
  let firstItem = sortedArr[0].split(" ");
  
    for (let i = 0; i < firstItem[0].length - 1; i++) {
      console.log(firstItem[0][i])
        firstItem = firstItem[0][i] + "***";
    }
    return firstItem;
}

console.log(twoSort(["bitcoin", "take", "over", "the", "World", "maybe", "who", "knows", "perhaps"]))