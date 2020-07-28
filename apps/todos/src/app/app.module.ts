import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '@myorg/ui';
import { GlobalstoreModule } from '@myorg/globalstore';
import { MaterialModule } from '@myorg/material';
import { ServicesModule } from '@myorg/services';

import { AppRoutingModule } from './app-routing.module';

import {BasicAuthInterceptor, ErrorInterceptorService} from '@myorg/services';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule,
    ServicesModule,
    MaterialModule,
    AppRoutingModule,
    GlobalstoreModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
