import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fs: FormBuilder,
    private teacherService: TeacherService,
    private router: Router,private toast:NgToastService
  ) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      num_tel: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      matricule: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      cin: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      departement: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      grade: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      rib: new FormControl('', [Validators.required, Validators.minLength(8)]),
    };
    this.registerForm = this.fs.group(formControls);
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get cin() {
    return this.registerForm.get('cin');
  }
  get num_tel() {
    return this.registerForm.get('num_tel');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get matricule() {
    return this.registerForm.get('matricule');
  }
  get grade() {
    return this.registerForm.get('grade');
  }
  get rib() {
    return this.registerForm.get('rib');
  }
  get departement() {
    return this.registerForm.get('departement');
  }

  ngOnInit(): void {
    let isLoggedInTeacher = this.teacherService.isLoggedInTeacher();
    if (isLoggedInTeacher) {
      this.router.navigate(['/teacher/account-teacher']);
    }
  }

  registerTeacher() {
    let data = this.registerForm.value;
    let teacher = new Teacher(
      undefined,
      data.cin,
      data.matricule,
      data.firstname,
      data.lastname,
      data.num_tel,
      data.email,
      data.rib,
      data.grade,
      data.departement
    );
    console.log(teacher);

    console.log(data);
    if (
      data.cin == 0 ||
      data.matricule == 0 ||
      data.firstname == 0 ||
      data.lastname == 0 ||
      data.num_tel == 0 ||
      data.email == 0 ||
      data.grade == 0 ||
      data.rib == 0 ||
      data.departement == 0
    ) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
        duration: 2000,
      });
    } else {
      this.teacherService.registerTeacher(teacher).subscribe(
        (result) => {
          console.log(result);
          this.toast.success({
            detail: ' Message',
            summary: 'la compte est creé',
            duration: 2000,
          });
          this.router.navigate(['/teacher/auth-teacher']);
        },
        (error) => {
          console.log(error);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Vérifier les Données ',
            duration: 2000,
          });
        }
      );
    }
  }
}
