const button = document.querySelector('button.main')
const indicator = document.querySelector('.indicator')

button.addEventListener('click', (event) => {
  indicator.style.backgroundColor = 'green';
})

var el = document.querySelector("div.user-panel.main input[name=login]");