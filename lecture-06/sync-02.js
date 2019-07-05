function third() {
  console.log('3')
}

function second() {
  console.log('2')
  third()
}

function first() {
  console.log('1')
  second()
}

first()
