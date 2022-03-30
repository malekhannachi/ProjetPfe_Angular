import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    StudentLayoutComponent,
    TeacherLayoutComponent,
    AdminLoginComponent,
  ],
  imports: [CommonModule, RouterModule,FormsModule,ReactiveFormsModule],
})
export class LayoutsModule {}
