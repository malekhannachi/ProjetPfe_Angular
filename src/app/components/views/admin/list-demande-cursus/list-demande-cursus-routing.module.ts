import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDemandeCursusComponent } from './list-demande-cursus/list-demande-cursus.component';

const routes: Routes = [{path:'',component:ListDemandeCursusComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListDemandeCursusRoutingModule { }
