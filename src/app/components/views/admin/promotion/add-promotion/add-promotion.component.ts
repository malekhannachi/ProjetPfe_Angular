import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Promotion } from 'src/app/models/promotion';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css'],
})
export class AddPromotionComponent implements OnInit {
  addProm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private prmService: PromotionService,
    private route: Router
  ) {
    let formControles = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z 0-9 , é à-ô .'-]+"),
        Validators.minLength(4),
      ]),
      year: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z  A-Z 0-9 , .'-]+"),
        Validators.maxLength(200),
      ]),
     
    };
    this.addProm = this.fb.group(formControles);
  }

  get name() {
    return this.addProm.get('name');
  }
  get year() {
    return this.addProm.get('description');
  }
 

  ngOnInit(): void {}

  addpromotion() {

    let data = this.addProm.value;
    let promotion = new Promotion(undefined, data.name, data.year);
    console.log(promotion);
    console.log(data);
    this.prmService.addPromotion(promotion).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['admin/promotion']);
      }
    );
  }
}
