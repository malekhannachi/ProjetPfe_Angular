import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterStudentComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,ReactiveFormsModule
  ]
})
export class RegisterModule { }
