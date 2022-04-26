import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAuthenticatedComponent } from './student-authenticated/student-authenticated.component';

const routes: Routes = [{ path: '', component: StudentAuthenticatedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentAuthenticatedRoutingModule {}
