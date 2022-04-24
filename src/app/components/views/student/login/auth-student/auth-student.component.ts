import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    private route: Router
  ) {
    let formControlls = {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    };
    this.loginForm = this.fb.group(formControlls);
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
    let student = new Student(undefined, data.email, data.password);
    console.log(student);
    this.studentService.loginStudent(student).subscribe(
      (result) => {
        console.log(result);
        let token = result.token;
        localStorage.setItem('TokenStudent', token);
        this.route.navigate(['student/account-student']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
