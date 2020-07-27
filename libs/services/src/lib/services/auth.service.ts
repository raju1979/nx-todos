import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { ILoginUser, ICurrentUser } from '@myorg/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  login(user: ILoginUser) {
    console.log('From auth service login');
    return this.http.post<any>('/api/auth/login', {...user});
  }

  register(user: ILoginUser) {
    console.log('From auth service register');
    return this.http.post<any>('/api/auth/register', {...user});
  }

  setUser(user: ICurrentUser) {
    this.userSubject.next(user);
  }

  getUser(): Observable<any> {
    return this.userSubject.asObservable();
  }

  clearUser() {
    this.userSubject.next();
  }

}
