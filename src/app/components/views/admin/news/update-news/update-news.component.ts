import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css'],
})
export class UpdateNewsComponent implements OnInit {
  updateForm: FormGroup;

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
    this.updateForm = this.fb.group(formControles);
  }

  get titre() {
    return this.updateForm.get('titre');
  }
  get description() {
    return this.updateForm.get('description');
  }
  get image() {
    return this.updateForm.get('image');
  }

  ngOnInit(): void {}

  updateNews() {
    console.log(this.updateForm.value);
  }
}
