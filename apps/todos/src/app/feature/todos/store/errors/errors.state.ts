import { State, Action, StateContext, Selector, Actions } from '@ngxs/store';
import * as actions from './errors.actions';
import { BaseError } from './errors.model';

@State<Array<BaseError>>({
    name: 'errors',
    defaults: []
})

export class ErrorsState {
    @Action(actions.SetError)
    AddTodo(
        store: StateContext<Array<BaseError>>,
        action: actions.SetError
    ) {
        const todos = store.getState();
        console.log('action.payload.error', action.payload.error['message'])
        store.setState(todos.concat({message: action.payload.error['message']}));
    }
}


