import { State, Action, StateContext, Selector } from '@ngxs/store';
import * as actions from './login.actions';

import { Observable, timer, of } from 'rxjs';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';

@State<any>({
  name: 'auth', 
  defaults: {}
})
export class AuthState {
  @Action(actions.LoginAction)
  LoginAction(
    store: StateContext<any>, 
    action: actions.LoginAction
  ) {
    const todos = store.getState();
    store.setState({});
  } 

  

//   @Action(actions.AddTodoAsync)
//   AddTodoAsync(
//     store: StateContext<Array<Todo>>, 
//     action: actions.AddTodoAsync
//   ) {
//     return timer(2000).pipe(
//       map(() => {
//         throw (new Error(`${action.payload.text} failed`));
//         const todos = store.getState();
//         store.setState(todos.concat(action.payload));
//       }),
//       catchError(error => store.dispatch(new SetError({ error })))
//     )
//   } 
}