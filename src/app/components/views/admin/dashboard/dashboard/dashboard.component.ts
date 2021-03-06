import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ContacterAdminService } from 'src/app/services/contacter-admin.service';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    // list and number teacher
  ListTeacher: any = [];
  numberT: Number = 0;
  // list and number Student
  Liststudent: any = [];
  number: Number = 0;
    // list and number Student
    Listcontact: any = [];
    numberc: Number = 0;
      // list and number Student
      Listadmin: any = [];
      numberadmin: Number = 0;
   
 
  constructor(
    private Teacher: TeacherService,
    private studentService: StudentService,
    private ContacterAdminService:ContacterAdminService,
    private adService:AdminService
  ) {
    this.numberTeacher();
    this.numberStudent();
    this.ContacterAdmin();
    this.numberAdmin()
  }
  ContacterAdmin() {
    this.ContacterAdminService.getAllcontactAdmin().subscribe(
      (res) => {
        this.Listcontact = res;
        this.numberc = this.Listcontact.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  numberStudent() {
    this.studentService.getAllStudents().subscribe(
      (res) => {
        this.Liststudent = res;
        this.number = this.Liststudent.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  numberTeacher() {
    this.Teacher.getAllTeachers().subscribe(
      (res) => {
        this.ListTeacher = res;
        this.numberT = this.ListTeacher.length;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  numberAdmin(){
    this.adService.getAllAdmin().subscribe(result=>{
      this.Listadmin = result;
        this.numberadmin = this.Listadmin.length;
    })

  }

  ngOnInit(): void {}
}
