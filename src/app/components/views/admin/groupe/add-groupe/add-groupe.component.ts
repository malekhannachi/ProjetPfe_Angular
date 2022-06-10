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
import { GroupeService } from 'src/app/services/groupe.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css'],
})
export class AddGroupeComponent implements OnInit {
  addForm: FormGroup;

  promotionList: any[] = [];
  constructor(
    private fb: FormBuilder,
    private groupeService: GroupeService,
    private route: Router,
    private promotionService: PromotionService,
    private toast: NgToastService
  ) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z 0-9 , é à-ô .'-]+"),
        Validators.minLength(4),
      ]),
      promotion: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z  A-Z 0-9 , .'-]+"),
        Validators.maxLength(200),
      ]),
    };
    this.addForm = this.fb.group(formControls);
  }

  get name() {
    return this.addForm.get('name');
  }
  get promotion() {
    return this.addForm.get('promotion');
  }

  ngOnInit(): void {
    this.promotionService.getAllPromotion().subscribe((result) => {
      this.promotionList = result;
      console.log(this.promotionList);
    });
  }

  addGroupe() {
    let data = this.addForm.value;
    console.log(data);
    let group = new Groupe(
      undefined,
      data.name,
      new Promotion(data.promotion.id)
    );
    console.log(group);

    if (data.name == 0 || data.promotion == 0) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
        duration: 2000,
      });
    } else {
      this.groupeService.addGroupe(group).subscribe((result) => {
        console.log(result);
        this.route.navigate(['admin/groupe'])
        this.toast.success({
          detail: ' Message',
          summary: 'groupe est ajouté',
          duration: 2000,
        });
      });
    }
  }
}
