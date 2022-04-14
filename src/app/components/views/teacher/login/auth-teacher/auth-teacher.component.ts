import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-auth-teacher',
  templateUrl: './auth-teacher.component.html',
  styleUrls: ['./auth-teacher.component.css'],
})
export class AuthTeacherComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private router: Router
  ) {
    let formControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };

    this.loginForm = this.fb.group(formControls);
  }

  ngOnInit(): void {}

  loginteacher() {
    let data = this.loginForm.value;
    let teacher = new Teacher(
      undefined,
      data.email,
      undefined,
      undefined,
      undefined,
      data.password,
      undefined,
      undefined,
      undefined,
      undefined
    );
    console.log(data);
    this.teacherService.loginTeacher(teacher).subscribe(
      (res) => {
        console.log(res);

        let token = res.token;
        localStorage.setItem('TokenTeacher', token);

        this.router.navigate(['/teacher']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
