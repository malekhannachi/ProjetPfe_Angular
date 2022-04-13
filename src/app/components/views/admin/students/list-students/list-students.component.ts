import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  listStudent: any = [];
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (result) => {
        this.listStudent = result;
        console.log(this.listStudent);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleleStudent(student: any) {
    this.studentService.deleteStudent(student.id_student).subscribe(
      (res) => {
        let index = this.listStudent.indexOf(student);
        this.listStudent.splice(index, 1);
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateStudentState(student: any) {
    console.log(student);

    this.studentService.updateStudent(student).subscribe(
      (result) => {
        let index = this.listStudent.indexOf(student);
        this.listStudent[index].accountState =
          !this.listStudent[index].accountState;
      },
      (err) => console.log(err)
    );
  }
}
