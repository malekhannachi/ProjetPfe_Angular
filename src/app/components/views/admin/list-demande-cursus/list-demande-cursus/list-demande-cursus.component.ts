import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { DemandeCursusService } from 'src/app/services/demande-cursus.service';

@Component({
  selector: 'app-list-demande-cursus',
  templateUrl: './list-demande-cursus.component.html',
  styleUrls: ['./list-demande-cursus.component.css'],
})
export class ListDemandeCursusComponent implements OnInit {
  listDemandeCursus: any[] = [];
  constructor(private demCurService: DemandeCursusService,private toast:NgToastService) {}

  ngOnInit(): void {
    this.demCurService.getAllDemandeCursus().subscribe((result) => {
      this.listDemandeCursus = result;
    });
  }

  delete(demandeCurus: any) {
    this.demCurService.deleteDemandeCursus(demandeCurus.id_cursus).subscribe((res) => {
      let index = this.listDemandeCursus.indexOf(demandeCurus);
      console.log(index);
      this.listDemandeCursus.splice(index, 1);

      this.toast.error({
        detail: ' Message',
        summary: 'élement est Supprimé',
        duration: 2000,
      });
    });
  }
}
