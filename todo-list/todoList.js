function TodoList(options) {
  this.$el = options.element;
  this._todos = []


  this.$form = this.$el.querySelector('[data-selector="form"]')
  this.$list = this.$el.querySelector('[data-selector="list"]')

  this.$form.addEventListener('submit', this._submitHandler.bind(this))

  this.$el.addEventListener('click', this._removeClickHandler.bind(this))
}


TodoList.prototype.add = function (todo) {
  const li = document.createElement('li')
  const button = document.createElement('button');

  button.innerHTML = '&#x2715'
  button.className = 'btn btn-link'
  button.type = 'button'

  li.className = 'list-group-item d-flex justify-content-between'
  li.textContent = todo

  this._todos.unshift(todo)
  li.appendChild(button)

  this.$list.insertAdjacentElement('afterbegin', li);
}

TodoList.prototype.remove = function (element) {
  const indexToRemove = this._todos.findIndex(function (entry) {
    return entry === element.textContent;
  })

  this._todos.splice(indexToRemove, 1)
  this.$list.removeChild(element)

}

TodoList.prototype._submitHandler = function (event) {
  event.preventDefault();

  this.add(this.$form.todo.value)

  this.$form.reset()
}


TodoList.prototype._removeClickHandler = function (event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }


  const elementToDelete = event.target.closest('li')

  this.remove(elementToDelete)
}
