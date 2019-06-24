const person = {
  intelligent: true
}

const monkey = {
  hands: 2,
  legs: 2,
  butt: 1
}


person.__proto__ = monkey;

console.log(person.legs); // => 2