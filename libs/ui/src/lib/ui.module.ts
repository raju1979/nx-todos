import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // CLI imports router

import { TodosComponent } from './todos/todos.component';

import { MaterialModule } from '@myorg/material';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TodosComponent, NavbarComponent, LoginFormComponent],
  exports: [TodosComponent, NavbarComponent, LoginFormComponent],
})
export class UiModule {}
