import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontLayoutComponent,
    StudentLayoutComponent,
    TeacherLayoutComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
