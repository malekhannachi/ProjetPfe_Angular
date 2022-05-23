import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDemandeCursusRoutingModule } from './list-demande-cursus-routing.module';
import { ListDemandeCursusComponent } from './list-demande-cursus/list-demande-cursus.component';


@NgModule({
  declarations: [
    ListDemandeCursusComponent
  ],
  imports: [
    CommonModule,
    ListDemandeCursusRoutingModule
  ]
})
export class ListDemandeCursusModule { }
