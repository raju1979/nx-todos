import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ILoginUser } from '@myorg/data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: ILoginUser) {
    console.log('From auth service login');
    return this.http.post<any>('/api/auth/login', {...user});
  }

}
