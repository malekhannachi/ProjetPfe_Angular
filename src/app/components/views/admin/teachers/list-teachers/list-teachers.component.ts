import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css'],
})
export class ListTeachersComponent implements OnInit {
  listTeacher: any = [];
  condition?: boolean;
  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe(
      (res) => {
        this.listTeacher = res;
        console.log(this.listTeacher);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleleTeacher(teacher: any) {
    this.teacherService.deleteTeacher(teacher.id_teacher).subscribe(
      (res) => {
        let index = this.listTeacher.indexOf(teacher);
        this.listTeacher.splice(index, 1);
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateTeacherState(teacher: any) {
    console.log(teacher);

    this.teacherService.updateTeacher(teacher).subscribe(
      (result) => {
        let index = this.listTeacher.indexOf(teacher);
        this.listTeacher[index].accountState =
          !this.listTeacher[index].accountState;
      },
      (err) => console.log(err)
    );
  }
}
