// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBAK_cCKJ274HN_ShZprisSC5D_-Q9JrN0',
    authDomain: 'flare-ios-dev.firebaseapp.com',
    databaseURL: 'https://flare-ios-dev.firebaseio.com',
    projectId: 'flare-ios-dev',
    storageBucket: 'flare-ios-dev.appspot.com',
    messagingSenderId: '49799507321'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
