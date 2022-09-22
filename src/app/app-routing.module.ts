import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test1', loadChildren: () => import('./modules/test1/test1.module').then(m => m.Test1Module) },
  { path: 'test2', loadChildren: () => import('./modules/test2/test2.module').then(m => m.Test2Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
