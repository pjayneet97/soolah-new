import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CleanerService } from '../cleaner.service';
import '@codetrix-studio/capacitor-google-auth';
import { Capacitor, Plugins } from '@capacitor/core';
// const { SignInWithApple } = Plugins
import {
  SignInWithApple, SignInWithAppleOptions
} from '@capacitor-community/apple-sign-in';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup;
  role: string = 'cleaner';

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public service: CleanerService,
    public common: CommonService
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required]],
      role: [this.role, [Validators.required]],
      signUpWithGoogle: [false, [Validators.required]],
      signUpWithApple: [false, [Validators.required]],
      signUpWithFacebook: [false, [Validators.required]],
    });
  }

  ngOnInit() {}

  get loginValidation() {
    return this.loginForm?.controls;
  }

  login() {
    this.common.startLoader();
    this.service.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.service.setUserData(res.data);
        this.service.setEncryptedToken(res.data.encryptedToken);
        this.common.stopLoader();
        this.loginForm.reset();
        this.router.navigateByUrl('/' + this.role + '/home');
      },
      (error) => {
        console.log(error);
        this.common.stopLoader();
        this.common.errorHandler(error.error);
      }
    );
  }

  async googleSignIn() {
 const googleUser = (await Plugins.GoogleAuth.signIn(null)) as any;
   console.log('my user: ', googleUser)
    this.common.startLoader(); 
    /* alert(googleUser) */
    let emailpart=googleUser.email
    this.service
      .login({
        email:emailpart,
        role: 'cleaner',
        signUpWithGoogle: true,
        signUpWithApple: false,
        signUpWithFacebook: false,
        API_KEY: 'SOOLAH8F3D091909DC29SECRET',
      }).subscribe(
        (res: any) => {
          if(res.data.firstTimeUser) {
            this.router.navigate(['/cleaner/register'],{ queryParams: { email: emailpart,signUpWithGoogle:true}});
            this.common.stopLoader();
          }
          else {
            this.service.setUserData(res.data);
            this.service.setEncryptedToken(res.data.encryptedToken);
            this.common.stopLoader();
            this.loginForm.reset();
            this.router.navigateByUrl('/' + this.role + '/home');
          }
        },
        (err) => {
          console.log(err)
          this.common.stopLoader()
          if(err.error.code==400) {
            this.router.navigate(['/cleaner/register'],{ queryParams: { email: emailpart,signUpWithGoogle:true}});
            this.common.stopLoader();
          }
          this.common.errorHandler(err.error)
        }
      );
    //alert(JSON.stringify(googleUser))
  }

  isPlatformApple() {
    if(Capacitor.getPlatform() === 'ios') {
      return true;
    }
    else {
      return true;
    }
  }

  isPlatformAndroid() {
    if(Capacitor.getPlatform() === 'android') {
      return true;
    }
    else {
      return false;
    }
  }


  async appleSignIn(){
    let options: SignInWithAppleOptions = {
      clientId: 'com.soolah.app',
      redirectURI: 'https://www.yourfrontend.com/login',
      scopes: 'email name',
      //state: '12345',
      //nonce: 'nonce',
    };
    SignInWithApple.authorize(options)
  .then((result) => {
    // Handle user information
    alert(JSON.stringify(result))
    // Validate token with server and create new session
  })
  .catch(error => {
    alert(JSON.stringify(error))
    // Handle error
  });
    // const googleUser = (await SignInWithApple.Authorize()) as any;
    // console.log('my user: ', googleUser);
    //  this.common.startLoader();
    //  alert(JSON.stringify(googleUser))
    //  let emailpart=googleUser.email
    //  this.service
    //    .login({
    //      email:emailpart,
    //      role: 'cleaner',
    //      signUpWithGoogle: false,
    //      signUpWithApple:true,
    //      signUpWithFacebook: false,
    //      API_KEY: 'SOOLAH8F3D091909DC29SECRET',
    //    }).subscribe(
    //      (res: any) => {
    //        if(res.data.firstTimeUser) {
    //          this.router.navigate(['/cleaner/register'],{ queryParams: { email: emailpart,signUpWithApple:true}});
    //          this.common.stopLoader();
    //        }
    //        else {
    //          this.service.setUserData(res.data);
    //          this.service.setEncryptedToken(res.data.encryptedToken);
    //          this.common.stopLoader();
    //          this.loginForm.reset();
    //          this.router.navigateByUrl('/' + this.role + '/home');
    //        }
    //      },
    //      (err) => {
    //        console.log(err)
    //        this.common.stopLoader()
    //        if(err.error.code==400) {
    //          this.router.navigate(['/cleaner/register'],{ queryParams: { email: emailpart,signUpWithApple:true}});
    //          this.common.stopLoader();
    //        }
    //        this.common.errorHandler(err.error)
    //      }
    //    );
   }


}
