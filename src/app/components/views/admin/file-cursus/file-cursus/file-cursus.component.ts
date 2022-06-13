import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-file-cursus',
  templateUrl: './file-cursus.component.html',
  styleUrls: ['./file-cursus.component.css'],
})
export class FileCursusComponent implements OnInit {
  ListFiles: any[] = [];
  constructor(private documentService: UploadFileService,private toast :NgToastService) {}

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
