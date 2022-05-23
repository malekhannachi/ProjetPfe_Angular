import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { DemandeCursus } from 'src/app/models/demande-cursus';
import { DemandeCursusService } from 'src/app/services/demande-cursus.service';

@Component({
  selector: 'app-cursus',
  templateUrl: './cursus.component.html',
  styleUrls: ['./cursus.component.css'],
})
export class CursusComponent implements OnInit {
  CursusForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private demandeService: DemandeCursusService
  ) {
    let formControllers = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
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
    let demandeCurus = new DemandeCursus(
      undefined,
      data.firstname,
      data.lastname,
      data.cin,
      data.tel,
      data.email,
      data.adrs,
      data.date,
      data.situation
    );
    console.log(data);
    console.log(demandeCurus);

    if (
      (data.firstname == 0 || data.lastname == 0 || data.cin == 0 || data.tel,
      data.email == 0 ||
        data.date == 0 ||
        data.situation == 0 ||
        data.adrs == 0)
    ) {
      this.toast.info({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
      });
    } else {
      this.demandeService.addDemandeCursus(demandeCurus).subscribe((res) => {
        console.log(res);
        this.toast.success({
       
          summary:
            'enregistré avec succès. nous vous contacterons dès que possible',
        });
      });
    }
  }
}
