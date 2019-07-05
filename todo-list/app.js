import {Form} from './form'
import {List} from './list'
import Config from './config'
import Repository from './repository'


export class App {
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
    this._list.on('TodoRemoved', this._onTodoRemoved.bind(this))

    this._init()
  }

  _init() {
    this._fetchTodos()
  }

  _onTodoSubmit(event) {
    const todo = {
      text: event.detail,
      id: this._generateID(),
    }

    this._todos.unshift(todo)
    this._list.add(todo)

    this._updateTodos()
  }

  _onTodoRemoved({detail: id}) {
    this._todos = this._todos.filter(todo => todo.id !== id)

    this._updateTodos()
  }

  _generateID() {
    const ids = this._todos.map(todo => todo.id)

    return ids.length ? Math.max(...ids) + 1 : 0
  }

  _fetchTodos() {
    Repository.fetch(Config.apiUrl)
      .then(data => {
        this._todos = data.todos

        this._list.add(data.todos)
      })
  }

  _updateTodos() {
    Repository.update(Config.apiUrl, {
      'todos': this._todos
    })
      .then(() => console.log('saved successfully'))
      .catch((err) => console.error(err))
  }
}
