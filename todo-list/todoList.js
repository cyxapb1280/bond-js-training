function TodoList(options) {
  this.$el = options.element;


  this.$input = this.$el.querySelector('[data-selector="input"]')
  this.$list = this.$el.querySelector('[data-selector="list"]')

  this.$input.addEventListener('keypress', this.inputHandler.bind(this))
}


TodoList.prototype.add = function (todo) {
  const li = document.createElement('li');

  li.textContent = todo;

  this.$list.appendChild(li);
}

TodoList.prototype.inputHandler = function (event) {
  if (event.which === 13) {
      this.add(this.$input.value);


      this.$input.value = '';
  }
}