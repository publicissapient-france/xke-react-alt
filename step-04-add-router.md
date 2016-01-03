
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

####Update index file

Replace :

```
<div id="app">APPLICATION CONTENT</div>
```

By:

```
<section id="app" class="todoapp"></section>
<footer class="info">
  <p>Double-click to edit a todo</p>
  <p>Created by <a href="http://github.com/wishpishh">Alexis Kinsella</a> based on React example by <a href="https://github.com/wishpishh/">wishpishh</a></p>
  <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
```

# Topics:

1. What is a router
2. Different kind of routers
3. Create Router
