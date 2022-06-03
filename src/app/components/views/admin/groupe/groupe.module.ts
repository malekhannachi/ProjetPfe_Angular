import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupeRoutingModule } from './groupe-routing.module';
import { ListGroupeComponent } from './list-groupe/list-groupe.component';
import { AddGroupeComponent } from './add-groupe/add-groupe.component';
import { UpdateGroupeComponent } from './update-groupe/update-groupe.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListGroupeComponent,
    AddGroupeComponent,
    UpdateGroupeComponent
  ],
  imports: [
    CommonModule,
    GroupeRoutingModule,ReactiveFormsModule
  ]
})
export class GroupeModule { }
