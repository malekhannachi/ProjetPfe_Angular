import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterTeacherComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,ReactiveFormsModule
  ]
})
export class RegisterModule { }
