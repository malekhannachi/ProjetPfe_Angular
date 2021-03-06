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
   
  imgURL: any[] =[];
  limit: any = 4;
  totalResult: any;
  currentPage: number = 1;
  constructor(
    private newsService: NewsService,
    private toast: NgToastService
  ) {}
  

  ngOnInit(): void {
    this.newsService.getAllNews(this.currentPage, this.limit).subscribe(
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
          detail: ' Message',
          summary: 'Actualité est Supprimé',
          duration: 2000,
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


