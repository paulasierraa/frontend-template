import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlosasComponent } from './glosas.component';

const routes: Routes = [{ path: '', component: GlosasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlosasRoutingModule { }
