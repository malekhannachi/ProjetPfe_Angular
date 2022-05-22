import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetablePromotionComponent } from './timetable-promotion/timetable-promotion.component';
import { TimetableSatComponent } from './timetable-sat/timetable-sat.component';
import { TimetableSunComponent } from './timetable-sun/timetable-sun.component';
import { TimetableTutoratComponent } from './timetable-tutorat/timetable-tutorat.component';

const routes: Routes = [{path:'TimetablePromotion',component:TimetablePromotionComponent},
{path:'tutorat',component:TimetableTutoratComponent},
{path:'saturday-grouping',component:TimetableSatComponent},
{path:'sunday-grouping',component:TimetableSunComponent},
{path:'promotion',component:TimetablePromotionComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
