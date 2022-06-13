import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { ListDocumentComponent } from './list-document/list-document.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListDocumentComponent,
    AddDocumentComponent,
    UpdateDocumentComponent
  ],
  imports: [
    CommonModule,
    DocumentRoutingModule,ReactiveFormsModule
  ]
})
export class DocumentModule { }
