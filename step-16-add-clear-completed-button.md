
# TodoMVC - React, Alt, ES6 revisited


## Step 16 - Add Clear completed button

### 1/ Transfer `completedCount` property to `TodoFooter`

We need to update the `renderFooter` function:

```
renderFooter() {
  var activeTodoCount = this.activeTodoCount();
  var completedCount = this.props.todos.length - activeTodoCount;

  if (!activeTodoCount && !completedCount) {
    return undefined;
  }

  return (
    <TodoFooter
      ...
      completedCount={completedCount}
    />
  );
}
```


### 2/ Add clear button

First, add a `renderClearButton` function:

``` 
renderClearButton() {

  if (this.props.completedCount <= 0) {
    return undefined;
  }

  return (
    <button
        className="clear-completed">
      Clear completed
    </button>
  );

}
``` 

Then, we call `renderClearButton` function:

```
render() {
  return (
    <footer className="footer">
      ...
      {this.renderClearButton()}
    </footer>
  );
}
```


### 3/ Add `clearCompleted` action to `TodoActions`

```
  this.generateActions(
    ...
    'clearCompleted'
  );
}
```


### 4/ Add `onClearCompleted` action to `TodoStore`

```
  onClearCompleted() {
    this.setState({
      todos: this.state.todos.filter( todo => !todo.completed )
    });
  }
}
```


### 5/ Add clear button event handler

First, we add the event handler in `TodoApp` component:

```
clearCompleted() {
  TodoActions.clearCompleted();
}
```

Then, we declare `clearCompleted` handler to `TodoFooter` tag in `TodoApp` component:

```
renderFooter() {
  ...
  
  return (
    <TodoFooter
      ...
      onClearCompleted={this.clearCompleted}
    />
  );
}
```


### 6/ Add `onClick` event handler on `button

We can now associate `onClick` event of button with `onClearCompleted` property of `TodoFooter`:


``` 
renderClearButton() {

  ...
  return (
    <button
      className="clear-completed"
      onClick={this.props.onClearCompleted}>
      Clear completed
    </button>
  );

}
``` 


### 7/ Add className to `TodoItem`


Now we need to replace content of render function, but first lets install a needed dependency:

```
npm i -S classnames
```

Import it into TodoItem.jsx:

``` 
import classNames from 'classnames';
``` 

And then, edit render function:

``` 
render() {
  return (
    <li className={classNames({ completed: this.props.todo.completed })}>
      ...
    </li>
  );
}
```

