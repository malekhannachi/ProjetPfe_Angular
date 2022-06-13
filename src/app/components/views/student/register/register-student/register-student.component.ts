import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Groupe } from 'src/app/models/groupe';
import { Promotion } from 'src/app/models/promotion';
import { Student } from 'src/app/models/student';
import { GroupeService } from 'src/app/services/groupe.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css'],
})
export class RegisterStudentComponent implements OnInit {
  registerForm: FormGroup;
  promotionList: any[] = [];
  groupeList: any[] = [];
  products = [];

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router,
    private toast: NgToastService,
    private promotionService: PromotionService,
    private groupeService: GroupeService
  ) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z .'-]+"),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("[a-zA-Z']+"),
      ]),
      cin: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
        Validators.pattern("^[0-9]*$")

      
      ]),
      num_ins: new FormControl('', [
        Validators.required,
        Validators.min(10000000),
        Validators.max(99999999),
      ]),
      date: new FormControl('', [Validators.required]),
      lieu_naissance: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z'-]+"),
      ]),
      promotion: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z'-]+"),
      ]),
      groupe: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9'-]+"),
      ]),
      nature_bac: new FormControl('', [Validators.required]),
      annee_bac: new FormControl('', [
        Validators.required,
        Validators.max(2021),
        Validators.min(2005),
      ]),
    };
    this.registerForm = this.fb.group(formControls);
  }
  get firstname() {
    return this.registerForm.get('firstname');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
  get cin() {
    return this.registerForm.get('cin');
  }
  get num_ins() {
    return this.registerForm.get('num_ins');
  }
  get lieu_naissance() {
    return this.registerForm.get('lieu_naissance');
  }
  get date() {
    return this.registerForm.get('date');
  }
  get promotion() {
    return this.registerForm.get('promotion');
  }
  get groupe() {
    return this.registerForm.get('groupe');
  }
  get nature_bac() {
    return this.registerForm.get('nature_bac');
  }
  get annee_bac() {
    return this.registerForm.get('annee_bac');
  }

  ngOnInit(): void {
    let isLoggedInStudent = this.studentService.isLoggedInStudent();
    if (isLoggedInStudent) {
      this.router.navigate(['/student/account-student']);
    }
    this.promotionService.getAllPromotion().subscribe((result) => {
      this.promotionList = result;
      console.log(this.promotionList);
    });
  }

  registerStudent() {
    let data = this.registerForm.value;

    let student = new Student(
      undefined,
      data.cin,
      data.num_ins,
      data.firstname,
      data.lastname,
      data.date,
      data.lieu_naissance,

      data.nature_bac,
      data.annee_bac,
      true,
      new Promotion(data.promotion.id),
      new Groupe(data.groupe.id)
    );
    console.log(student);
    if (
      data.cin == 0 ||
      data.num_ins == 0 ||
      data.firstname == 0 ||
      data.lastname == 0 ||
      data.date == 0 ||
      data.lieu_naissance == 0 ||
      data.annee_bac == 0 ||
      data.nature_bac == 0 ||
      data.promotion == 0 ||
      data.groupe == 0
    ) {
      this.toast.error({
        detail: 'Attention',
        summary: 'Rempir votre champs',
        duration: 2000,
      });
    } else {
      this.studentService.registerStudent(student).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['student/auth-student']);
          this.toast.success({
            detail: ' Message',
            summary: 'la compte est creé',
            duration: 2000,
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  onChange() {

   
    this.groupeService.getAllGroupe().subscribe((result) => {
      this.groupeList = result
      console.log(this.groupeList);
      
   
     
    });
  }
}
