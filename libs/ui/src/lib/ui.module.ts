import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // CLI imports router
import { AgGridModule } from 'ag-grid-angular';

import { TodosComponent } from './todos/todos.component';

import { MaterialModule } from '@myorg/material';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { ButtonRendererComponent } from './button-renderer/button-renderer.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([])
  ],
  declarations: [TodosComponent, NavbarComponent, LoginFormComponent, RegisterFormComponent, AgGridComponent, ButtonRendererComponent],
  exports: [TodosComponent, NavbarComponent, LoginFormComponent, RegisterFormComponent, AgGridComponent, ButtonRendererComponent],
})
export class UiModule {}
