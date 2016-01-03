
# TodoMVC - React, Alt, ES6 revisited


## Step 7 - Add TodoApp Component

First, we need to make it working.

#####Styles
We will use official TodoMVC styles, therefore, we will install needed packages.

######Dependencies
```
npm i -S todomvc-common
npm i -S todomvc-app-css
```

######Code
``` 
require('todomvc-common/base.css');
require('todomvc-app-css/index.css');
```

######Renaming of App.scss

You need to rename `styles/App.scss` to `styles/TodoApp.scss` if not done.

#####Connect with TodoStore

First import `alt-container`:

```
npm i -S alt-container
```

Then, import `TodoStore` & `AltContainer` modules in `TodoApp.jsx`:

``` 
import TodoStore from '../stores/TodoStore'
import AltContainer from 'alt/AltContainer';
```
Then, declare a new `TodoAppContainer` component & export this component:

```
class TodoAppContainer extends React.Component {

  render() {
    return (
        <AltContainer store={TodoStore}>
          <TodoApp {...this.props} />
        </AltContainer>
    );
  }

}

export default TodoAppContainer;
```

#####Component handlers

##### Import of TodoActions

``` 
import TodoActions from '../actions/TodoActions';
``` 

#####Handlers

```
toggleAll(event) {
  var checked = event.target.checked;
  TodoActions.toggleAll(checked);
}

toggle(todo) {
  TodoActions.toggle(todo);
}

destroy(todo) {
  TodoActions.destroy(todo);
}

save(todoToSave, text) {
  TodoActions.save({
    todoToSave: todoToSave,
    text: text
  });
}

clearCompleted() {
  TodoActions.clearCompleted();
}
```

#####Render

You can replace scafolded code: 
```
render() {
  return (
    <div className="index">
      <img src={yeomanImage} alt="Yeoman Generator" />
      <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
    </div>
  );
}
```

with this one: 

``` 
renderHeader() {
  return (
    <header className="header">
      <h1>todos</h1>

      <input
        ref="newField"
        className="new-todo"
        placeholder="What needs to be done?"
        value={this.state.newTodo}
        onKeyDown={this.handleNewTodoKeyDown}
        onChange={this.handleChange}
        autoFocus={true}
      />
    </header>
  );
}

render() {
  return (
    <AltContainer store={TodoStore}>
      <div className="index">
        {this.renderHeader()}
      </div>
    </AltContainer>
  );
}
```  

##### Initialize component in constructor

```
constructor(props, context) {
  super(props, context);

  this.state = { newTodo: '' };
}
```

##### Add & Bind event handlers

Add event handlers:

```
handleChange(event) {

}

handleNewTodoKeyDown(event) {

}
```

Then add event handler binding into constructor:

```
this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this);
this.handleChange = this.handleChange.bind(this);
```

# Topics:

1. Give some infos about ES5 vs ES6 React code
2. Give a word about mixins
3. Explain JSX, structure and lifecycle of components
4. TodoMVC has reusable resource set
5. Role of AltContainer : Connect Stores & Actions to Component lifecycle
6. Explain render function, especially, variable association

