import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { LazyImageComponent } from './lazy-image/lazy-image.component';

@NgModule({
  declarations: [LazyImageComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [LazyImageComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [[LazyImageComponent, 'lazy-img']];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
    }
  }
}
