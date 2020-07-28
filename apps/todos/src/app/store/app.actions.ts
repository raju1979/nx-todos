import { Action } from '@ngxs/store';

let currentId = 1;

export class LoadingStartAction {
  static readonly type = '[App] Loading Start';
  constructor(public payload: boolean) {}
}

export class LoadingEndAction {
    static readonly type = '[App] Loading End';
    constructor(public payload: boolean) {}
  }