
# TodoMVC - React, Alt, ES6 revisited


## Step 03 - Code

### Some renaming

Before going further, we need to do some renaming:

- Rename `Main.js` to `TodoApp.jsx`
- Rename `App.css` to `TodoApp.scss`
- Rename `AppComponent` to `TodoApp`
- Edit `run.js` & replace occurence of `./Main` by `./TodoApp`
- Edit `TodoApp.jsx` & replace occurence of `App.css` by `TodoApp.css`

###Configure Babel

Create file `.babelrc` with following content: 

``` 
{
  "stage": 0
}
```

### Run your application

To run application, following command needs to be executed:

```
npm start
```

