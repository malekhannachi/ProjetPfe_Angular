import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Groupe } from 'src/app/models/groupe';
import { Promotion } from 'src/app/models/promotion';
import { GroupeService } from 'src/app/services/groupe.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-update-groupe',
  templateUrl: './update-groupe.component.html',
  styleUrls: ['./update-groupe.component.css'],
})
export class UpdateGroupeComponent implements OnInit {
  updateForm: FormGroup;
  promotionList: any[] = [];
  id: any;
  constructor(
    private fb: FormBuilder,
    private groupeService: GroupeService,
    private router: Router,
    private promotionService: PromotionService,
    private toast: NgToastService,
    private route: ActivatedRoute
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
    this.updateForm = this.fb.group(formControls);
  }
  get name() {
    return this.updateForm.get('name');
  }
  get promotion() {
    return this.updateForm.get('promotion');
  }

  ngOnInit(): void {
    this.promotionService.getAllPromotion().subscribe((result) => {
      this.promotionList = result;
      console.log(this.promotionList);
    });

    this.getById();
  }

  getById() {
    let idGroupe = this.route.snapshot.params['id'];
    this.id = idGroupe;
    console.log(idGroupe);
    this.groupeService.getOneGroupe(idGroupe).subscribe((result) => {
      let group = result;
      this.updateForm.patchValue({
        name: group.namegroupe,
      });
    });
  }

  UpdateGroupe() {
    let data = this.updateForm.value;

    let groupe = new Groupe(
      this.id,
      data.name,
      new Promotion(data.promotion.id)
    );
    console.log(groupe);

    this.groupeService.updateGroupe(groupe).subscribe((result) => {
      console.log(result);
      this.toast.warning({
        detail: ' Message',
        summary: 'groupe est modifié',
        duration: 2000,
      });
      this.router.navigate(['admin/groupe']);
    });
  }
}
