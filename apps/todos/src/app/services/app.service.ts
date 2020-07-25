import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '@myorg/data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { 
    
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/api/todos');
  }

  addTodo(title: string): Observable<Todo> {
    return this.http.post<Todo>('/api/todos', {title: title})
  }

}
