import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    let formControles = {
      titre: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2),
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
    console.log(this.addForm.value);
  }
}
