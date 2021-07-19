import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {
  formData: FormGroup;
  role: string = "customer"

  constructor(public fb: FormBuilder, public router: Router, public service: CustomerService, public common: CommonService) {
    this.formData = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      role: [this.role, [Validators.required]]
    })
  }

  ngOnInit() {
  }

  get validation() { return this.formData?.controls; }

  onSubmit() {
    this.common.startLoader()
    console.log("form data", this.formData.value)
    this.service.forgotPassword(this.formData.value).subscribe(res => {
      console.log(res)
      this.common.showToast("OTP sent successfully!")
      this.common.stopLoader()
      this.router.navigateByUrl("/" + this.role + "/reset-password/" + this.formData.value.email)
    }, error => {
      console.log(error)
      this.common.stopLoader()
      this.common.errorHandler(error.error);
    })
  }

}
