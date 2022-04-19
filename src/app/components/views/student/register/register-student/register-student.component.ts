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
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
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
      cin: new FormControl('', [Validators.required, Validators.minLength(8)]),
      num_ins: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      date: new FormControl('', [Validators.required, Validators.minLength(8)]),
      lieu_naissance: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      classe: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      groupe: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      nature_bac: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      annee_bac: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };
    this.registerForm = this.fb.group(formControls);
  }

  ngOnInit(): void {}
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
    this.studentService.registerStudent(student).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
