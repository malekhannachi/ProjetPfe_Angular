import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { DocumentEns } from 'src/app/models/document-ens';
import { Teacher } from 'src/app/models/teacher';
import { StudentService } from 'src/app/services/student.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UploadFileService } from 'src/app/services/upload-file.service';

@Component({
  selector: 'app-addfile-cursus',
  templateUrl: './addfile-cursus.component.html',
  styleUrls: ['./addfile-cursus.component.css'],
})
export class AddfileCursusComponent implements OnInit {
  listTeacher: any;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private service: UploadFileService,
    private toast: NgToastService,
    private st: TeacherService
  ) {}

  addForm = this.fb.group({
    type: [''],

    course_image: [File],
    teacher: [''],
  });

  ngOnInit(): void {
    this.st.getAllTeachers().subscribe((result) => {
      this.listTeacher=result
      console.log(result);
      
    });
  }

  addNews() {
    let data = this.addForm.value;

    console.log(data);

    let newCourse = new DocumentEns(
      undefined,
      data.type,

      data.course_image.name, new Teacher(data.teacher.id_teacher)
    );
    console.log(newCourse);

    console.log(data.course_image);
    this.service
      .addDocument(newCourse, data.course_image)
      .subscribe((result) => {
        console.log(result);
        this.route.navigate(['admin/file-cursus']);
        this.toast.success({
          detail: ' Message',
          summary: 'document est ajouté',
          duration: 2000,
        });
      });
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
