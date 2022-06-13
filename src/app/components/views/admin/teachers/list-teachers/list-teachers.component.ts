import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-teachers',
  templateUrl: './list-teachers.component.html',
  styleUrls: ['./list-teachers.component.css'],
})
export class ListTeachersComponent implements OnInit {
  listTeacher: any = [];
  condition?: boolean;
  constructor(
    private teacherService: TeacherService,
    private toast: NgToastService
  ) {}

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
    if (confirm('Voulez vous supprimer cette Enseignant ?')) {
      this.teacherService.deleteTeacher(teacher.id_teacher).subscribe(
        (res) => {
          let index = this.listTeacher.indexOf(teacher);
          this.listTeacher.splice(index, 1);
          console.log(res);

          this.toast.error({
            detail: ' Information',
            summary: 'Enseignant est Supprimé',
            duration: 2000,
          });
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  updateTeacherState(teacher: Teacher) {
    let index = this.listTeacher.indexOf(teacher);
    if (teacher.accountState == true) {
      let newTeacher = new Teacher(
        teacher.id_teacher,
        teacher.cin,
        teacher.matricule,
        teacher.firstname,
        teacher.lastname,
        teacher.num_tel,
        teacher.email,
        teacher.rib,
        teacher.grade,
        teacher.departement,
        false
      );
      if (confirm('Voulez vous bloquer cette Enseignant ?')) {
        this.teacherService.updateTeacher(newTeacher).subscribe(
          (res) => {
            console.log(res);
            this.listTeacher[index] = newTeacher;
            this.toast.info({
              detail: ' Information',
              summary: 'Enseignant est Bloqué',
              duration: 2000,
            });
          },
          (err) => console.log(err)
        );
      }
    } else {
      let newTeacher = new Teacher(
        teacher.id_teacher,
        teacher.cin,
        teacher.matricule,
        teacher.firstname,
        teacher.lastname,
        teacher.num_tel,
        teacher.email,
        teacher.rib,
        teacher.grade,
        teacher.departement,
        true
      );
      if (confirm('Voulez vous débloquer cette Enseignant ?')) {
        this.teacherService.updateTeacher(newTeacher).subscribe(
          (res) => {
            console.log(res);
            this.listTeacher[index] = newTeacher;
            this.toast.info({
              detail: ' Message',
              summary: 'Enseignant est Déblouqué',
              duration: 2000,
            });
          },
          (err) => console.log(err)
        );
      }
    }
  }
}
