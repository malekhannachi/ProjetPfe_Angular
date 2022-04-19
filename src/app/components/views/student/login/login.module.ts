import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AuthStudentComponent } from './auth-student/auth-student.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthStudentComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,ReactiveFormsModule
  ]
})
export class LoginModule { }
