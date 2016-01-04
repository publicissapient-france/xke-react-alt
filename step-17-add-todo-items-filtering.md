
# TodoMVC - React, Alt, ES6 revisited


## Step 17 - Add todo items filtering


### 1/ Add `show` action`in `TodoActions`

Add `show` action in constructor:

```
  this.generateActions(
    ... ,
    'show'
  );
}
```


### 2/ Add `show` handler in `TodoStore`

```
onShow(nowShowing) {
  this.setState({nowShowing: nowShowing});
}
```


### 3/ Wire 

We need to wire a `nowShowing` property into `renderFooter` function of `TodoApp` component:
```
renderFooter() {
  ...
  
  return (
    <TodoFooter
      ...
      nowShowing={this.props.nowShowing}
    />
  );
}
```


### 4/ Filter todos to show in `TodoStore`

We need to add a `TodoStore` static function that returns expected todos to show: 

```
  static shownTodos() {
    return this.state.todos.filter((todo) => {
      switch (this.state.nowShowing) {
        case 'ACTIVE':
          return !todo.completed;
        case 'COMPLETED':
          return todo.completed;
        default:
          return true;
      }
    });
  }
```

And then, use this new function in `TodoApp.jsx` component:

```
  renderItems() {
    return TodoStore.shownTodos().map(function (todo) {
      ...
    }, this);
  }
```


### 5/ Add filter to `TodoFooter`

First, Add `classNames` import:

``` 
import classNames from 'classnames';
import { Link } from 'react-router';
``` 

Then, add `renderFilter` function:

```
renderFilter() {

  var nowShowing = this.props.nowShowing;

  return (
    <ul className="filters">
      <li>
        <Link to="/" className={classNames({selected: nowShowing === 'ALL' })}>
          All
        </Link>
      </li>
      {' '}
      <li>
        <Link to="/active" className={classNames({selected: nowShowing === 'ACTIVE' })}>
          Active
        </Link>
      </li>
      {' '}
      <li>
        <Link to="/completed" className={classNames({selected: nowShowing === 'COMPLETED'})}>
          Completed
        </Link>
      </li>
    </ul>
  );

}
```

Next, call `renderFilter` function:

```
render() {
  return (
   <footer className="footer">
      ...
      {this.renderClearButton()}
    </footer>
  );
}
```
