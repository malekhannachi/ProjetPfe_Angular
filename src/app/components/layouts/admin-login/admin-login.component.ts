import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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
    private adminService: AdminService,
    private toast: NgToastService
  ) {
    let formControls = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
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

  ngOnInit(): void {
    let isLoggedInAdmin = this.adminService.isLoggedInAdmin();
    if (isLoggedInAdmin) {
      this.router.navigate(['/admin']);
    }
  }

  loginAdmin() {
    let data = this.loginForm.value;
    console.log(this.loginForm.value.email);

    let admin = new Admin(
      undefined,
      undefined,
      undefined,
      data.email,
      data.password
    );
    console.log(admin);

    // test form vide ou non
    if (data.email == 0 && data.password == 0) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
      });
    } else {
      // login admin
      this.adminService.loginAdmin(admin).subscribe(
        (res) => {
          console.log(res);
          this.toast.success({
            detail: 'Success Message',
            summary: 'connexion réussie',
            duration: 5000,
          });
          let token = res.token;
          localStorage.setItem('myToken', token);

          this.router.navigate(['/admin']);
        },
        (err) => {
          console.log(err.Message);
          this.toast.error({
            detail: 'Error Message',
            summary: 'la connexion a échoué, réessayez plus tard',
          });
        }
      );
    }
  }
}
