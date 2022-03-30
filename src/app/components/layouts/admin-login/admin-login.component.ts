import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    let formControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    };

    this.loginForm = this.fb.group(formControls);
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}

  loginAdmin() {
    this.router.navigate(['/admin']);
    console.log(this.loginForm.value);
  }
}
