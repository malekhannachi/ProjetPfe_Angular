import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Groupe } from '../models/groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  private addGroupeUrl = 'http://localhost:8080/groupe/add';
  private updateGroupeUrl = 'http://localhost:8080/groupe/update';
  private getAllGroupeUrl = 'http://localhost:8080/groupe/all';
  private getOneGroupeUrl = 'http://localhost:8080/groupe/one/';
  private deleteGroupeUrl = 'http://localhost:8080/groupe/delete/';
  constructor(private http: HttpClient) { }


  getAllGroupe() {
    return this.http.get<any>(this.getAllGroupeUrl);
  }
  addGroupe(groupe:Groupe ) {
    return this.http.post<any>(this.addGroupeUrl, groupe);
  }

  updateGroupe(groupe: Groupe) {
    return this.http.patch<any>(this.updateGroupeUrl, groupe);
  }
  getOneGroupe(id: any) {
    return this.http.get<any>(this.getOneGroupeUrl + id);
  }

  deleteGroupe(id: Number) {
    return this.http.delete<any>(this.deleteGroupeUrl + id);
  }
}
