import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactAdminComponent } from './list-contact-admin/list-contact-admin.component';

const routes: Routes = [{path:'',component:ListContactAdminComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactAdminRoutingModule { }
