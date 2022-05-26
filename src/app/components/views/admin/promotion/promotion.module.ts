import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionRoutingModule } from './promotion-routing.module';
import { PromotionComponent } from './promotion/promotion.component';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PromotionComponent,
    AddPromotionComponent,
    UpdatePromotionComponent
  ],
  imports: [
    CommonModule,
    PromotionRoutingModule,ReactiveFormsModule
  ]
})
export class PromotionModule { }
