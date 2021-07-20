import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CustomerService } from '../customer.service';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  role: string = 'customer';
  mode = null;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public service: CustomerService,
    public common: CommonService,
    public route: ActivatedRoute
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', []],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [Validators.pattern('^([0|+[0-9]{1,5})?([1-9][0-9]{9})$')]],
      password: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(40),
          Validators.pattern(
            '(?=.*[A-Za-z])(?=[^A-Z]*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.minLength(8),
          Validators.maxLength(40),
          Validators.pattern(
            '(?=.*[A-Za-z])(?=[^A-Z]*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
          ),
        ],
      ],
      /*   address: [''],
      city: [''],*/
      countrycode: [environment.countrycode],
      // dob: ['',[Validators.required]],
      role: [this.role, [Validators.required]],
      lattitude: [0, []],
      longitude: [0, []],
      signUpWithGoogle: [false, [Validators.required]],
      signUpWithApple: [false, [Validators.required]],
      signUpWithFacebook: [false, [Validators.required]],
      API_KEY: ['SOOLAH8F3D091909DC29SECRET', [Validators.required]],
      // dob: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  get registerValidation() {
    return this.registerForm?.controls;
  }

  comparePassword() {
    if (
      this.registerForm.value.confirmPassword ===
      this.registerForm.value.password
    ) {
      return true;
    } else {
      return false;
    }
  }

  ionViewDidEnter() {
    let email = this.route.snapshot.queryParamMap.get('email');
    if (email) {
      this.registerForm.patchValue(this.route.snapshot.queryParams);
      this.mode = 'phone';
    } else {
      this.mode = 'register';
    }
  }

  register() {
    this.common.startLoader();
    this.registerForm.value.phone =
      environment.countrycode + this.registerForm.value.phone;
    let data = this.registerForm.value;
    delete data.confirmPassword;
    delete data.countrycode;
    this.service.register(data).subscribe(
      (res: any) => {
        console.log(res);
        this.service.setUserData(res.data);
        this.common.showToast(res.message);
        this.common.stopLoader();
        this.registerForm.reset();
        this.router.navigateByUrl('/' + this.role + '/verify-otp');
      },
      (error) => {
        console.log(error);
        this.common.stopLoader();
        this.common.errorHandler(error.error);
      }
    );
  }

  changemode() {
    console.log(this.registerForm.value);
    this.mode = 'phone';
  }

  isRegisterFormValid() {
    if (this.registerForm.valid) {
      return true;
    } else {
      return false;
    }
  }

  isPhoneNumberValid() {
    if (this.registerForm.get('phone').valid) {
      return true;
    } else {
      return false;
    }
  }
}
