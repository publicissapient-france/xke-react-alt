
# TodoMVC - React, Alt, ES6 revisited


## Step 10 - Add TodoItem Component

### 1/ Generate `TodoItem` component

Now, we need to add a new component corresponding to a todo item, we will call it `TodoItem.jsx`

``` 
yo react-webpack-alt:component TodoItem
```

We need to rename generated file TodoItemComponent to TodoItem, and also class name inside file.


### 1/ Implement `render` function

Now we need to replace content of render function:

``` 
render() {
  return (
    <li>
      <div className="view">
        <label>
          {this.props.todo.title}
        </label>
      </div>
    </li>
  );
}
```
