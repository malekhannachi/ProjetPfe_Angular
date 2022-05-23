import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemandeCursus } from '../models/demande-cursus';

@Injectable({
  providedIn: 'root'
})
export class DemandeCursusService {


  private adddemandeCursusUrl = 'http://localhost:8080/demandecursus/add';
  private getAlldemandeCursusUrl = 'http://localhost:8080/demandecursus/all';
  private deletedemandeCursusUrl = 'http://localhost:8080/demandecursus/delete/';
  constructor(private http :HttpClient) { }

  
  getAllDemandeCursus() {
    return this.http.get<any>(this.getAlldemandeCursusUrl);
  }
  addDemandeCursus(demandeCursus:DemandeCursus ) {
    return this.http.post<any>(this.adddemandeCursusUrl, demandeCursus);
  }


 

  deleteDemandeCursus(id: Number) {
    return this.http.delete<any>(this.deletedemandeCursusUrl + id);
  }
}
