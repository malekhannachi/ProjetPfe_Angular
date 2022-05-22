import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableSunComponent } from './timetable-sun/timetable-sun.component';
import { TimetableSatComponent } from './timetable-sat/timetable-sat.component';
import { TimetablePromotionComponent } from './timetable-promotion/timetable-promotion.component';
import { TimetableTutoratComponent } from './timetable-tutorat/timetable-tutorat.component';


@NgModule({
  declarations: [
    TimetableSunComponent,
    TimetableSatComponent,
    TimetablePromotionComponent,
    TimetableTutoratComponent
  ],
  imports: [
    CommonModule,
    TimetableRoutingModule
  ]
})
export class TimetableModule { }
