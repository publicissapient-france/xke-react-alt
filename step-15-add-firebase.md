
# TodoMVC - React, Alt, ES6 revisited


## Step 15 - Add of Firebase support

### Dependencies

We need to add `firebase` dependency:

``` 
npm i -S firebase
``` 

And, add import to `TodoStore`:

``` 
import Firebase from 'firebase';
``` 

### Create Firebase database

As we may not have laready an account on firebase.io, first step would be to create an account. Then, you can create a new database or use default created database.

### Listen changes

We need to init Firebase database in constructor:

``` 
constructor() {

  this.state = {
    todos: []
  };

  this.bindActions(TodoActions);

  this.firebase = new Firebase(`https://glaring-heat-6154.firebaseio.com/`);

  var user = this.firebase.getAuth()

  this.listenDbChanges();
}
``` 

###Write changes

To propagate changes to database, we need to apply different strategies depending on use cases:

``` 
onAddTodo(title) {
  this.todosRef.push().set({
    id: uuid.v4(),
    title: title,
    completed: false
  });
}

onToggleAll(checked) {
  this.state.todos.forEach(todo => {
    this.todosRef.child(todo.key).update({completed: checked});
  });
}

onToggle(todo) {
  this.todoRef(todo).update({completed: !todo.completed});
}

onDestroy(todo) {
  this.todoRef(todo).remove();
}

onSave(command) {
  this.todoRef(command.todoToSave).update({
    title: command.text
  });
}

onClearCompleted() {
  this.state.todos.forEach(todo => {
    if (todo.completed) {
      this.todoRef(todo).remove();
    }
  });
}

onEdit(id) {
  this.setState({editing: id});
}

onShow(nowShowing) {
  this.setState({nowShowing: nowShowing});
}
``` 

###Add Security

A this step, database is open to public read & write. To fix this security issue, we need to restrict access to database.

####Add Application to Google

First, we need to create a Google Application based on instructions on following page:
```
https://www.firebase.com/docs/web/guide/login/google.html
``` 

Once application is created and _client id_ & _client secret_ configured in Firebase, we can add following security rules to database:

``` 
{
  "rules": {
    // grants write access to xebia.fr user
    ".write": "auth !== null && auth.provider === 'google'",

    // grants read access to xebia.fr user
    ".read": "auth !== null && auth.provider === 'google'"
  }
}
``` 

At least it ensures database is allowed to be read or written only by google authenticated users.

####Add authentication code

Once everything is configured on services side, we need to integrate authentication code to application:

``` 
  constructor() {
    ...
    if (user) {
      this.listenDbChanges();
    } else {
      this.firebase.authWithOAuthPopup("google", (error, authData) => {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);

          this.listenDbChanges();
        }
      }, {remember: "sessionOnly", scope: "email"});
    }
  }
``` 

If user is already authenticated, we directly listen changes, else if try to authenticate, and then on success, also listen for changes.
