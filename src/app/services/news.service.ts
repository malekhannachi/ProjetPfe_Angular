import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private addNewsUrl = 'http://localhost:8080/news/add';
  private updateNewsUrl = 'http://localhost:8080/news/update';
  private getAllNewsUrl = 'http://localhost:8080/news/all';
  private getOneNewsUrl = 'http://localhost:8080/news/one/';
  private deleteNewsUrl = 'http://localhost:8080/news/delete/';
  constructor(private http: HttpClient) {}

  getAllNews() {
    return this.http.get<any>(this.getAllNewsUrl);
  }
  addNews(news: News) {
    return this.http.post<any>(this.addNewsUrl, news);
  }

  updateNews(news: News) {
    return this.http.patch<any>(this.updateNewsUrl, news);
  }
  getOneNews(id: any) {
    return this.http.get<any>(this.getOneNewsUrl + id);
  }

  deleteNews(id: Number) {
    return this.http.delete<any>(this.deleteNewsUrl + id);
  }
}
