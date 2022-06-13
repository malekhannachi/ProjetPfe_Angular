import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit {
  listStudent: any = [];
  constructor(
    private studentService: StudentService,
    private toast: NgToastService
  ) {}

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
    if (confirm('Voulez vous supprimer cette Etudiant ?')) {
      this.studentService.deleteStudent(student.id_student).subscribe(
        (res) => {
          let index = this.listStudent.indexOf(student);
          this.listStudent.splice(index, 1);
          console.log(res);

          this.toast.error({
            detail: ' Message',
            summary: 'Etudiant est Supprimé',
            duration: 2000,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  updateStudentState(student: Student) {
    console.log(student);

    let index = this.listStudent.indexOf(student);
    if (student.accountState == true) {
      let newStudent = new Student(
        student.id_student,
        student.cin,
        student.num_ins,
        student.firstname,
        student.lastname,
        student.date,
        student.lieu_naissance,
        student.nature_bac,
        student.annee_bac,
        false,
        student.promotion,
        student.groupe
      );
      console.log(newStudent);
      if (confirm('Voulez vous bloquer cette Etudiant ?')) {
        this.studentService.updateStudent(newStudent).subscribe(
          (res) => {
            console.log(res);
            this.listStudent[index] = newStudent;
            this.toast.info({
              detail: ' Information',
              summary: 'Etudiant est Bloqué',
              duration: 2000,
            });
          },
          (err) => console.log(err)
        );
      }
    } else {
      let newStudent = new Student(
        student.id_student,
        student.cin,
        student.num_ins,
        student.firstname,
        student.lastname,
        student.date,
        student.lieu_naissance,
        student.nature_bac,
        student.annee_bac,
        true,
        student.promotion,
        student.groupe
      );
      console.log(newStudent);
      if (confirm('Voulez vous débloquer cette Etudiant ?'))
      {
        this.studentService.updateStudent(newStudent).subscribe(
          (res) => {
            console.log(res);
            this.listStudent[index] = newStudent;
            this.toast.info({
              detail: ' Information',
              summary: 'Etudiant est Déblouqué',
              duration: 2000,
            });
          },
          (err) => console.log(err)
        );
      }
  
    }
  }
}
