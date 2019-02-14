import { Component, OnInit, HostListener, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ContactService } from './contact.service';
import { NotificationService } from '../notification/notification.service';
import { onMessageError, onMessageSuccess } from '../notification/notifications';

@Component({
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  @Input() title = 'Default Title';
  @Input() lead = 'Default Lead';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private ns: NotificationService
  ) {}

  public ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  public get name() {
    return this.contactForm.get('name');
  }

  public get email() {
    return this.contactForm.get('email');
  }

  public get subject() {
    return this.contactForm.get('subject');
  }

  public get message() {
    return this.contactForm.get('message');
  }

  public onSubmit() {
    if (!this.contactForm.valid) {
      return;
    } else {
      this.contactService.sendMessage(this.contactForm.value).subscribe(
        () => {
          this.contactForm.reset();
          this.ns.setNotification(onMessageSuccess);
        },
        () => {
          this.ns.setNotification(onMessageError);
        }
      );
    }
  }
}
