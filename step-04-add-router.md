
# TodoMVC - React, Alt, ES6 revisited


## Step 4 - Add of a router

The router used is `React-Router`

####Install
``` 
npm install -S history
npm install -S react-router
``` 

####Configuration

In run.js - Replace this:

```
// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
```

By:

```
import { Router, Route, Link } from 'react-router';

import TodoApp from './TodoApp';

import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

let routes = (
  <Router history={history}>
    <Route path='/' component={ TodoApp } />
    <Route path='active' component={ TodoApp } />
    <Route path='completed' component={ TodoApp } />
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));
```


# Topics:

1. What is a router
2. Different kind of routers
3. Create Router
