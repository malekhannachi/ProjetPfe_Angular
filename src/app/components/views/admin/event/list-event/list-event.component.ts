import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  ListEvent: any[] = [];
   
  constructor(private eventService:EventService,private toast:NgToastService) {

   }

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

  deleteEvent(event:any){
    this.eventService.deleteEvent(event.id).subscribe(
      (result) => {
        console.log(result);
       
        let index = this.ListEvent.indexOf(event);
        this.ListEvent.splice(index, 1);
        this.toast.error({
          detail: ' Message',
          summary: 'évenment est Supprimé',
          duration: 2000,
        });
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
