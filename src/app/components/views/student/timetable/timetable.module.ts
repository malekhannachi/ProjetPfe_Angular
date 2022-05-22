import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableSatComponent } from './timetable-sat/timetable-sat.component';
import { TimetableSunComponent } from './timetable-sun/timetable-sun.component';
import { TimetableTutoratComponent } from './timetable-tutorat/timetable-tutorat.component';
import { TimetablePromotionComponent } from './timetable-promotion/timetable-promotion.component';


@NgModule({
  declarations: [
    TimetableSatComponent,
    TimetableSunComponent,
    TimetableTutoratComponent,
    TimetablePromotionComponent
  ],
  imports: [
    CommonModule,
    TimetableRoutingModule
  ]
})
export class TimetableModule { }
