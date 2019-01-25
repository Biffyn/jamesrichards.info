import { Component, OnInit, HostListener, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ContactService } from './contact.service';
import { ContactMessage } from '../models/contactMessage.model';
import { SnotifyService } from 'ng-snotify';

@Component({
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  disabledSubmitButton = true;

  model = new ContactMessage();
  submitted = false;
  error: {};
  body = 'Your message was sucessfully Sent';
  title = 'Your message was sucessfully Sent';
  snotifyConfig = {
    timeout: 2000,
    showProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true
  };

  constructor(
    public formBuilder: FormBuilder,
    private contactService: ContactService,
    private snotifyService: SnotifyService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  public ngOnInit() {}

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  public onSubmit() {
    this.contactService.sendMessage(this.contactForm.value).subscribe(
      () => {
        alert('Your message has been sent.');
        this.contactForm.reset();
        this.disabledSubmitButton = true;
      },
      (error) => {
        console.log('ERROR');
      }
    );
  }
}
