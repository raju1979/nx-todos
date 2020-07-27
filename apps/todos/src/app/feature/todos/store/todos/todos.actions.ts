import { Action } from '@ngxs/store';
import { Todo } from './todos.model';
import { UUID } from 'angular2-uuid';

import { ITodo } from '@myorg/data';

let currentId = 1;

export class AddTodo {
  static readonly type = '[Todo] Add Todo';
  id: string;
  constructor(public payload: ITodo) {
    let uuid = UUID.UUID();  
    payload.id = uuid;
  }
}

export class AddTodoAsync {
  static readonly type = '[Todo] Add Todo Async';
  constructor(public payload: Todo) {
    let uuid = UUID.UUID();
    payload.id = uuid;
  }
}

export class ToggleTodo {
  static readonly type = '[Todo] Toggle Todo';
  constructor(public payload: { id: string }) {}
}

export class DeleteTodo {
  static readonly type = '[Todo] Delete Todo';
  constructor(public payload: { id: string }) {}
}