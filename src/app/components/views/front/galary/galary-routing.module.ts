import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaryComponent } from './galary/galary.component';

const routes: Routes = [{path:'',component:GalaryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalaryRoutingModule { }
