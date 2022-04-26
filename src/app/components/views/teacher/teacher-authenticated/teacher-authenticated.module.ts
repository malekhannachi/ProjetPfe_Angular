import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAuthenticatedRoutingModule } from './teacher-authenticated-routing.module';
import { TeacherAuthenticatedComponent } from './teacher-authenticated/teacher-authenticated.component';


@NgModule({
  declarations: [
    TeacherAuthenticatedComponent
  ],
  imports: [
    CommonModule,
    TeacherAuthenticatedRoutingModule
  ]
})
export class TeacherAuthenticatedModule { }
