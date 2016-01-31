import alt from 'components/Dispatcher';

import TodoActions from '../actions/TodoActions';

import uuid from 'uuid';
import extend from 'object-assign';

export class TodoStore {

  constructor() {
    this.bindActions(TodoActions);

    this.state = {
      todos: [],
      nowShowing: undefined
    }

  }

  static shownTodos() {
    return this.state.todos.filter((todo) => {
      switch (this.state.nowShowing) {
        case 'ACTIVE':
          return !todo.completed;
        case 'COMPLETED':
          return todo.completed;
        default:
          return true;
      }
    });
  }

  onAddTodo(title) {
    this.setState({
      todos: this.state.todos.concat({
        id: uuid.v4(),
        title: title,
        completed: false
      })
    });
  }

  onDestroy(todoToDestroy) {
    this.setState({
      todos: this.state.todos.filter(todo => todo !== todoToDestroy )
    });
  }

  onToggle(todoToToggle) {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo !== todoToToggle ? todo : extend({}, todo, { completed: !todoToToggle.completed })
      )
    });
  }


  onClearCompleted() {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed )
    });
  }

  onShow(nowShowing) {
    this.setState({ nowShowing: nowShowing });
  }

}

export default alt.createStore(TodoStore, 'TodoStore');
