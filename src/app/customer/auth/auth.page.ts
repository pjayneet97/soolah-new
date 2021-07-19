import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CustomerService } from '../customer.service';
import '@codetrix-studio/capacitor-google-auth';
import { Capacitor, Plugins } from '@capacitor/core';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup;
  role: string = "customer";

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public service: CustomerService,
    public common: CommonService
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      role: [this.role, [Validators.required]],
      signUpWithGoogle: [false, [Validators.required]],
      signUpWithApple: [false, [Validators.required]],
      signUpWithFacebook: [false, [Validators.required]],
    });
  }

  ngOnInit() {
  }


  get loginValidation() { return this.loginForm?.controls; }





  login() {
    this.common.startLoader()
    this.service.login(this.loginForm.value).subscribe((res: any) => {
      this.service.setUserData(res.data)
      this.service.setEncryptedToken(res.data.encryptedToken)
      this.common.stopLoader()
      this.loginForm.reset()
      this.router.navigateByUrl("/" + this.role + "/home")
    }, error => {
      console.log(error)
      this.common.stopLoader()
      this.common.errorHandler(error.error)
    })
  }


  async googleSignIn() {
    const googleUser = (await Plugins.GoogleAuth.signIn(null)) as any;
    console.log('my user: ', googleUser);
     this.common.startLoader();
     alert(googleUser)
    /*  let emailpart="lucky.soni291298@gmail.com" */
     this.service
       .login({
         email:googleUser.email,
         role: 'customer',
         signUpWithGoogle: true,
         signUpWithApple: false,
         signUpWithFacebook: false,
         API_KEY: 'SOOLAH8F3D091909DC29SECRET',
       }).subscribe(
         (res: any) => {
           if(res.data.firstTimeUser) {
             this.router.navigate(['/customer/register'],{ queryParams: { email: googleUser.email,signUpWithGoogle:true}});
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
         }
       );
     //alert(JSON.stringify(googleUser))
   }

   isPlatformApple() {
     if(Capacitor.getPlatform() === 'ios') {
       return true;
     }
     else {
       return false;
     }
   }

}
