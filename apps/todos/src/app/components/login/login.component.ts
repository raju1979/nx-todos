import { Component, OnInit } from '@angular/core';

import { AuthService, AlertService } from '@myorg/services';
import { ILoginUser } from '@myorg/data';

@Component({
  selector: 'myorg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  doLogin(user: ILoginUser) {
    console.log(user);
    this.authService.login(user)
      .subscribe(response => {
        console.log(response);
        this.alertService.showSuccess("Please wait redirecting", "success", 3000);
      }, (err) => {
        console.log(err);
      })
  }

}
