import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { JokerComponent } from '../joker/joker.component';
import { Acc2Component } from './acc2/acc2.component';


@NgModule({
  declarations: [
    Acc2Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule,
    JokerComponent
  ]
})
export class Module2Module { }
