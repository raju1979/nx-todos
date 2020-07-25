import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '@myorg/data';
import { AppService } from './services/app.service';

import { AlertService } from '@myorg/services';


@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todos: Todo[] = [];

  title: string = '';

  constructor(private http: HttpClient, private appService: AppService, private alert: AlertService) {
    this.fetch();
  }

  fetch() {
    this.appService.getTodos().subscribe((t: any) => {
      console.log(t);
      this.todos = t.todos;
    });
  }

  addTodo() {
    console.log(this.title);
    this.appService.addTodo(this.title).subscribe(() => {
      this.alert.showSuccess("Record inserted successfully", "Success", 3000);
      this.fetch();
    });
  }

}
