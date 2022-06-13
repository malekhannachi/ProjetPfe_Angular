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
  selector: 'app-auth-teacher',
  templateUrl: './auth-teacher.component.html',
  styleUrls: ['./auth-teacher.component.css'],
})
export class AuthTeacherComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private router: Router,
    private toast: NgToastService
  ) {
    let formControls = {
      cin: new FormControl('', [
        Validators.required,
        Validators.max(99999999),
        Validators.min(10000000),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };

    this.loginForm = this.fb.group(formControls);
  }

  get cin() {
    return this.loginForm.get('cin');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    let isLoggedInTeacher = this.teacherService.isLoggedInTeacher();
    if (isLoggedInTeacher) {
      this.router.navigate(['/teacher/account-teacher']);
    }
  }

  loginteacher() {
    let data = this.loginForm.value;
    let teacher = new Teacher(
      undefined,
      data.cin,
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
    console.log(teacher);

    if (data.cin == 0 || data.password == 0) {
      this.toast.error({
        detail: 'Attention',
        summary: 'Remplir Votre champs',
        duration: 2000,
      });
    } else {
      this.teacherService.loginTeacher(teacher).subscribe(
        (res) => {
          console.log(res);

          let token = res.token;
          localStorage.setItem('TokenTeacher', token);

          this.router.navigate(['teacher/timetable']);
        },
        (error) => {
          console.log(error);

       
            
            this.toast.error({
              detail: 'error Message',
              summary: error.error.message,
              duration: 2000,

             
              
            });

            console.log(error.error.message);
          })
        
  
    }
  }
}
