
# TodoMVC - React, Alt, ES6 revisited


## Step 12 - Add TodoApp footer

We want to add a footer to the `TodoItem`list in `TodoApp.jsx` file.

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

First, create `TodoFooter`:
```
yo react-webpack-alt:component TodoFooter
```

Then, rename `TodoFooterComponent` to `TodoFooter`.

Next, change file content:

``` 
import React, {Component} from 'react';

class TodoFooter extends Component {

    render() {

    }

}

export default TodoFooter;
``` 


####Add Render count function

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

First, import dependency:

``` 
npm i -S pluralize
``` 

Then, import in footer:

``` 
import pluralize from 'pluralize';
``` 

Next, implement count :

``` 
renderCount() {

  var activeTodoWord = pluralize('item', this.props.count);

  return (
    <span className="todo-count">
      <strong>{this.props.count}</strong> {activeTodoWord} left
    </span>
  );

}
```

Next, call `renderCount` function:

```
  render() {
    return (
      <footer className="footer">
        {this.renderCount()}
      </footer>
    );
  }
```

#####Add filter

First, Add `classNames` import:

``` 
import classNames from 'classnames';
import { Link } from 'react-router';
``` 

Then, add `renderFilter` function:

```

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
```

Next, call `renderFilter` function:

```
  render() {
    return (
      <footer className="footer">
        {this.renderCount()}
        {this.renderFilter()}
      </footer>
    );
  }
```


#####Add clear button

First, add a `renderClearButton` function:

``` 
renderClearButton() {

  if (this.props.completedCount <= 0) {
    return undefined;
  }

  return (
    <button
      className="clear-completed"
      onClick={this.props.onClearCompleted}>
      Clear completed
    </button>
  );

}
``` 

Then, call `renderClearButton` function:

```
  render() {
    return (
      <footer className="footer">
        {this.renderCount()}
        {this.renderFilter()}
        {this.renderClearButton()}
      </footer>
    );
  }
```

# Topics & exercices:

1. Explain usage of `Link`

