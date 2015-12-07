
# TodoMVC - React, Alt, ES6 revisited


## Step 9 - Reuse TodoItem in TodoApp

In `render` function of TodoApp,  you can now add code to map each entry of todo list into `TodoItem`s :

``` 
  render() {
    var todoItems = null;

    if (this.props.todos) {
      todoItems = this.props.todos.map(function (todo) {
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

    return (
      <div className="index">
        <...>
      </div>
    );
  }
``` 


// Topics & exercices:
//
// 1 - Topic: How to map data to components
// 2 - Exercise: How to include children in render function