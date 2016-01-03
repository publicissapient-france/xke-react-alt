
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

``` 
import TodoStore from '../stores/TodoStore'

...
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

edit(todo) {
  TodoActions.edit(todo.id);
}

save(todoToSave, text) {
  TodoActions.save({
    todoToSave: todoToSave,
    text: text
  });

  TodoActions.edit(null);
}

cancel() {
  TodoActions.edit(null);
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
render() {
  return (
    <div className="todoapp-component">
      <section className="todoapp">
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
      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>

        <p>Created by <a href="http://github.com/wishpishh">Hannes Johansson</a> based on React example by <a
          href="http://github.com/petehunt/">petehunt</a></p>

        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}
```  

# Topics & exercices:

1. Topic: Give some infos about ES5 vs ES6 React code
2. Topic: Give a word about mixins
3. Topic: Explain JSX, structure and lifecycle of components
4. Topic: TodoMVC has reusable resource set
5. Topic: Role of AltContainer : Connect Stores & Actions to Component lifecycle
6. Topic: Explain render function, especially, variable association
7. Exercise: Implements Action calls in functions

