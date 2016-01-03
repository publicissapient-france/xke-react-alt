
# TodoMVC - React, Alt, ES6 revisited


## Step 8 - Add TodoItem Component

Now, we need to add a new component corresponding to a todo item, we will call it `TodoItem.jsx`

``` 
yo react-webpack-alt:component TodoItem
```

We need to rename generated file TodoItemComponent to TodoItem, and also class name inside file.


#####Render function
Now we need to replace content of render function, but first lets install a needed dependency:

```
npm i -S classnames
```

import it into TodoItem.jsx:

``` 
import classNames from 'classnames';
``` 

and then, edit render function:

``` 
render() {
  return (
    <li className={classNames({ completed: this.props.todo.completed })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={this.props.onToggle}
        />
        <label>
          {this.props.todo.title}
        </label>
        <button className="destroy" onClick={this.props.onDestroy}/>
      </div>
    </li>
  );
}
```

// Topics & exercices:
//
// 1 - Topic: Explain property passing from components to subcomponents
// 2 - Exercise: Implement code to build classname
