
# TodoMVC - React, Alt, ES6 revisited


## Step 13 - Add TodoApp footer

We want to add a footer to the `TodoItem`list.

```
var completedCount = this.props.todos.length - activeTodoCount;

if (activeTodoCount || completedCount) {
  footer =
      <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={this.props.nowShowing}
          onClearCompleted={this.clearCompleted}
          />;
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



// Topics & exercices:
//
// 1 - Topic: Explain usage of `Link`
// 2 - Exercise: Install `pluralize` dependency
// 3 - Exercise: Import `pluralize` dependency
// 4 - Exercise: Implement a button with classname `clear-completed` and associate `onClick` event with `onClearCompleted` and label: `Clear completed`
// 5 - Exercice: Implement a filter list (ul tag) with classname `filters` of 3 elements of type Link from react-router mapped to paths: ``, `active`, `completed` and a classname (using classNames module) to activate `selected` class based on nowShowing variable matching route constant
