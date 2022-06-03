import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfileCursusComponent } from './addfile-cursus/addfile-cursus.component';
import { FileCursusComponent } from './file-cursus/file-cursus.component';

const routes: Routes = [
  { path: '', component: FileCursusComponent },
  { path: 'list', component: FileCursusComponent },
  { path: 'add-cursus', component: AddfileCursusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileCursusRoutingModule {}
