import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursusRoutingModule } from './cursus-routing.module';
import { CursusComponent } from './cursus/cursus.component';


@NgModule({
  declarations: [
    CursusComponent
  ],
  imports: [
    CommonModule,
    CursusRoutingModule
  ]
})
export class CursusModule { }
