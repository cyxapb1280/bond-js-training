const greeting = 'Hello'

function greet(name) {
  return greeting + ', ' + name
}

console.log(greet('IGOR')) // => 'Hello, IGOR'

function createCounter() {
  let count = 0;

  return function () {
    console.log(++count);
  }
}

const counter = createCounter();

counter(); // => 1
counter(); // => 2
counter(); // => 3



