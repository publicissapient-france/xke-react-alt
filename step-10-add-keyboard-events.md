
# TodoMVC - React, Alt, ES6 revisited


## Step 10 - Add Keyboard events handler

We also need to handle keyboard events with this code snippet on `Enter`key hit:

``` 
handleNewTodoKeyDown(event) {
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

#####Constants
and add keyboard key relative constants:

``` 
var ENTER_KEY = 13;
``` 

#####Handlers binding

We need to bind handler functions to this (`TodoApp`), but also initialize state of component, with following code:

```
<...>
``` 


// Topics & exercices:
//
// 1 - Exercise: Create constructor
// 1 - Exercise: Bind functions
// 2 - Exercise: initialize state
