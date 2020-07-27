import { Component, OnInit } from '@angular/core';


import * as fromTodos from '../../store/todos/todos.actions';
import { Select, Store, Actions } from '@ngxs/store';
import { ITodo } from '@myorg/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'myorg-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todo: ITodo = {
    title: '',
    description: ''
  };

  @Select(state => state.todos) todos: Observable<ITodo[]>;

  constructor(private store: Store, private actions$: Actions) { 
    this.store.select(state => state.todos).subscribe((todos: ITodo[]) => console.log('todos', todos));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.todo);
    this.addTodo();
  }

  addTodo() {
    this.store.dispatch(
      new fromTodos.AddTodo(
        <ITodo>{ title: this.todo.title, description: this.todo.description, completed: false }
      )
    );
    this.todo.title = '';
    this.todo.description = '';
  }

}
