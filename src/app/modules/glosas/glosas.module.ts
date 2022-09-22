import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlosasRoutingModule } from './glosas-routing.module';
import { GlosasComponent } from './glosas.component';


@NgModule({
  declarations: [
    GlosasComponent
  ],
  imports: [
    CommonModule,
    GlosasRoutingModule
  ]
})
export class GlosasModule { }
