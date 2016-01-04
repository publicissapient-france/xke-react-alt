
# TodoMVC - React, Alt, ES6 revisited


## Step 18 - Add of a router

The router used is `React-Router`

### Install
``` 
npm install -S history
npm install -S react-router
``` 

### 1/ Configuration & Declaration

In `run.js`, replace following code:

```
// Render the TodoApp component into the DOM
ReactDOM.render(<TodoApp />, document.getElementById('app'));
```

By this one:

```
import { Router, Route, Link } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

let routes = (
  <Router history={history}>
    <Route path='' component={ TodoApp } />
    <Route path='active' component={ TodoApp } />
    <Route path='completed' component={ TodoApp } />
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
```


### 2/ Listen history events

We need to configure an history listener in `TodoApp` component and `nowShowing` will be updated with correct value:

``` 
componentDidMount() {
    this.unlistenHistory = this.props.history.listen( (err, state) => {
        var filter = state.location.pathname.slice(1).toUpperCase() || 'ALL';
        TodoActions.show(filter);
    });
}

componentWillUnmount() {
    history.unlisten(this.unlistenHistory);
}
``` 
