import React from 'react';

import TodoActions from '../actions/TodoActions';

class TodoHeader extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = { newTodo: '' };
  }

  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  handleNewTodoKeyDown(event) {

    const ENTER_KEY = 13;

    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.state.newTodo.trim();

    if (val) {
      this.setState({newTodo: ''});

      TodoActions.addTodo(val);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>

        <input
          ref="newField"
          className="new-todo"
          placeholder="What do you need ?"
          autoFocus={true}
          value={this.state.newTodo}
          onChange={::this.handleChange}
          onKeyDown={::this.handleNewTodoKeyDown}
        />
      </header>
    );
  }

}

export default TodoHeader;
