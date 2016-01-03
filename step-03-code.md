
# TodoMVC - React, Alt, ES6 revisited


## Step 3 - Code

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

# Topics & exercices:

1. Topic: What is React
2. Topic: What is Flux & Alt
3. Topic: A word on Babel 6 & ES6
