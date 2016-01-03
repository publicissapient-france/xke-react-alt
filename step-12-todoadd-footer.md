
# TodoMVC - React, Alt, ES6 revisited


## Step 12 - Add TodoApp footer

We want to add a footer to the `TodoItem`list.

First, we add `activeTodoCount` function:

```
  activeTodoCount() {
    return this.props.todos.reduce((accum, todo) => {
      return todo.completed ? accum : accum + 1;
    }, 0);
  }
```

Then, we need to create a `renderFooter` function:
```
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
        onClearCompleted={this.clearCompleted}
      />
    );
  }
```

###Add TodoFooter.jsx file

``` 
import React, {Component} from 'react';

class TodoFooter extends Component {

    render() {

    }

}

export default TodoFooter;
``` 


####Add Render Method

```
render() {
  return (
    <footer className="footer">
      {count}
      {filter}
      {clearButton}
   </footer>
  );
}
``` 

#####Add count

Add `pluralize`:

First import dependency:

``` 
<...>
``` 

``` 
<...>
``` 

Then,  implement count :

``` 
var activeTodoWord = pluralize('item', this.props.count); 
  
var count = (
  <span className="todo-count">
    <strong>{this.props.count}</strong> {activeTodoWord} left
  </span>
);
```

#####Add filter

Add `classNames` import:

``` 
import classNames from 'classnames';
import { Link } from 'react-router';
``` 

```
var nowShowing = this.props.nowShowing;
var filters = (
    <...>
);
``` 

#####Add clear button

``` 
var clearButton = null;
if (this.props.completedCount > 0) {
    clearButton = (
        <...>
    );
}
``` 

# Topics & exercices:

1. Explain usage of `Link`

