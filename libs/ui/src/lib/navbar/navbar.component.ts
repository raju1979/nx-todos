import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '@myorg/services';

@Component({
  selector: 'myorg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('appTitle') appTitleProps: string;
  @Output('logout') logout = new  EventEmitter();

  userSubscription: Subscription;
  user: any = null;

  constructor(private authService: AuthService) {
    this.userSubscription = this.authService.getUser().subscribe(
      data => {
        console.log("in navbar ", data);
        if (data) {
          this.user = data;
        }
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.userSubscription.unsubscribe();
  }

  onLogout() {
    this.logout.emit();
  }

}
