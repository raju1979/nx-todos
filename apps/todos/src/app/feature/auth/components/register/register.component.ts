import { Component, OnInit } from '@angular/core';
import { AuthService, AlertService } from '@myorg/services';
import { ILoginUser } from '@myorg/data';

@Component({
  selector: 'myorg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private alertService: AlertService) { }

  ngOnInit(): void {
  }

  doRegister(user: ILoginUser) {
    console.log(user);
    this.authService.register(user)
      .subscribe(response => {
        console.log(response);
        this.alertService.showSuccess("Please goto login page now", "success", 3000);
      }, (err) => {
        console.log(err);
        this.alertService.showError(`${err}`, 'Error', 3000);
      })
  }

}
