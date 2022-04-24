import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private getAllTeachersUrl = 'http://localhost:8080/teachers/all';
  private deleteTeacherUrl = 'http://localhost:8080/teachers/delete/';
  private updateTeacherUrl = 'http://localhost:8080/teachers/update';
  //login
  private registerTeacherUrl = 'http://localhost:8080/teachers/register';
  private loginTeacherUrl = 'http://localhost:8080/teachers/login';

  constructor(private http: HttpClient, private route: Router) {}

  getAllTeachers(): Observable<Object> {
    return this.http.get<Object>(this.getAllTeachersUrl);
  }
  deleteTeacher(id: Number) {
    return this.http.delete<any>(this.deleteTeacherUrl + id);
  }

  updateTeacher(teacher: Teacher) {
    return this.http.patch<any>(this.updateTeacherUrl, teacher);
  }
  //register and login for teacher

  registerTeacher(teacher: Teacher) {
    return this.http.post<any>(this.registerTeacherUrl, teacher);
  }

  loginTeacher(teacher: Teacher) {
    return this.http.post<any>(this.loginTeacherUrl, teacher);
  }

  //test teacher is logged or no

  isLoggedInTeacher() {
    let token = localStorage.getItem('TokenTeacher');

    if (token) {
      return true;
    } else {
     
      return false;
    }
  }

  saveDataProfil() {
    const helper = new JwtHelperService();
    let myRawToken: any = localStorage.getItem('TokenTeacher');
    const decodedToken = helper.decodeToken(myRawToken);
    return decodedToken.data;
  }
}
