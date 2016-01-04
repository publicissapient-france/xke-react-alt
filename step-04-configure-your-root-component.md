
# TodoMVC - React, Alt, ES6 revisited


## Step 04 - Add of a router

### 1/ Configure root component to render

In run.js - Replace this:

```
// Render the TodoApp component into the DOM
ReactDOM.render(<App />, document.getElementById('app'));
```

By:

```
import TodoApp from './TodoApp';

ReactDOM.render(<TodoApp />, document.getElementById('app'));
```

### 2/ Add a footer to your `index.html`

```
<footer class="info">
  <p>Double-click to edit a todo</p>
  <p>Created by <a href="http://github.com/wishpishh">Alexis Kinsella</a> based on React example by <a href="https://github.com/wishpishh/">wishpishh</a></p>
  <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
```
