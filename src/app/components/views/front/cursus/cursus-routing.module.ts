import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursusComponent } from './cursus/cursus.component';

const routes: Routes = [{path:'',component:CursusComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursusRoutingModule { }
