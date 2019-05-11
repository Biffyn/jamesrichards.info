import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

import * as firebase from 'firebase/app';
import 'firebase/performance';

firebase.initializeApp(environment.firebase);

firebase.performance();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
