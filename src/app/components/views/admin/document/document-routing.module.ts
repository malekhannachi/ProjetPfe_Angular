import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from './add-document/add-document.component';
import { ListDocumentComponent } from './list-document/list-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';

const routes: Routes = [
  { path: 'list-document', component: ListDocumentComponent },
  { path: '', component: ListDocumentComponent },
  { path: 'add-document', component: AddDocumentComponent },
  { path: 'update-document/:id', component: UpdateDocumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule { }
