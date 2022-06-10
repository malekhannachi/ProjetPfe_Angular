import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentEns } from '../models/document-ens';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private coursePath = "http://localhost:8080/file/"
  constructor(private  http: HttpClient) { }


    addDocument(course: DocumentEns, course_image: File) {
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
   
      const formaData = new FormData();
      formaData.append("course_image", course_image);
      formaData.append("course", JSON.stringify(course));    
   
      return this.http.post<any>(this.coursePath + "add", formaData, {'headers': headers});
    }

  getAllDocument() {
    return this.http.get<any>(this.coursePath + "all");
  }
  getDocumentById(id: Number) {
    return this.http.get<any>(this.coursePath + id);
  }

  deleteDocument(id: Number) {
    return this.http.delete<any>(this.coursePath  + "delete/" + id);
  }
}
