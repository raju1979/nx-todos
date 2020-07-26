import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'myorg-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output('login') login = new EventEmitter<any>();

  user = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doLogin() {
    this.login.emit(this.user);
  }

}
