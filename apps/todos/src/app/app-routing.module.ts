import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AuthGuardService } from '@myorg/services';

const routes: Routes = [
    {
      path: 'auth',
      loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
    },
    {
      path: 'todos',
      loadChildren: () => import('./feature/todos/todos.module').then(m => m.TodosModule),
      canActivate: [AuthGuardService]
    },
    {path: '**', redirectTo: '/auth/login'}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }