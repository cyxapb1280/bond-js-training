import {Component} from './component'
import Mustache from 'mustache'

const todoTemplate = `
{{#todos}}
  <li class="list-group-item d-flex justify-content-between" data-key="{{id}}">
    {{text}}
    <button type="button" class="btn btn-link">&#x2715</button>
  </li>
{{/todos}}
`

export class List extends Component {
  constructor(options) {
    super(options)

    this.$element.addEventListener('click', this._removeClickHandler.bind(this))
  }

  add(todos) {
    this._render(todos)
  }

  _remove(id) {
    this._trigger('TodoRemoved', id)

    const childToRemove = this.$element.querySelector(`[data-key="${id}"]`)
    this.$element.removeChild(childToRemove)
  }

  _removeClickHandler(event) {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }


    const elementToDelete = event.target.closest('li')
    this._remove(parseInt(elementToDelete.dataset.key))
  }

  _render(todos) {
    const todoElement = Mustache.render(todoTemplate, {todos})

    this.$element.insertAdjacentHTML('afterbegin', todoElement)
  }
}
