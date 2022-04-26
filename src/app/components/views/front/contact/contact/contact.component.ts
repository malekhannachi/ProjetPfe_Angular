import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from 'src/app/models/contact';
import { ContacterAdminService } from 'src/app/services/contacter-admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  ContactForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private ContactService: ContacterAdminService
  ) {
    let formControllers = {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    };
    this.ContactForm = this.fb.group(formControllers);
  }

  get name() {
    return this.ContactForm.get('name');
  }
  get email() {
    return this.ContactForm.get('email');
  }
  get message() {
    return this.ContactForm.get('message');
  }

  ngOnInit(): void {}

  ContactClick() {
    let data = this.ContactForm.value;
    let contact = new Contact(undefined, data.name, data.email, data.message);
    console.log(data);
    console.log(contact);

    if (data.name == 0 || data.email == 0 || data.message == 0) {
      this.toast.error({
        detail: 'Error Message',
        summary: 'Rempir votre champs',
      });
    } else {
      this.ContactService.addContactAdmin(contact).subscribe(
        (result) => {
          console.log(result);
          this.toast.success({
            detail: 'Succes Message',
            summary: 'Message est Envoyée',
          });
        },
        (error) => {
          console.log(error);
          this.toast.error({
            detail: 'Error Message',
            summary: 'Probléme de Serveur',
          });
        }
      );
    }
  }
}
