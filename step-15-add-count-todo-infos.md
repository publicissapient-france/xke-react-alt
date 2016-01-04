
# TodoMVC - React, Alt, ES6 revisited


## Step 15 - Add Count Todo Infos

### Transfer `count` property to `TodoFooter`

First, we add `activeTodoCount` function:

```
activeTodoCount() {
  return this.props.todos.reduce((accum, todo) => {
    return todo.completed ? accum : accum + 1;
  }, 0);
}
```

Then, we need to update the `renderFooter` function:

```
renderFooter() {
  var activeTodoCount = this.activeTodoCount();

  if (!activeTodoCount) {
    return undefined;
  }

  return (
    <TodoFooter
      count={activeTodoCount}
    />
  );
}
```


### Implement `render` function

Add `pluralize`:

First, import dependency:

``` 
npm i -S pluralize
``` 

Then, import `pluralize` in footer:

``` 
import pluralize from 'pluralize';
``` 

Then, implement `renderCount` function:

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