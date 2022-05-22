import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  addForm: FormGroup;

  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: Router
  ) {
    let formControles = {
      titre: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"),
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z 0-9 A-Z . ,'-]+"),
        Validators.maxLength(200),
      ]),
      image: new FormControl('', [Validators.required]),
      palace: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(4),
      ]),
      time: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
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

  get time() {
    return this.addForm.get('time');
  }
  get palace() {
    return this.addForm.get('palace');
  }
  get date() {
    return this.addForm.get('date');
  }

  ngOnInit(): void {}

  addEvent() {
    let data = this.addForm.value;
    let event = new Event(
      undefined,
      data.titre,
      data.description,
      data.palace,
      data.time,
      data.date,
      this.imgURL
    );
    console.log(event);
    console.log(data);

    this.eventService.addEvent(event).subscribe((res) => {
      console.log(res);
      this.route.navigate(['admin/event']);
    });
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

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
