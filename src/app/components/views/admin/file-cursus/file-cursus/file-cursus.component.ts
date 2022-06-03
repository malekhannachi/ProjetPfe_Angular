import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-cursus',
  templateUrl: './file-cursus.component.html',
  styleUrls: ['./file-cursus.component.css']
})
export class FileCursusComponent implements OnInit {
  ListFiles:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }
  delete(item:any){
    
  }
}
