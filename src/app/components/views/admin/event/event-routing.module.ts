import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [ { path: 'list-event', component: ListEventComponent },
{ path: '', component: ListEventComponent },

{ path: 'add-event', component: AddEventComponent },
{ path: 'update-event/:id', component: UpdateEventComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
