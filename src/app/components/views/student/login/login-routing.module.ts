import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthStudentComponent } from './auth-student/auth-student.component';

const routes: Routes = [{path:'',component:AuthStudentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
