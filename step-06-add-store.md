
# TodoMVC - React, Alt, ES6 revisited


## Step 6 - Add Store

####Scafold
``` 
yo react-webpack-alt:store Todo 
```

####Bind Store to Actions

First, add TodoActions import: 

```
import TodoActions from '../actions/TodoActions';
```

Then, add constructor in TodoStore:

```
constructor() {
    this.bindActions(TodoActions);
}
```


#### State
You need to configure a state in constructor of your store. Here, we need to setup an array that represents todos.

```
this.state = {
  todos: []
};
```

Finally, we add functions to handle dispatched action events.

First, you need to install `uuid` & `object-assign` dependencies: 

``` 
npm i -S uuid;
npm i -S object-assign;
``` 

and then, import it:

``` 
import uuid from 'uuid';
import extend from 'object-assign';

``` 

Then, we add handlers:

```
onAddTodo(title) {
  this.setState({
    todos: this.state.todos.concat({
      id: uuid.v4(),
      title: title,
      completed: false
    })
  });
}

onToggleAll(checked) {
  var updatedTodos = this.state.todos.map(todo => 
   extend({}, todo, {completed: checked})
);
  this.setState({todos: updatedTodos});
};

onToggle(todoToToggle) {
  var updatedTodos = this.state.todos.map(todo =>
      todo !== todoToToggle ?
        todo : extend({}, todo, {completed: !todo.completed})
  );
  this.setState({todos: updatedTodos});
}

onDestroy(todoToDestroy) {
  var updatedTodos = this.state.todos.filter(todo => todo !== todoToDestroy);
  this.setState({todos: updatedTodos});
}

onSave(command) {
  var updatedTodos = this.state.todos.map(todo =>
      todo !== command.todoToSave ?
        todo : extend({}, command.todoToSave, {title: command.text})
  );
  this.setState({todos: updatedTodos});
}

onClearCompleted() {
  <...>
}

onEdit(id) {
  <...>
}

onShow(nowShowing) {
  <...>
}
```



// Topics & exercices:
//
// 1 - Topic: What is a `Store`
// 2 - Topic: Async with `Store`s:  Where to put async calls
// 3 - Topic: Use `Source`s with `Alt`
// 4 - Topic: Store functions: `listen()`, `unlisten()`, `emitChange()`
// 5 - Exercise: Implement the 3 functions: `onClearCompleted()`, `onEdit()`, `onShow()`

