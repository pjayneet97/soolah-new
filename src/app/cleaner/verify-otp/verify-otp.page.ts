import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  OTP: any = {
    first: '',
    second: '',
    third: '',
    forth: '',
    fifth: '',
    sixth: ''
  };
  otpdigit = [];
  role: string = "cleaner"

  constructor(public service: CleanerService, public common: CommonService,public router:Router) { }

  ngOnInit() {
  }
  otpController(event, next, prev, index?) {
    if (index == 4) {
    }
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }

  resendOtp() {
    this.common.startLoader()
    let userId = {userId:this.service.getUserData()._id}
    this.service.resendOTP(userId).subscribe((res: any) => {
      this.common.stopLoader()
      this.OTP=  {
        first: '',
        second: '',
        third: '',
        forth: '',
        fifth: '',
        sixth: ''
      };
      this.common.showToast(res.message)
    }, error => {
      console.log(error)
      this.common.stopLoader()
      this.common.errorHandler(error.error)
    })
  }

  submitOtp() {
    this.common.startLoader()
    this.otpdigit.push(this.OTP[0], this.OTP[1], this.OTP[2], this.OTP[3], this.OTP[4], this.OTP[5]);
    var data = this.otpdigit.join('');
    let verifyData = {
      OTP: Number(data),
      role: this.role,
      email: this.service.getUserData().email
    }
    this.service.verifyOTP(verifyData).subscribe((res: any) => {
      this.service.setUserData(res.data)
      this.service.setEncryptedToken(res.data.encryptedToken)
      this.common.showToast(res.message)
      this.common.stopLoader()
      this.router.navigateByUrl("/" + this.role)
    }, error => {
      this.common.stopLoader()
      this.common.errorHandler(error.error)
    })
  }


}
