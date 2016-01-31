import React from 'react';

import pluralize from 'pluralize';

import TodoActions from '../actions/TodoActions';

import { Link } from 'react-router';

import classNames from 'classnames';

class TodoFooter extends React.Component {

  renderCount() {

    var wording = pluralize('item', this.props.count);

    return (
      <span className="todo-count">
        <strong>{this.props.count}</strong> {wording} left
      </span>
    );
  }

  clearCompleted() {
    TodoActions.clearCompleted();
  }

  renderCompleteButton() {
    if (!this.props.completedCount) {
      return undefined;
    }

    return (
      <button className="clear-completed" onClick={this.clearCompleted}>
        Clear completed
      </button>
    );
  }

  renderFilter() {

    var nowShowing = this.props.nowShowing;

    return (
      <ul className="filters">
        <li>
          <Link to="/" className={classNames({selected: nowShowing === 'ALL' })}>
            All
          </Link>
        </li>
        {' '}
        <li>
          <Link to="/active" className={classNames({selected: nowShowing === 'ACTIVE' })}>
            Active
          </Link>
        </li>
        {' '}
        <li>
          <Link to="/completed" className={classNames({selected: nowShowing === 'COMPLETED'})}>
            Completed
          </Link>
        </li>
      </ul>
    );

  }

  render() {
    return (
      <footer className="footer">
        {this.renderCount()}
        {this.renderFilter()}
        {this.renderCompleteButton()}
      </footer>
    );
  }

}

export default TodoFooter;
