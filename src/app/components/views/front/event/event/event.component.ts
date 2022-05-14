import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  ListEvent: any[] = [];
  constructor(private eventService:EventService) {}

  ngOnInit(): void {
    this.eventService.getAllEvent().subscribe(
      (res) => {
        this.ListEvent = res;
    
        
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
