import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';

const routes: Routes = [{ path: '', component: HomeTeacherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
