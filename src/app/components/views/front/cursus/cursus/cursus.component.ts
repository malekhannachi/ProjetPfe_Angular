import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cursus',
  templateUrl: './cursus.component.html',
  styleUrls: ['./cursus.component.css'],
})
export class CursusComponent implements OnInit {
  CursusForm!: FormGroup;
  constructor(private fb: FormBuilder, private toast: NgToastService) {
    let formControllers = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      tel: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      cin: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      date: new FormControl('', [Validators.required]),
      situation: new FormControl('', [Validators.required]),

      adrs: new FormControl('', [Validators.required]),
    };
    this.CursusForm = this.fb.group(formControllers);
  }

  get firstname() {
    return this.CursusForm.get('firstname');
  }

  get lastname() {
    return this.CursusForm.get('lastname');
  }
  get email() {
    return this.CursusForm.get('email');
  }
  get situation() {
    return this.CursusForm.get('situation');
  }
  get adrs() {
    return this.CursusForm.get('adrs');
  }
  get tel() {
    return this.CursusForm.get('tel');
  }

  get cin() {
    return this.CursusForm.get('cin');
  }
  get date() {
    return this.CursusForm.get('date');
  }

  ngOnInit(): void {}

  curcusClick() {
    let data = this.CursusForm.value;

    console.log(data);

    if (
      data.name == 0 ||
      data.email == 0 ||
      data.message == 0 ||
      data.tel == 0 ||
      data.subject == 0
    ) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
      });
    }
  }
}
