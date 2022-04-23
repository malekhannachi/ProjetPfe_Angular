import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-layout',
  templateUrl: './teacher-layout.component.html',
  styleUrls: ['./teacher-layout.component.css'],
})
export class TeacherLayoutComponent implements OnInit {
  isLoggedTeacher!: Boolean;
  teacherData: any | undefined;
  constructor(private route: Router, public ts: TeacherService) {}

  ngOnInit(): void {
    this.isLoggedTeacher = this.ts.isLoggedInTeacher();
    if(localStorage.getItem('TokenTeacher')){
      this.teacherData = this.ts.saveDataProfil();
      console.log(this.teacherData);
      
    }
 
  }

  logout() {
    localStorage.removeItem('TokenTeacher');
    this.route.navigate(['teacher/auth-teacher']);
  }
}
