import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ListNews: any[] = [];
  imgURL: any[] =[];

  numberOfcat: number = 0;
  limit: any = 3;
  totalResult: any;
  currentPage: number = 1;
  paginationNextLabel: string = '';
  paginationPreviousLabel: string = '';
  links: any;
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllNews(this.currentPage, this.limit).subscribe(
      (res) => {
        this.ListNews = res;

        this.numberOfcat = res.length;
        this.totalResult = res.length;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  selectPage(pageNumber: any){
    console.log('page number ---> ', pageNumber);
    this.currentPage = pageNumber;
    this.newsService.getAllNews(this.currentPage, this.limit).subscribe(res => {
      this.ListNews = res
      this.numberOfcat = res.length
      this.totalResult = res.length
    })

  }


}
