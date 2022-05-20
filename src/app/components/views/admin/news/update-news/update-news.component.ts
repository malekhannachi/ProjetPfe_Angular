import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css'],
})
export class UpdateNewsComponent implements OnInit {
  updateForm: FormGroup;
  id: any;

  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private toast: NgToastService
  ) {
    let formControles = {
      titre: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9 .'-]+"),
        Validators.minLength(2),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9 .'-]+"),
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
    this.id = idNews;
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

    let news = new News(this.id, data.titre, data.description, this.imgURL);
    console.log(news);

    this.newsService.updateNews(news).subscribe(
      (result) => {
        console.log(result);
        this.toast.warning({
          detail: ' Message',
          summary: 'Actualité est modifié',
          duration: 2000,
        });
        this.router.navigate(['admin/list-news']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
}
