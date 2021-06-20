// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {

    apiKey: "AIzaSyA0QKH1Ju06hGPaIaDtHgdmErbpkCzHYe0",
    authDomain: "onboard-b0f63.firebaseapp.com",
    projectId: "onboard-b0f63",
    storageBucket: "onboard-b0f63.appspot.com",
    messagingSenderId: "31629098236",
    appId: "1:31629098236:web:fe6b304180f52549feab79",
    measurementId: "G-C74KSLMWN3"

    },
  CountryJson: [

      { name: 'Afghanistan', dial_code: '+93', code: 'AF'},
      { name : "India", dial_code :"+91", code :"IN" }
    ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
