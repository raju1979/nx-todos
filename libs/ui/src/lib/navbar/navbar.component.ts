import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'myorg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('appTitle') appTitleProps: string;

  constructor() { }

  ngOnInit(): void {
  }

}
