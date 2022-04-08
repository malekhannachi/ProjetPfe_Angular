import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css'],
})
export class UpdateNewsComponent implements OnInit {
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {
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

  ngOnInit(): void {
    let idNews = this.route.snapshot.params['id'];
    console.log(idNews);
    this.newsService.getOneNews(idNews).subscribe(
      (result) => {
        let news = result;
        console.log(news);

        this.updateForm.patchValue({
          titre: news.titre,
          description: news.description,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateNews() {
    let data = this.updateForm.value;
    let news = new News(data.titre, data.description, data.image);
    this.newsService.updateNews(news).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
