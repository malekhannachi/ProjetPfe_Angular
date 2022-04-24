import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-layout',
  templateUrl: './student-layout.component.html',
  styleUrls: ['./student-layout.component.css'],
})
export class StudentLayoutComponent implements OnInit {
  isLoggedStudent!: Boolean;
  studentData: any;
  constructor(private route: Router, public studentSerive: StudentService) {}

  ngOnInit(): void {
    this.isLoggedStudent = this.studentSerive.isLoggedInStudent();
    //test
    if (localStorage.getItem('TokenStudent')) {
      this.studentData = this.studentSerive.saveDataProfil();
      console.log(this.studentData);
    }
  }
  logout() {
    localStorage.removeItem('TokenStudent');
    this.route.navigate(['student/auth-student']);
  }
}
