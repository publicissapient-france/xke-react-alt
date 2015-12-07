
# TodoMVC - React, Alt, ES6 revisited


## Step 5 - Add Actions 

####Scafold
``` 
yo react-webpack-alt:action Todo
```

####Create actions
Add some actions in constructor of TodoActions:

```
  this.generateActions(
    'toggleAll',
    'toggle',
    'destroy',
    'save',
    'clearCompleted',
    'edit',
    'show'
  );
}
```


// Topics & exercices:
//
// 1 - Topic: What is an `Action` (`Action Creator`s & `Constant`s)
// 2 - Topic: Different ways to create an action (return value, use of dispatch, special cases: undefined & Promises)
// 3 - Topic: Defer an action to avoid a dispatch in dispatch
