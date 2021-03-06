// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage {

//   constructor() {}

// }

import { Component } from '@angular/core';
// import { AlertController } from '@ionic/angular';
// import { AuthServiceService } from '../auth-service.service';
// import firebase from 'firebase/app';
// import { environment } from '../../environments/environment';
import { Router, NavigationExtras } from '@angular/router';  


// const navigationExtras: NavigationExtras = {
//   state: {
//     transd: 'TRANS001',
//     workQueue: false,
//     services: 10,
//     code: '003',
//   }};


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  
  // CountryJson = environment.CountryJson;
  // OTP: string = '';
  // Code: any;
  PhoneNo: any;
  dataToSend: any;
  // CountryCode: any = '+91';
  // showOTPInput: boolean = false;
  // OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  // recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  // confirmationResult: any;
  constructor(
    // private alertController: AlertController,
    // private authService: AuthServiceService,
    private router: Router
  ) { }


  // async ionViewDidEnter() {
  //   this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     size: 'invisible',
  //     callback: (response) => {

  //     },
  //     'expired-callback': () => {
  //     }
  //   });
  // }
  // ionViewDidLoad() {
  //   this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
  //     size: 'invisible',
  //     callback: (response) => {

  //     },
  //     'expired-callback': () => {
  //     }
  //   });
  // }

  // countryCodeChange($event) {
  //   this.CountryCode = $event.detail.value;
  // }


  // Button event after the nmber is entered and button is clicked
  // signinWithPhoneNumber($event) {
  //   console.log('country', this.recaptchaVerifier);

  //   if (this.PhoneNo && this.CountryCode) {

  //     this.authService.signInWithPhoneNumber(this.recaptchaVerifier, this.CountryCode + this.PhoneNo).then(
  //       success => {
  //         this.OtpVerification();
  //       }
  //     );
  //   }
  // }
  // async showSuccess() {
  //   const alert = await this.alertController.create({
  //     header: 'Success',
  //     buttons: [
  //       {
  //         text: 'Ok',
  //         handler: (res) => {
  //           alert.dismiss();
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }
  // async OtpVerification() {
  //   const alert = await this.alertController.create({
  //     header: 'Enter OTP',
  //     backdropDismiss: false,
  //     inputs: [
  //       {
  //         name: 'otp',
  //         type: 'text',
  //         placeholder: 'Enter your otp',
  //       }
  //     ],
  //     buttons: [{
  //       text: 'Enter',
  //       handler: (res) => {
  //         this.authService.enterVerificationCode(res.otp).then(
  //           userData => {
  //             this.showSuccess();
  //             console.log(userData);
  //           }
  //         );
  //       }
  //     }
  //     ]
  //   });
  //   await alert.present();
  // }
  go() {  
    this.router.navigate(['splash']);  
  } 
  send(){
    // var dataToSend ={'name':'ABC'};
     
    // let navigationExtras: NavigationExtras = { state: { myName: dataToSend } };
    // this.router.navigateByUrl('/verify-otp', navigationExtras);


     this.dataToSend =
     {
       'phone':this.PhoneNo,
      //  'country':this.CountryCode
      };
     
      let navigationExtras: NavigationExtras = 
      { 
        state: 
        { 
          myphone: this.PhoneNo,
          // mycountry: this.CountryCode
        }
      };
      this.router.navigateByUrl('/verify-otp', navigationExtras);

    }
  // verify()
  // {
  //   this.router.navigate(['verify-otp'], navigationExtras);
  // }

}
