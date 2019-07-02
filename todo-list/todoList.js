const todoTemplate = `
<li class="list-group-item d-flex justify-content-between" data-key="{{id}}">
    {{text}}
    <button type="button" class="btn btn-link">&#x2715</button>
</li>
`

class TodoList {
  constructor(options) {
    this.$el = options.element;
    this._todos = []


    this.$form = this.$el.querySelector('[data-selector="form"]')
    this.$list = this.$el.querySelector('[data-selector="list"]')

    this.$form.addEventListener('submit', this._submitHandler.bind(this))

    this.$el.addEventListener('click', this._removeClickHandler.bind(this))
  }

  add(text) {
    const todo = {
      text,
      id: this._generateID(),
    }

    this._todos.unshift(todo)
    this._render(todo)
  }

  remove(id) {
    this._todos = this._todos.filter(todo => todo.id !== id)

    const childToRemove = this.$list.querySelector(`[data-key="${id}"]`)
    this.$list.removeChild(childToRemove)
  }

  _submitHandler(event) {
    event.preventDefault();

    this.add(this.$form.todo.value)

    this.$form.reset()
  }

  _removeClickHandler(event) {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }


    const elementToDelete = event.target.closest('li')

    this.remove(elementToDelete.dataset.key)
  }

  _render(todo) {
    const todoElement = Mustache.render(todoTemplate, todo)

    this.$list.insertAdjacentHTML('afterbegin', todoElement)
  }

  _generateID() {
    const ids = this._todos.map(todo => todo.id)

    return ids.length ?  Math.max(...ids) + 1 : 0
  }
}
