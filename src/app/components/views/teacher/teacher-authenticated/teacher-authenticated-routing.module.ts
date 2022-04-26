import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAuthenticatedComponent } from './teacher-authenticated/teacher-authenticated.component';

const routes: Routes = [{ path: '', component: TeacherAuthenticatedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherAuthenticatedRoutingModule {}
