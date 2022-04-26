import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactAdminRoutingModule } from './contact-admin-routing.module';
import { ListContactAdminComponent } from './list-contact-admin/list-contact-admin.component';


@NgModule({
  declarations: [
    ListContactAdminComponent
  ],
  imports: [
    CommonModule,
    ContactAdminRoutingModule
  ]
})
export class ContactAdminModule { }
