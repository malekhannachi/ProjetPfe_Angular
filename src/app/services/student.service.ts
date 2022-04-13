import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private getAllStudentsUrl = 'http://localhost:8080/students/all';
  private deleteStudentUrl = 'http://localhost:8080/students/delete/';
  private updateStudentUrl= 'http://localhost:8080/students/update'
  constructor(private http: HttpClient) {}

  getAllStudents() {
    return this.http.get<any>(this.getAllStudentsUrl);
  }
  deleteStudent(id: Number) {
    return this.http.delete<any>(this.deleteStudentUrl + id);
  }

  updateStudent(student:any){
    return this.http.patch<any>(this.updateStudentUrl,student)
  }
}
