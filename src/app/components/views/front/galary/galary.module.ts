import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalaryRoutingModule } from './galary-routing.module';
import { GalaryComponent } from './galary/galary.component';


@NgModule({
  declarations: [
    GalaryComponent
  ],
  imports: [
    CommonModule,
    GalaryRoutingModule
  ]
})
export class GalaryModule { }
