import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthServiceService } from '../auth-service.service';
import firebase from 'firebase/app';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';  
import { ActivatedRoute } from '@angular/router';
import {HomePage} from '../home/home.page'

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  test: string;
  userName : any;
  PhoneNo: any;
  CountryJson = environment.CountryJson;
  OTP: string = '';
  Code: any;
  CountryCode: any = '+91';
  showOTPInput: boolean = false;
  OTPmessage: string = 'An OTP is sent to your number. You should receive it in 15 s'
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  confirmationResult: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private authService: AuthServiceService,
    ){}


      ngOnInit() {

        this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
            this.PhoneNo = this.router.getCurrentNavigation().extras.state.myphone;
            // this.CountryCode = this.router.getCurrentNavigation().extras.state.mycountry;
            console.log('User Info : ', this.CountryCode + this.PhoneNo)
            // console.log('User Country : ', this.CountryCode);
          }
        });

        // this.route.queryParams.subscribe(params => {
        //   if (this.router.getCurrentNavigation().extras.state) {
        //     this.userName = this.router.getCurrentNavigation().extras.state.myName;
        //     console.log('User Name : ', this.userName);
        //   }
        // });
      }
  go() {  
    this.router.navigate(['home']);  
  } 




  async ionViewDidEnter() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }
  ionViewDidLoad() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {

      },
      'expired-callback': () => {
      }
    });
  }

  countryCodeChange($event) {
    this.CountryCode = $event.detail.value;
  }

  signinWithPhoneNumber() {
    console.log('country', this.recaptchaVerifier);

    if (this.PhoneNo && this.CountryCode) {

      this.authService.signInWithPhoneNumber(this.recaptchaVerifier, this.CountryCode + this.PhoneNo).then(
        
        success => {
          this.OtpVerification();
          // this.router.navigate(['verify-otp']);
        }
      );
    }
  }

  
  async showSuccess() {
    const alert = await this.alertController.create({
      header: 'Success',
      buttons: [
        {
          text: 'Ok',
          handler: (res) => {
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }
  async OtpVerification() {
    const alert = await this.alertController.create({
      header: 'Enter OTP',
      backdropDismiss: false,
      inputs: [
        {
          name: 'otp',
          type: 'text',
          placeholder: 'Enter your otp',
        }
      ],
      buttons: [{
        text: 'Enter',
        handler: (res) => {
          this.authService.enterVerificationCode(res.otp).then(
            userData => {
              this.showSuccess();
              console.log(userData);
            }
          );
        }
      }
      ]
    });
    await alert.present();
  }
 
 
 
}
