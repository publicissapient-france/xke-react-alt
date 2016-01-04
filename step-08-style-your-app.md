
# TodoMVC - React, Alt, ES6 revisited


## Step 08 - Style your app


### 1/ Import Styles

We will use official TodoMVC styles, therefore, we will install needed packages.

First, install dependencies :

```
npm i -S todomvc-common
npm i -S todomvc-app-css
```

Then, require then into the code in `TodoApp.jsx`:

``` 
require('todomvc-common/base.css');
require('todomvc-app-css/index.css');
```


### 2/ Add class names to your html

Add class `todoapp` to your root tag in `index.html`:

```
<section id="app" class="todoapp">APPLICATION CONTENT</section>
```

