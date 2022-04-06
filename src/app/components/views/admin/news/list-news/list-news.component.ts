import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css'],
})
export class ListNewsComponent implements OnInit {
  ListNews: any[] = [];

  constructor(
    private newsService: NewsService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(
      (res) => {
        this.ListNews = res;

        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteNews(news: any) {
    this.newsService.deleteNews(news.id).subscribe(
      (result) => {
        console.log(result);
        this.toast.error({
          detail: 'Error Message',
          summary: result.Message,
        });
        let index = this.ListNews.indexOf(news);
        this.ListNews.splice(index, 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
