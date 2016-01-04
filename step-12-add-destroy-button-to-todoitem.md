
# TodoMVC - React, Alt, ES6 revisited


## Step 12 - Add Destroy button to `TodoItem

### 1/ Add detroy button

First, add a detroy button in `render` function of `TodoItem`:

``` 
render() {
  return (
    <li>
      <div className="view">
        ...
        <button className="destroy" />
      </div>
    </li>
  );
}
```


### 2/ Add `destroy` action to `TodoActions`

```
  this.generateActions(
    ...
    'destroy'
  );
```


### 3/ Add `onDestroy` handler to `TodoStore`

```
onDestroy(todoToDestroy) {
  this.setState({
    todos: this.state.todos.filter( todo => todo !== todoToDestroy )
  });
}
```


### 4/ Add `destroy` event handler

First, we import `TodoActions`:

```
import TodoActions from '../actions/TodoActions';
```

Then, we add `destroy` the event handler in `TodoApp` component:

```
destroy(todo) {
  TodoActions.destroy(this.props.todo);
}
```

### 5/ Add onClick` event handler on `button`

We can now associate `onClick` event of button with `destroy` property of `TodoItem`:

``` 
render() {
  return (
    <li>
      <div className="view">
        ...
        <button className="destroy" onClick={this.destroy.bind(this)}/>
      </div>
    </li>
  );
}
``` 
