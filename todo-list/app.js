class App {
  constructor({element}) {
    this.$element = element

    this._todos = []

    this._form = new Form({
      element: this.$element.querySelector('[data-component="form"]')
    })

    this._list = new List({
      element: this.$element.querySelector('[data-component="list"]')
    })


    this._form.on('TodoSubmitted', this._onTodoSubmit.bind(this))
  }

  _onTodoSubmit(event) {
    const todo = {
      text: event.detail,
      id: this._generateID(),
    }

    this._todos.unshift(todo)
    this._list.add(todo)
  }

  _generateID() {
    const ids = this._todos.map(todo => todo.id)

    return ids.length ?  Math.max(...ids) + 1 : 0
  }
}
