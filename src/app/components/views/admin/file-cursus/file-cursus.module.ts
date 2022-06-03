import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileCursusRoutingModule } from './file-cursus-routing.module';
import { FileCursusComponent } from './file-cursus/file-cursus.component';
import { AddfileCursusComponent } from './addfile-cursus/addfile-cursus.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FileCursusComponent,
    AddfileCursusComponent
  ],
  imports: [
    CommonModule,
    FileCursusRoutingModule,ReactiveFormsModule
  ]
})
export class FileCursusModule { }
