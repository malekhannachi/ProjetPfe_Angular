import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimetableTutoratComponent } from './timetable-tutorat/timetable-tutorat.component';

const routes: Routes = [
  {path:'',component:TimetableTutoratComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetableRoutingModule { }
