import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private route: Router
  ) {
    let formControles = {
      titre: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(4),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.maxLength(30),
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
    let news = new News(undefined, data.titre, data.description, data.image);
    console.log(news);
    console.log(data);
    this.newsService.addNews(news).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['admin/list-news']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
