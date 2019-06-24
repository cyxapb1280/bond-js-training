const display = document.querySelector('#display');
const container = document.querySelector('.container')

container.addEventListener('click', (event) => {
  if (!event.target.dataset.key) {
    return;
  }

  display.textContent = event.target.dataset.key
})