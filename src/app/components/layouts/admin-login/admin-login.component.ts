import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService
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

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}

  loginAdmin() {
    let data = this.loginForm.value;

    let admin = new Admin(
      undefined,
      undefined,
      undefined,
      data.email,
      data.password
    );
    console.log(admin);

    this.adminService.loginAdmin(admin).subscribe(
      (res) => {
        console.log(res);
        let token = res.token;
        localStorage.setItem('myToken', token);
        this.router.navigate(['/admin']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
