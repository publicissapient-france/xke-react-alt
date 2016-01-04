
# TodoMVC - React, Alt, ES6 revisited


## Step 14 - Add TodoApp footer


### 1/ Add `TodoFooter.jsx` file

First, create `TodoFooter`:
```
yo react-webpack-alt:component TodoFooter
```

Then, rename `TodoFooterComponent` to `TodoFooter`.

Next, change file content:

``` 
import React, {Component} from 'react';

class TodoFooter extends Component {

    render() {
      <footer className="footer">
      </footer>
    }

}

export default TodoFooter;
``` 


### 2/ Add `TodoFooter` to `TodoApp.jsx`

We want to add a footer to the `TodoItem` list in `TodoApp.jsx` file.

Then, we need to create a `renderFooter` function:
```
renderFooter() {

  return (
    <TodoFooter />
  );
}
```
