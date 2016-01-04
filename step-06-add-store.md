
# TodoMVC - React, Alt, ES6 revisited


## Step 06 - Add Store

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

// Store handlers
```


#### State
You need to configure a state in constructor of your store. Here, we need to setup an array that represents todos.

```
this.state = {
  todos: [],
  nowShowing: undefined
};
```
