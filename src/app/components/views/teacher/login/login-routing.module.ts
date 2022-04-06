import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTeacherComponent } from './auth-teacher/auth-teacher.component';

const routes: Routes = [{path:'',component: AuthTeacherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
