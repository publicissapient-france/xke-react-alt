
# TodoMVC - React, Alt, ES6 revisited


## Step 11 - Reuse TodoItem in TodoApp

In a new function `renderItems` of `TodoApp.jsx`, you can now add code to map each entry of todo list into `TodoItem`s :

``` 
renderItems() {
  if (!this.props.todos) {
    return undefined;
  }
  
  return this.props.todos.map(function (todo) {
    return (
      <TodoItem key={todo.id} todo={todo} />
    );
  }, this);
}
```

Then, add call into `render` function:

```
<section className="main">
  <ul className="todo-list">
    {this.renderItems()}
  </ul>
</section>
```
