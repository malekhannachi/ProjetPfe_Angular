import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.css'],
})
export class ListGroupeComponent implements OnInit {
  groupeList: any[] = [];
  constructor(private groupeService: GroupeService,private toast: NgToastService) {}

  ngOnInit(): void {
    this.groupeService.getAllGroupe().subscribe((result) => {
      this.groupeList = result;
      console.log(result);
      
    });
  }

  deleteGroupe(groupe: any) {

      console.log(groupe);
      
    this.groupeService.deleteGroupe(groupe.id).subscribe(result=>{
      let index = this.groupeList.indexOf(groupe);
      this.groupeList.splice(index, 1);
      console.log(result);

      this.toast.error({
        detail: ' Message',
        summary: 'Groupe est Supprimé',
        duration: 2000,
      });
      
    })
    
  }
}
