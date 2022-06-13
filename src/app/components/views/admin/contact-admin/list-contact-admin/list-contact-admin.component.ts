import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ContacterAdminService } from 'src/app/services/contacter-admin.service';

@Component({
  selector: 'app-list-contact-admin',
  templateUrl: './list-contact-admin.component.html',
  styleUrls: ['./list-contact-admin.component.css'],
})
export class ListContactAdminComponent implements OnInit {
  listContactAdmin: any = [];
  constructor(
    private contactAdminService: ContacterAdminService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.contactAdminService.getAllcontactAdmin().subscribe(
      (response) => {
        this.listContactAdmin = response;
        console.log(this.listContactAdmin);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(contactAdmin: any) {
    if (window.confirm('Voulez vous supprimer cette contact ?')) {
      this.contactAdminService
        .deletecontactAdmin(contactAdmin.id_contact)
        .subscribe(
          (result) => {
            let index = this.listContactAdmin.indexOf(contactAdmin);
            this.listContactAdmin.splice(index, 1);
            console.log(result);
            this.toast.error({
              detail: ' Message',
              summary: 'Message est Supprimé',
              duration: 2000,
            });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
