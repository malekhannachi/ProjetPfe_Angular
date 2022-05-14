import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  studentData: any;
  constructor( public studentSerive: StudentService) { }

  ngOnInit(): void {
    this.studentData = this.studentSerive.saveDataProfil();
    console.log(this.studentData);
  }

}
