import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from '@myorg/ui';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NgxsModule } from '@ngxs/store';

import { AuthState } from './store/login/login.state';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    UiModule,
    AuthRoutingModule,
    NgxsModule.forFeature([AuthState])
  ],
  exports: [
    LoginComponent, RegisterComponent
  ]
})
export class AuthModule { }
