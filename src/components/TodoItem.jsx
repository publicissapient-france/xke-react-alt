import React from 'react';

import TodoActions from '../actions/TodoActions';

import classNames from 'classnames';

class TodoItem extends React.Component {

  toggle() {
    TodoActions.toggle(this.props.todo);
  }

  destroy() {
    TodoActions.destroy(this.props.todo)
  }

  render() {
    return (
     <li className={classNames({
       completed: this.props.todo.completed
     })}>
       <div className="view">
         <input
           className="toggle"
           type="checkbox"
           checked={this.props.todo.completed}
           onChange={::this.toggle}
         />
         <label>
           {this.props.todo.title}
         </label>
         <button className="destroy" onClick={::this.destroy} />
       </div>
     </li>
    );
  }

}

export default TodoItem;
