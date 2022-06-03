import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroupeComponent } from './add-groupe/add-groupe.component';
import { ListGroupeComponent } from './list-groupe/list-groupe.component';
import { UpdateGroupeComponent } from './update-groupe/update-groupe.component';

const routes: Routes = [{ path: '', component: ListGroupeComponent },
{path: 'list-groupe', component: ListGroupeComponent },
{ path: 'add-groupe', component: AddGroupeComponent },
{ path: 'update-groupe/:id', component: UpdateGroupeComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupeRoutingModule { }
