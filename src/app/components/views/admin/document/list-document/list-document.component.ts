import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  ListFiles: any[] = [];
  constructor(private documentService: DocumentService,private toast :NgToastService) { }

  ngOnInit(): void {
    this.documentService.getAllDocument().subscribe((result) => {
      this.ListFiles = result;
      console.log(this.ListFiles);
    });
  }

  delete(item: any) {
    if (confirm('Voulez vous débloquer ce document?')) {
      this.documentService.deleteDocument(item.id).subscribe((result) => {
        let index = this.ListFiles.indexOf(item);
        this.ListFiles.splice(index, 1);
        this.toast.error({
          detail: ' Message',
          summary: 'document est Supprimé',
          duration: 2000,
        })
        console.log(result);
      });}
  
  }
}
