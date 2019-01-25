import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LazyImageComponent } from './lazy-image/lazy-image.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const components = [LazyImageComponent, ContactFormComponent];

@NgModule({
  declarations: components,
  entryComponents: components,
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [LazyImageComponent, 'lazy-img'],
      [ContactFormComponent, 'contact-form']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
