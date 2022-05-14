import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private addEventUrl = 'http://localhost:8080/event/add';
  private updateEventUrl = 'http://localhost:8080/event/update';
  private getAllEventUrl = 'http://localhost:8080/event/all';
  private getOneEventUrl = 'http://localhost:8080/event/one/';
  private deleteEventUrl = 'http://localhost:8080/event/delete/';
  constructor(private http: HttpClient) {}

  getAllEvent() {
    return this.http.get<any>(this.getAllEventUrl);
  }
  addEvent(event: Event) {
    return this.http.post<any>(this.addEventUrl, event);
  }

  updateEvent(event: Event) {
    return this.http.patch<any>(this.updateEventUrl, event);
  }
  getOneEvent(id: any) {
    return this.http.get<any>(this.getOneEventUrl + id);
  }

  deleteEvent(id: Number) {
    return this.http.delete<any>(this.deleteEventUrl + id);
  }
}
