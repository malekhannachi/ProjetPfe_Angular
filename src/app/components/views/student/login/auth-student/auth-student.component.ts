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
  selector: 'app-auth-student',
  templateUrl: './auth-student.component.html',
  styleUrls: ['./auth-student.component.css'],
})
export class AuthStudentComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private route: Router,
    private toast: NgToastService
  ) {
    let formControlls = {
      cin: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };
    this.loginForm = this.fb.group(formControlls);
  }

  get cin() {
    return this.loginForm.get('cin');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    let isLoggedInStudent = this.studentService.isLoggedInStudent();
    if (isLoggedInStudent) {
      this.route.navigate(['/student/account-student']);
    }
  }

  loginStudent() {
    let data = this.loginForm.value;
    console.log(data);
    let student = new Student(undefined, data.cin, data.password);
    console.log(student);

    if (data.cin == 0 || data.password == 0) {
      this.toast.error({
        detail: 'Attention',
        summary: 'Remplir Votre champs',
        duration: 2000,
      });
    } else {
      this.studentService.loginStudent(student).subscribe(
        (result) => {
          console.log(result);
          let token = result.token;
          localStorage.setItem('TokenStudent', token);
          this.route.navigate(['student/account-student']);
        },
        (error) => {
          console.log(error);
          this.toast.error({
            detail: 'error Message',
            summary: error.error.message,
            duration: 2000,
          });
        }
      );
    }
  }
}
