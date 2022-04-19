import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../models/admin';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private registerAdminUrl = 'http://localhost:8080/Admin/register';
  private loginAdminUrl = 'http://localhost:8080/admin/login';
  constructor(private http: HttpClient) {}

  registerAdmin(admin: Admin) {
    return this.http.post<any>(this.registerAdminUrl, admin);
  }

  loginAdmin(admin: Admin) {
    return this.http.post<any>(this.loginAdminUrl, admin);
  }

  isLoggedInAdmin() {
    let token = localStorage.getItem('myToken');

    if (token) {
      return true;
    } else {
      return false;
    }
  }

  saveDataProfil() {
    const helper = new JwtHelperService();
    let myRawToken = localStorage.getItem('myToken') || '{}';
    const decodedToken = helper.decodeToken(myRawToken);
    return decodedToken.data;
  }
}
