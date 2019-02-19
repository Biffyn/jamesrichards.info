import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LazyImageComponent } from './lazy-image/lazy-image.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotificationComponent } from './notification/notification.component';
@NgModule({
  declarations: [LazyImageComponent, ContactFormComponent, NotificationComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  entryComponents: [LazyImageComponent, ContactFormComponent, NotificationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [[ContactFormComponent, 'contact-form'], [NotificationComponent, 'app-notification']];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
