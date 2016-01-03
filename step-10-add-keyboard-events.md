
# TodoMVC - React, Alt, ES6 revisited


## Step 10 - Add Keyboard events handler

We also need to handle keyboard events with this code snippet on `Enter`key hit:

```
handleNewTodoKeyDown(event) {

  const ENTER_KEY = 13;

  if (event.keyCode !== ENTER_KEY) {
    return;
  }

  event.preventDefault();

  var val = this.state.newTodo.trim();

  if (val) {
    this.setState({newTodo: ''});

    TodoActions.addTodo(val);
  }
}
``` 

and this code snippet to handle other key hit:

``` 
handleChange(event) {
  this.setState({newTodo: event.target.value});
}
```


