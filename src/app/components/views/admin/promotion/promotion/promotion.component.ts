import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css'],
})
export class PromotionComponent implements OnInit {
  promotionList: any[] = [];
  constructor(private prS: PromotionService) {}

  ngOnInit(): void {
    this.prS.getAllPromotion().subscribe((result) => {
      this.promotionList = result;
    });
  }

  deletePromtion(promotion: any) {
    this.prS.deletePromotion(promotion.id).subscribe(result=>{
      console.log(result);
      let index =this.promotionList.indexOf(promotion)
      this.promotionList.splice(index,1)
      
    })
  }
}
