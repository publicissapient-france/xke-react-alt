import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';

// Render the main component into the dom

import { Router, Route, Link } from 'react-router';

import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

const router = (
  <Router history={history}>
    <Route path='/' component={TodoApp} />
    <Route path='active' component={TodoApp} />
    <Route path='completed' component={TodoApp} />
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));
