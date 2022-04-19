import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-auth-student',
  templateUrl: './auth-student.component.html',
  styleUrls: ['./auth-student.component.css'],
})
export class AuthStudentComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private studentService: StudentService) {
    let formControlls = {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    };
    this.loginForm = this.fb.group(formControlls);
  }

  ngOnInit(): void {}

  loginStudent() {
    let data = this.loginForm.value;
    console.log(data);
    let student = new Student(undefined, data.email, data.password);
    console.log(student);
    this.studentService.loginStudent(student).subscribe(
      (result) => {console.log(result);
      },
      (error) => {console.log(error);
      }
    );
  }
}
