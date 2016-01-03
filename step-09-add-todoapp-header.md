
# TodoMVC - React, Alt, ES6 revisited


## Step 09 - Add TodoApp Header

Let add a `renderHeader` function to `TodoApp` component:

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
);
``` 

and update return of `render` function:

``` 
return (
  <div className="index">
    {this.renderHeader()}
    <section className="main">
      <ul className="todo-list">
        {this.renderItems()}
      </ul>
    </section>
  </div>
);
``` 
