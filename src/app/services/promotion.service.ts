import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promotion } from '../models/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  
  private addPromotionUrl = 'http://localhost:8080/promotion/add';
  private updatePromotionUrl = 'http://localhost:8080/promotion/update';
  private getAllPromotionUrl = 'http://localhost:8080/promotion/all';
  private getOnePromotionUrl = 'http://localhost:8080/promotion/one/';
  private deletePromotionUrl = 'http://localhost:8080/promotion/delete/';
  constructor(private http: HttpClient) { }


  getAllPromotion() {
    return this.http.get<any>(this.getAllPromotionUrl);
  }
  addPromotion(promotion:Promotion ) {
    return this.http.post<any>(this.addPromotionUrl, promotion);
  }

  updatePromotion(promotion: Promotion) {
    return this.http.patch<any>(this.updatePromotionUrl, promotion);
  }
  getOnePromotion(id: any) {
    return this.http.get<any>(this.getOnePromotionUrl + id);
  }

  deletePromotion(id: Number) {
    return this.http.delete<any>(this.deletePromotionUrl + id);
  }
}
