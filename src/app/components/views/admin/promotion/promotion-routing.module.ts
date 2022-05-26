import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPromotionComponent } from './add-promotion/add-promotion.component';
import { PromotionComponent } from './promotion/promotion.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';

const routes: Routes = [{path: '', component: PromotionComponent },
{ path: 'add-promotion', component: AddPromotionComponent },
{ path: 'update-promotion/:id', component: UpdatePromotionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionRoutingModule { }
