
# TodoMVC - React, Alt, ES6 revisited


## Step 5 - Add Actions 

####Scafold
``` 
yo react-webpack-alt:action Todo
```

####Create actions

First, you need to add an empty constructor: 

```
constructor() {

}
```

Add some actions in constructor of TodoActions:

```
  this.generateActions(
    'addTodo',
    'toggleAll',
    'toggle',
    'destroy',
    'clearCompleted',
    'show'
  );
}
```


# Topics:

1. What is an `Action` (`Action Creator`s & `Constant`s)
2. Different ways to create an action (return value, use of dispatch, special cases: undefined & Promises)
3. Defer an action to avoid a dispatch in dispatch
