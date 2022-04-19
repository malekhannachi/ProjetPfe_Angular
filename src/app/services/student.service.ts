import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private getAllStudentsUrl = 'http://localhost:8080/students/all';
  private deleteStudentUrl = 'http://localhost:8080/students/delete/';
  private updateStudentUrl = 'http://localhost:8080/students/update';

  //login and register
  private registerStudentUrl = 'http://localhost:8080/students/register';
  private loginStudentUrl = 'http://localhost:8080/students/login';
  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get<any>(this.getAllStudentsUrl);
  }
  deleteStudent(id: Number) {
    return this.http.delete<any>(this.deleteStudentUrl + id);
  }

  updateStudent(student: any) {
    return this.http.patch<any>(this.updateStudentUrl, student);
  }

  //register and login for Student

  registerStudent(student: Student) {
    return this.http.post<any>(this.registerStudentUrl, student);
  }

  loginStudent(student: Student) {
    return this.http.post<any>(this.loginStudentUrl, student);
  }

  //test Student is logged or no
  isLoggedInStudent() {
    let token = localStorage.getItem('TokenStudent');

    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
