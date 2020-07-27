import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './components/todos/todos.component';

import { NgxsModule } from '@ngxs/store';
import { MaterialModule } from '@myorg/material';
import { UiModule } from '@myorg/ui';

import { TodosState } from './store/todos/todos.state';
import { ErrorsState } from './store/errors/errors.state';
import { FilterState } from './store/filter/filter.state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    NgxsModule.forFeature([TodosState, ErrorsState, FilterState]),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class TodosModule { }
