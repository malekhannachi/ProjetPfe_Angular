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
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css'],
})
export class RegisterTeacherComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fs: FormBuilder,
    private teacherService: TeacherService,
    private router: Router
  ) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      num_tel: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
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

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
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
    this.teacherService.registerTeacher(teacher).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/teacher/auth-teacher']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
