import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfile-cursus',
  templateUrl: './addfile-cursus.component.html',
  styleUrls: ['./addfile-cursus.component.css'],
})
export class AddfileCursusComponent implements OnInit {
  addForm: FormGroup;

  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  public message!: string;

  url = '';

  constructor(private fb: FormBuilder, private route: Router) {
    let formControles = {
      titre: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z 0-9 , é à-ô .'-]+"),
        Validators.minLength(4),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z  A-Z 0-9 , .'-]+"),
        Validators.maxLength(200),
      ]),
      image: new FormControl('', [Validators.required]),
    };
    this.addForm = this.fb.group(formControles);
  }

  get titre() {
    return this.addForm.get('titre');
  }
  get description() {
    return this.addForm.get('description');
  }
  get image() {
    return this.addForm.get('image');
  }

  ngOnInit(): void {}

  addNews() {
    let data = this.addForm.value;

    console.log(data);
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/pdf\/*/) == null) {
        this.message = 'Only pdf are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
        var a = document.createElement('a');
        a.href = this.imgURL;
      };
    }
  }

  onselect(event: any) {
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0]);

      reader.onload = (e: any) => {
        this.url = event.target.result;
      
      };
    }
  }

  onselectt(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      console.log(e.target.files[0]);

      reader.onload = (event: any) => (this.url = event.target.result);
      console.log(this.url);
    }
  }
}
