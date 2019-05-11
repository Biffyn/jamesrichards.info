// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBFYlzyd9N0lmQRk4DNdSAK2rMj77CHjlc',
    authDomain: 'james-richards-io.firebaseapp.com',
    databaseURL: 'https://james-richards-io.firebaseio.com',
    projectId: 'james-richards-io',
    storageBucket: 'james-richards-io.appspot.com',
    messagingSenderId: '769562157127',
    appId: '1:769562157127:web:773a2d40659f3bf3',
    functions: {
      serverUrl: 'http://localhost:5000/james-richards-io/us-central1/'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
