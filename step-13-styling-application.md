
# TodoMVC - React, Alt, ES6 revisited


## Step 14 - Styling Application

To correctly style our app, we need to replace following code: 

``` 
<div id="app">APPLICATION CONTENT</div>
```  

By :

``` 
<body>
  <section id="app" class="todoapp"></section>
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by <a href="http://github.com/wishpishh">Hannes Johansson</a> based on React example by <a href="http://github.com/petehunt/">petehunt</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
  <script>__REACT_DEVTOOLS_GLOBAL_HOOK__ = parent.__REACT_DEVTOOLS_GLOBAL_HOOK__</script>
  <script type="text/javascript" src="assets/app.js"></script>
</body>
```
