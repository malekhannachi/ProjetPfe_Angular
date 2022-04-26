import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContacterAdminService {
  private getAllcontactAdminUrl = 'http://localhost:8080/contactadmin/all';
  private getOneContactAdminUrl = 'http://localhost:8080/contactadmin/one/';
  private addContactAdminUrl = 'http://localhost:8080/contactadmin/add';
  private deletecontactAdminUrl = 'http://localhost:8080/contactadmin/delete/';
  constructor(private http: HttpClient) {}

  getAllcontactAdmin() {
    return this.http.get<any>(this.getAllcontactAdminUrl);
  }
  deletecontactAdmin(id: Number) {
    return this.http.delete<any>(this.deletecontactAdminUrl + id);
  }

  addContactAdmin(contact:Contact){
    return this.http.post<any>(this.addContactAdminUrl,contact)
  }
}
