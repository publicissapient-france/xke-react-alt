
# TodoMVC - React, Alt, ES6 revisited


## Step 07 - Add TodoApp Component

First, we need to make it working.

### 1/ Connect with TodoStore

First import `alt-container`:

```
npm i -S alt-container
```

Then, import `TodoStore` & `AltContainer` modules in `TodoApp.jsx`:

``` 
import TodoStore from '../stores/TodoStore'
import AltContainer from 'alt-container';
```
Then, declare a new `TodoAppContainer` component & export this component:

```
class TodoAppContainer extends React.Component {

  render() {
    return (
        <AltContainer store={TodoStore}>
          <TodoApp {...this.props} />
        </AltContainer>
    );
  }

}

export default TodoAppContainer;
```

### 2/ Import of TodoActions

``` 
import TodoActions from '../actions/TodoActions';
``` 


### 3/ Implement `render`function

You can replace scafolded code: 
```
render() {
  return (
    <div className="index">
      <img src={yeomanImage} alt="Yeoman Generator" />
      <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
    </div>
  );
}
```

with this one: 

``` 
render() {
  return (
    <div className="index"></div>
  );
}
```  
