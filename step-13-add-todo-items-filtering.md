
# TodoMVC - React, Alt, ES6 revisited


## Step 13 - Add todo items filtering


###1/ Todo filtering

We need to change `TodoApp.jsx` to use a filtered list instead of full list: 
``` 
if (this.props.todos) {
    var shownTodos = this.props.todos.filter((todo) => {
        switch (this.props.nowShowing) {
            case 'ACTIVE':
                return !todo.completed;
            case 'COMPLETED':
                return todo.completed;
            default:
                return true;
        }
    }, this);

    todoItems = shownTodos.map((todo) => {
        ...
    }, this);
``` 


###2/ Routing

####TodoFooter

We need to configure an history listener and `nowShowing` will be up to date with correct value:

``` 
componentDidMount() {
    this.unlistenHistory = this.props.history.listen( (err, state) => {

        var filter = state.location.pathname.slice(1).toUpperCase() || 'ALL';
        TodoActions.show(filter);
    });
}

componentWillUnmount() {
    history.unlisten(this.unlistenHistory);
}
``` 


# Topics:

1. Topic: Explain goal of listening history base on `history` module function
2. Exercise: Implement filter todos based on variable `nowShowing` and possible values ('ACTIVE', 'COMPLETED' & default case)
3. Exercise: Implement `listen` & `unlisten` functions of `history` module to listen history a decide what to show with TodoAction `show`. You can use `state.location.pathname`to build filter to pass to `show` function. Filter variable passed to `show` function should match: 'ALL', 'ACTIVE' or 'COMPLETED'. 
