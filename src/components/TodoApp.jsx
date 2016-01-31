require('normalize.css');
require('styles/TodoApp.scss');

require('todomvc-common/base.css');
require('todomvc-app-css/index.css');

import React from 'react';
import AltContainer from 'alt-container';

import TodoStore from '../stores/TodoStore';

import TodoHeader from './TodoHeader.jsx';
import TodoFooter from './TodoFooter.jsx';

import TodoItem from './TodoItem.jsx';
import TodoActions from '../actions/TodoActions';

class TodoApp extends React.Component {

  activeTodoCount() {
    return this.props.todos.reduce((accum, todo) => {
      return todo.completed ? accum : accum + 1;
    }, 0);
  }

  componentDidMount() {
    this.unlistenHistory = this.props.history.listen( (err, state) => {
      var filter = state.location.pathname.slice(1).toUpperCase() || 'ALL';
      TodoActions.show(filter);
    });
  }

  componentWillUnmount() {
    this.props.history.unlisten(this.unlistenHistory);
  }

  renderFooter() {
    var activeTodoCount = this.activeTodoCount();
    var completedCount = this.props.todos.length - activeTodoCount;

    if (!activeTodoCount && !completedCount) {
      return undefined;
    }

    return (
      <TodoFooter
        count={activeTodoCount}
        completedCount={completedCount}
        nowShowing={this.props.nowShowing}
      />
    );
  }

  renderItems() {

    var shownTodos = TodoStore.shownTodos();

    if (!this.props.todos) {
      return undefined;
    }

    return shownTodos.map(function (todo) {
      return (
        <TodoItem key={todo.id} todo={todo} />
      );
    }, this);
  }

  render() {
    return (
      <div className="index">
        <TodoHeader />

        <section className="main">
          <ul className="todo-list">
            {this.renderItems()}
          </ul>
        </section>

        {this.renderFooter()}
      </div>
    );
  }

}

class TodoAppContainer extends React.Component {

  render() {
    return (
      <AltContainer store={TodoStore}>
        <TodoApp {...this.props} />
      </AltContainer>
    )
  }

}

export default TodoAppContainer;
