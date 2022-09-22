import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'paciente',
    loadChildren: () => import('./modules/paciente/paciente.module').then(m => m.PacienteModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./modules/glosas/glosas.module').then(m => m.GlosasModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
