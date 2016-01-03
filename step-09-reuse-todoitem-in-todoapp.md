
# TodoMVC - React, Alt, ES6 revisited


## Step 9 - Reuse TodoItem in TodoApp

In a new function `renderItems` of `TodoApp.jsx`, you can now add code to map each entry of todo list into `TodoItem`s :

``` 
renderItems() {
  if (!this.props.todos) {
    return undefined;
  }
  
  return this.props.todos.map(function (todo) {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={this.toggle.bind(this, todo)}
        onDestroy={this.destroy.bind(this, todo)}
        onEdit={this.edit.bind(this, todo)}
        editing={this.state.editing === todo.id}
        onSave={this.save.bind(this, todo)}
        onCancel={this.cancel}
      />
    );
  }, this);
}
```

Then, add call into `render` function:

```
{this.renderItems()}
```

Topics:

1. How to map data to components
