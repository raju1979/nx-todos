import { Action } from '@ngxs/store';

let currentId = 1;

export class LoginAction {
  static readonly type = '[Auth] Login';
  id: string;
  constructor(public payload: any) {
    
  }
}

// export class AddTodoAsync {
//   static readonly type = '[Todo] Add Todo Async';
//   constructor(public payload: Todo) {
//     let uuid = UUID.UUID();
//     payload.id = uuid;
//   }
// }

// export class ToggleTodo {
//   static readonly type = '[Todo] Toggle Todo';
//   constructor(public payload: { id: string }) {}
// }

// export class DeleteTodo {
//   static readonly type = '[Todo] Delete Todo';
//   constructor(public payload: { id: string }) {}
// }