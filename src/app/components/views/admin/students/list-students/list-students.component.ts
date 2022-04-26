import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
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

  updateStudentState(student: Student) {
    console.log(student);

    let index=this.listStudent.indexOf(student);
    if(student.accountState==true)
    {let newStudent=new Student(student.id_student,student.cin,student.num_ins,student.firstname,student.lastname,student.date,student.lieu_naissance,
      student.classe,student.groupe,student.nature_bac,student.annee_bac,false)
  this.studentService.updateStudent(newStudent).subscribe
  (
    res=>{console.log(res)
    this.listStudent[index]=newStudent
    },
    err=>console.log(err)
  )
    }
   
    else{

      let newStudent=new Student(student.id_student,student.cin,student.num_ins,student.firstname,student.lastname,student.date,student.lieu_naissance,
        student.classe,student.groupe,student.nature_bac,student.annee_bac,true)
    this.studentService.updateStudent(newStudent).subscribe
    (
      res=>{console.log(res)
      this.listStudent[index]=newStudent
      },
      err=>console.log(err)
    )

    }

   
  }
}
