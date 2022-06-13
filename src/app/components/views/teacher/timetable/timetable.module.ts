import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetableRoutingModule } from './timetable-routing.module';
import { TimetableTutoratComponent } from './timetable-tutorat/timetable-tutorat.component';


@NgModule({
  declarations: [

    TimetableTutoratComponent
  ],
  imports: [
    CommonModule,
    TimetableRoutingModule
  ]
})
export class TimetableModule { }
