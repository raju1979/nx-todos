import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';

import { MaterialModule } from '@myorg/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TodosComponent],
  exports: [TodosComponent],
})
export class UiModule {}
