import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'myorg-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output('register') registerProps = new EventEmitter<any>();

  user = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doRegister() {
    this.registerProps.emit(this.user);
  }

}
