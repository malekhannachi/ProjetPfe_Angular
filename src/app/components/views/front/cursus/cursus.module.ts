import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursusRoutingModule } from './cursus-routing.module';
import { CursusComponent } from './cursus/cursus.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CursusComponent
  ],
  imports: [
    CommonModule,
    CursusRoutingModule,ReactiveFormsModule
  ]
})
export class CursusModule { }
