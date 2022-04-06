import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private getAllTeachersUrl = 'http://localhost:8080/teachers/all';
  private deleteTeacherUrl = 'http://localhost:8080/teachers/delete/';
  constructor(private http: HttpClient) {}

  getAllTeachers() {
    return this.http.get<any>(this.getAllTeachersUrl);
  }
  deleteTeacher(id: Number) {
    return this.http.delete<any>(this.deleteTeacherUrl + id);
  }
}
