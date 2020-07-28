import { State, Action, StateContext, Selector } from '@ngxs/store';
import * as actions from './app.actions';

import { Observable, timer, of } from 'rxjs';
import { map, tap, mergeMap, catchError } from 'rxjs/operators';

@State<any>({
  name: 'app', 
  defaults: {
      isLoading: false
  }
})
export class AppState {
    
  @Action(actions.LoadingStartAction)
  LoadingStartAction(
    store: StateContext<any>, 
    action: actions.LoadingStartAction
  ) {
    const state = store.getState();
    store.setState({
        ...state,
        isLoading: action.payload
    });
  } 
   

 
}