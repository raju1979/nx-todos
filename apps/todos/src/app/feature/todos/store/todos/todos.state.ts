import { State, Action, StateContext, Selector } from '@ngxs/store';
import * as actions from './todos.actions';
import { Todo } from './todos.model';
import { ITodo } from '@myorg/data';

import { Observable, timer, of } from 'rxjs';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';
import { SetError } from '../errors/errors.actions';
// import { SetError } from '../errors/errors.actions';

@State<Array<Todo>>({
  name: 'todos', 
  defaults: []
})
export class TodosState {
  @Action(actions.AddTodo)
  AddTodo(
    store: StateContext<Array<ITodo>>, 
    action: actions.AddTodo
  ) {
    const todos = store.getState();
    store.setState(todos.concat(action.payload));
  } 

  @Action(actions.ToggleTodo)
  ToggleTodo(
    store: StateContext<Array<Todo>>, 
    action: actions.ToggleTodo
  ) {
    const todos = store.getState();
    store.setState(this.toggleTodo(todos, action));
  } 

  @Action(actions.DeleteTodo)
  DeleteTodo(
    store: StateContext<Array<Todo>>, 
    action: actions.DeleteTodo
  ) {
    console.log('in delte state');
    const todos = store.getState();
    store.setState(todos.filter(todo => todo.id != action.payload.id));
  } 

  @Action(actions.AddTodoAsync)
  AddTodoAsync(
    store: StateContext<Array<Todo>>, 
    action: actions.AddTodoAsync
  ) {
    return timer(2000).pipe(
      map(() => {
        throw (new Error(`${action.payload.text} failed`));
        const todos = store.getState();
        store.setState(todos.concat(action.payload));
      }),
      catchError(error => store.dispatch(new SetError({ error })))
    )
  } 

  private toggleTodo(todos, action){
    //map returns new array
    return todos.map(todo => {
      //skip other items
      if (todo.id !== action.payload.id)
        return todo;
      //toggle
      return {
        id: todo.id,
        text: todo.text,
        completed: !todo.completed
      };
    });
  }
}