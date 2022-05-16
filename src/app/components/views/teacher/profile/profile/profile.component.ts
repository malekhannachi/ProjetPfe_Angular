import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  TeacherData: any;
  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.TeacherData = this.teacherService.saveDataProfil();
  }
}
