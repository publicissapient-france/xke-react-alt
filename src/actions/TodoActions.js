import alt from 'components/Dispatcher';

class TodoActions {

  constructor() {

    this.generateActions(
      'addTodo',
      'destroy',
      'toggle',
      'clearCompleted',
      'show'
    );

  }

}

export default alt.createActions(TodoActions);
