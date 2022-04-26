import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAuthenticatedRoutingModule } from './student-authenticated-routing.module';
import { StudentAuthenticatedComponent } from './student-authenticated/student-authenticated.component';


@NgModule({
  declarations: [
    StudentAuthenticatedComponent
  ],
  imports: [
    CommonModule,
    StudentAuthenticatedRoutingModule
  ]
})
export class StudentAuthenticatedModule { }
