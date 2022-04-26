import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private toast: NgToastService
  ) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z .'-]+"),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z']+"),
      ]),
      cin: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      num_ins: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      date: new FormControl('', [Validators.required]),
      lieu_naissance: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z'-]+"),
      ]),
      classe: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z'-]+"),
      ]),
      groupe: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9'-]+"),
      ]),
      nature_bac: new FormControl('', [Validators.required]),
      annee_bac: new FormControl('', [
        Validators.required,
        Validators.max(2021),
        Validators.min(2015),
      ]),
    };
    this.registerForm = this.fb.group(formControls);
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
  get num_ins() {
    return this.registerForm.get('num_ins');
  }
  get lieu_naissance() {
    return this.registerForm.get('lieu_naissance');
  }
  get date() {
    return this.registerForm.get('date');
  }
  get classe() {
    return this.registerForm.get('classe');
  }
  get groupe() {
    return this.registerForm.get('groupe');
  }
  get nature_bac() {
    return this.registerForm.get('nature_bac');
  }
  get annee_bac() {
    return this.registerForm.get('annee_bac');
  }

  ngOnInit(): void {
    let isLoggedInStudent = this.studentService.isLoggedInStudent();
    if (isLoggedInStudent) {
      this.router.navigate(['/student/account-student']);
    }
  }

  registerStudent() {
    let data = this.registerForm.value;
    console.log(data);
    let student = new Student(
      undefined,
      data.cin,
      data.num_ins,
      data.firstname,
      data.lastname,
      data.date,
      data.lieu_naissance,
      data.classe,
      data.groupe,
      data.nature_bac,
      data.annee_bac
    );
    console.log(student);
    if (
      data.cin == 0 ||
      data.num_ins == 0 ||
      data.firstname == 0 ||
      data.lastname == 0 ||
      data.date == 0 ||
      data.lieu_naissance == 0 ||
      data.annee_bac == 0 ||
      data.nature_bac == 0 ||
      data.class == 0 ||
      data.group == 0
    ) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
        duration: 2000,
      });
    } else {
      this.studentService.registerStudent(student).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['student/auth-student']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
