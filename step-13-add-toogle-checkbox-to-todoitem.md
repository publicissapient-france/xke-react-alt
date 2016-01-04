
# TodoMVC - React, Alt, ES6 revisited


## Step 13 - Add toogle checkbox to `TodoItem`

### 1/ Add toogle checkbox

First, add a toogle checkbox in `render` function of `TodoItem`:

``` 
render() {
  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={this.props.todo.completed}
        />
        ...
      </div>
    </li>
  );
}
```


### 2/ Add `toggle` action to `TodoActions`

```
this.generateActions(
  ...
  'toggle'
);
```


### 3/ Add `toggle` handler to `TodoStore`

```
onToggle(todoToToggle) {
 this.setState({
   todos: this.state.todos.map(todo =>
     todo !== todoToToggle ? todo : extend({}, todo, { completed: !todoToToggle.completed }) 
   )
 });
}
```


### 4/ Add `onToggle` event handler

First, we add the `toggle` event handler in `TodoApp` component:

```
toggle() {
  TodoActions.toggle(this.props.todo);
}
```

### 5/ Add `onChange` event handler on `checkbox`

We can now associate `onChange` event of checkbox with `destroy` handler of `TodoItem`:

``` 
render() {
  return (
    <li>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={this.toggle.bind(this)}
        />
        ...
      </div>
    </li>
  );
}
``` 
