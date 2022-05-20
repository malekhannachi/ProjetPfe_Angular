import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css'],
})
export class UpdateEventComponent implements OnInit {
  updateForm: FormGroup;
  id: any;
  userFile: any;
  public imagePath: any;
  imgURL: any = '';
  public message!: string;
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    let formControles = {
      titre: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z A-Z .'-]+"),
        Validators.minLength(4),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.maxLength(160),
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

  get time() {
    return this.updateForm.get('time');
  }
  get palace() {
    return this.updateForm.get('palace');
  }
  get date() {
    return this.updateForm.get('date');
  }

  ngOnInit(): void {
    let idEvent = this.router.snapshot.params['id'];
    this.id = idEvent;

    this.eventService.getOneEvent(idEvent).subscribe((result) => {
      let event = result;
      console.log(event);
      this.updateForm.patchValue({
        titre: event.titre,
        description: event.description,
        palace: event.place,
        time: event.time,
        date: event.date,
      });
    });
  }

  updateEvent() {
    let data = this.updateForm.value;

    let event = new Event(
      this.id,
      data.titre,
      data.description,
      data.palace,
      data.time,
      data.date,
      this.imgURL
    );
    console.log(event);
    console.log(data);
    this.eventService.updateEvent(event).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/admin/list-event'])
      
    });
  }

  //upload Image
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
