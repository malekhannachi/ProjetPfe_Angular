import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Promotion } from 'src/app/models/promotion';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.css']
})
export class UpdatePromotionComponent implements OnInit {

  updateProm: FormGroup;
  id: any;
  constructor(
    private fb: FormBuilder,
    private prmService: PromotionService,
    private router: Router,  private route: ActivatedRoute,private toast:NgToastService
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
    this.updateProm = this.fb.group(formControles);
  }

  get name() {
    return this.updateProm.get('name');
  }
  get year() {
    return this.updateProm.get('description');
  }
 
  ngOnInit(): void {
    let idProm = this.route.snapshot.params['id'];
    this.id = idProm;
    console.log(idProm);
    this.prmService.getOnePromotion(idProm).subscribe(res=>{
      console.log(res);
      let promotion = res;
      this.updateProm.patchValue({
        name: promotion.name_pro,
        year:promotion.year_prp ,
      })
      
    })
  }
  updatepromotion(){
    let data = this.updateProm.value;

    let promotion = new Promotion(this.id, data.name, data.year);
    console.log(promotion);

    this.prmService.updatePromotion(promotion).subscribe(
      (result) => {
        console.log(result);
        this.toast.warning({
          detail: ' Message',
          summary: 'promotion est modifié',
          duration: 2000,
        });
        this.router.navigate(['admin/promotion']);
      }
    );

  }
}
