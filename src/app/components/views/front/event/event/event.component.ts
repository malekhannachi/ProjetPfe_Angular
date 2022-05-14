import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  ListNews: any[] = [];
  imgURL: any[] =[];
  constructor(private newsService: NewsService) {}

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

}
