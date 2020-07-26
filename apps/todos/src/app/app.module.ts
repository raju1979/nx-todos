import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '@myorg/ui';
import { MaterialModule } from '@myorg/material';
import { ServicesModule } from '@myorg/services';
import { LoginComponent } from './components/login/login.component';

import { AppRoutingModule } from './app-routing.module';

import {BasicAuthInterceptor, ErrorInterceptorService} from '@myorg/services';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    ServicesModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
