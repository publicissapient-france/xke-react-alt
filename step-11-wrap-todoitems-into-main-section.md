
# TodoMVC - React, Alt, ES6 revisited


## Step 11 - Wrap TodoItems into a Main Section

We want to add `TodoItem`s into a section: 

``` 
main = (
    <section className="main">
      <ul className="todo-list">
        {todoItems}
      </ul>
    </section>
);
``` 

and update return of `render` function:

``` 
return (
  <div className="index">
    {main}
  </div>
);
``` 
