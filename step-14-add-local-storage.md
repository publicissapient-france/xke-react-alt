
# TodoMVC - React, Alt, ES6 revisited


## Step 14 - Add of local storage

To add local storage support, you need to add `store` & `load` functions:

``` 
  store(key, value) {
    localStorage.setItem('todomvc.' + key, JSON.stringify(value));
  }

  load(key, defaultValue) {
    return JSON.parse(localStorage.getItem('todomvc.' + key)) || defaultValue;
  }
``` 

We are using the `todomvc` namespace to store data. Now we have to appropiate function calls to each function of `TodoStore`.


To store data, you can add this line of code in each function modifying data:
``` 
this.store('todos', this.state.todos);
``` 

Also, we can init `TodoStore` by reading the local storage as following code in constructor:

```
this.state = {
  todos: this.load('todos', []),
  nowShowing: this.load('nowShowing', []),
  editing: this.load('editing', []),
};
``` 
