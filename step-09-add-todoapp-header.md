
# TodoMVC - React, Alt, ES6 revisited


## Step 09 - Add TodoApp Header


### 1/ Create a `TodoHeader` component:

First, create `TodoHeader`:

```
yo react-webpack-alt:component TodoHeader
```

Then, rename `TodoHeaderComponent` to `TodoHeader`.

Next, we implement render function:

```
render() {
  return (
    <header className="header">
      <h1>todos</h1>
    
      <input
        ref="newField"
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
      />
    </header>
  );
}
```


### 2/ Add `TodoHeader` to the `TodoApp`

Let import our new component:

```
import TodoHeader from '../components/TodoHeader.jsx';
``` 

and, update the `render` function of `TodoApp.jsx` component:

``` 
return (
  <div className="index">
    <TodoHeader />
  </div>
);
``` 


### 3/ Initialize state of `TodoHeader` component

First, declare state of component in constructor

```
constructor(props, context) {
  super(props, context);

  this.state = { newTodo: '' };
}
```

Then, update `renderHeader` function into `TodoApp` component:


``` 
renderHeader() {
  return (
    <header className="header">
      ...
      
      <input
        ...
        value={this.state.newTodo}
      />
    </header>
  );
}
``` 


### 4/ Add `addTodo` action to `TodoActions`

```
  this.generateActions(
    ...
    'addTodo'
  );
```


### 5/ Add `onAddTodo` handler to `TodoStore`


We add functions in store to handle dispatched action events.

First, we need to install `uuid` & `object-assign` dependencies: 

``` 
npm i -S uuid;
npm i -S object-assign;
``` 

Then, import it:

``` 
import uuid from 'uuid';
import extend from 'object-assign';

``` 

And then, add `onAddTodo` handler:

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
```



### 6/ Wire events with handlers


First, we create a function that handle every key hit event:

``` 
handleChange(event) {
  this.setState({newTodo: event.target.value});
}
```

Next, we need to handle keyboard events. Especially `Enter` key hit event. Therefore, we  also create a `handleNewTodoKeyDown` function:

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

Then, we update the `render` function into `TodoHeader` component to wire events & handlers:

``` 
renderHeader() {
  return (
    <header className="header">
      ...
      
      <input
        ...
        onKeyDown={this.handleNewTodoKeyDown.bind(this)}
        onChange={this.handleChange.bind(this)}
      />
    </header>
  );
}
``` 
