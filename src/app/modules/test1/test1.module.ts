import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Test1RoutingModule } from './test1-routing.module';
import { Test1Component } from './test1.component';
import { ListCharacterComponent } from './components/list-character/list-character.component';


@NgModule({
  declarations: [
    Test1Component,
    ListCharacterComponent
  ],
  imports: [
    CommonModule,
    Test1RoutingModule
  ]
})
export class Test1Module { }
