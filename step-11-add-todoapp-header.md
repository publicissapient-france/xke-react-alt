
# TodoMVC - React, Alt, ES6 revisited


## Step 12 - Add TodoApp Header

Let add a header to our TodoItem list:

``` 
header = (
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
``` 

and update return of `render` function:

``` 
return (
  <div className="index">
    {header}
    {main}
  </div>
);
``` 
