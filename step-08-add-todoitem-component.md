
# TodoMVC - React, Alt, ES6 revisited


## Step 8 - Add TodoItem Component

Now, we need to add a new component corresponding to a todo item, we will call it `TodoItem.jsx`

``` 
yo react-webpack-alt:component TodoItem
```

We need to rename generated file TodoItemComponent to TodoItem, and also class name inside file.


#####Render function
Now we need to replace content of render function, but first lets install a needed dependency:

```
npm i -S classnames
```

import it inot TodoItem.jsx:

``` 
import classNames from 'classnames';
``` 

and then, edit render function:
``` 
render() {
    return (
        <li className={<...>}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={this.props.onToggle}
                    />
                <label onDoubleClick={this.handleEdit}>
                    {this.props.todo.title}
                </label>
                <button className="destroy" onClick={this.props.onDestroy} />
            </div>
            <input
                ref="editField"
                className="edit"
                value={this.state.editText}
                onBlur={this.handleSubmit}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                />
        </li>
    );
}
```

##### Initial state

``` 
constructor(props, context) {
    super(props, context);

    this.state = {editText: this.props.todo.title};
}
```

##### Handler functions

```
handleSubmit(event) {
    var val = this.state.editText.trim();
    if (val) {
        this.props.onSave(val);
        this.setState({editText: val});
    } else {
        this.props.onDestroy();
    }
}

handleEdit() {
    this.props.onEdit();
    this.setState({editText: this.props.todo.title});
}

handleKeyDown(event) {
    var ESCAPE_KEY = 27;
    var ENTER_KEY = 13;

    if (event.which === ESCAPE_KEY) {
        this.setState({editText: this.props.todo.title});
        this.props.onCancel(event);
    } else if (event.which === ENTER_KEY) {
        this.handleSubmit(event);
    }
}

handleChange(event) {
    this.setState({editText: event.target.value});
}
```

#######Handlers binding

Handlers need to be binded to this:

``` 
this.handleSubmit = this.handleSubmit.bind(this);
this.handleEdit = this.handleEdit.bind(this);
this.handleKeyDown = this.handleKeyDown.bind(this);
this.handleChange = this.handleChange.bind(this);
``` 

##### Component Update

Add `react-dom`import:

``` 
import ReactDOM from 'react-dom';
``` 

Then add component update function:

``` 
/**
 * Safely manipulate the DOM after updating the state when invoking
 * `this.props.onEdit()` in the `handleEdit` method above.
 * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
 * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
 */
componentDidUpdate(prevProps) {
    if (!prevProps.editing && this.props.editing) {
        var node = React.findDOMNode(this.refs.editField);
        node.focus();
        node.setSelectionRange(node.value.length, node.value.length);
    }
}
``` 


##### Optimize

``` 
/**
  * This is a completely optional performance enhancement that you can
  * implement on any React component. If you were to delete this method
  * the app would still work correctly (and still be very performant!), we
  * just use it as an example of how little code it takes to get an order
  * of magnitude performance improvement.
  */
 shouldComponentUpdate(nextProps, nextState) {
     return (
         nextProps.todo !== this.props.todo ||
         nextProps.editing !== this.props.editing ||
         nextState.editText !== this.state.editText
     );
 }
``` 


// Topics & exercices:
//
// 1 - Topic: Explain property passing from components to subcomponents
// 2 - Topic: Where to initialize state of a component
// 3 - Topic: Explain the bind of event handlers
// 4 - Topic: Explain `componentDidUpdate()`
// 5 - Topic: What is React-DOM
// 6 - Topic: Explain `handleKeyDown` function and associated code sequence
// 7 - Topic: Explain `shouldComponentUpdate` function
// 8 - Exercise: Implement code to build classname
