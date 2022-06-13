import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DocumentEtd } from 'src/app/models/document-etd';
import { Promotion } from 'src/app/models/promotion';
import { DocumentService } from 'src/app/services/document.service';
import { PromotionService } from 'src/app/services/promotion.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  promotionList: any[] = [];
  constructor(
    private route: Router,
    private promotionService: PromotionService,
    private service :DocumentService,
    private toast: NgToastService,
    private fb: FormBuilder,
 
  ) { }

  addForm = this.fb.group({
    type: [''],

    course_image: [File],
    promotion: [''],
  });

  ngOnInit(): void {
    this.promotionService.getAllPromotion().subscribe((result) => {
      this.promotionList = result;
      console.log(this.promotionList);
    });
  }


  addDocument(){
    let data = this.addForm.value;

    console.log(data);
    let documentEtd = new DocumentEtd(
      undefined,
      data.type,

      data.course_image.name, new Promotion(data.promotion.id)
    );
    console.log(documentEtd);

    console.log(data.course_image);


    if (data.type == 0 || data.course_image == 0 || data.promotion == 0) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
        duration: 2000,
      });
    } else {

    
      this.service
        .addDocument(documentEtd, data.course_image)
        .subscribe((result) => {
          console.log(result);
          this.route.navigate(['admin/document']);
          this.toast.success({
            detail: ' Message',
            summary: 'document est ajouté',
            duration: 2000,
          });
        });
    }

  

  }


  onImageChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.addForm.patchValue({
        course_image: file,
      });
    }
  }
}
