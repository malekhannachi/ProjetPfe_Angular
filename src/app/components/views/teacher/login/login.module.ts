import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AuthTeacherComponent } from './auth-teacher/auth-teacher.component';


@NgModule({
  declarations: [
    AuthTeacherComponent,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
