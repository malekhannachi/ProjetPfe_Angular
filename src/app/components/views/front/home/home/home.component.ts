import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ListNews: any[] = [];
  news: any[] = [];
  titre: string = '';
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(
      (res) => {
        this.ListNews = res;
        this.news= res

        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  filterByName(name: string) {
    this.news = this.ListNews.filter((c) => c.name?.includes(name));
  }
}
