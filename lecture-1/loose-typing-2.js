const n = Number('256') // explicit type coercion
console.log(n) // => 256

if (1 || 'true') { // implicit coercion
  // going to happen
}

const res = 2/'5' // implicit as well
console.log(res) // => 0.4