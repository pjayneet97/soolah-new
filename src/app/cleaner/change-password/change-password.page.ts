import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  formData: FormGroup;
  role: string = "cleaner"

  constructor(public fb: FormBuilder, public router: Router, public service: CleanerService, public common: CommonService) {
    this.formData = this.fb.group({
      oldPassword: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern('(?=.*[A-Za-z])(?=[^A-Z]*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern('(?=.*[A-Za-z])(?=[^A-Z]*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
    })
  }

  ngOnInit() {
  }

  comparePassword() {
    if (this.formData.value.confirmPassword == this.formData.value.password) {
      return true
    }
    else {
      return false
    }
  }

  get validation() { return this.formData?.controls; }

  onSubmit() {
    this.common.startLoader()
    delete this.formData.value.confirmPassword
    console.log("form data", this.formData.value)
    this.service.changePassword(this.formData.value).subscribe(res => {
      console.log(res)
      this.service.common.showToast("Password updated successfully! Please login again with your new password!")
      this.common.stopLoader()
      this.service.removeLocalStorageData()
      this.router.navigateByUrl("/get-started")
    }, error => {
      console.log(error)
      this.common.stopLoader()
      this.common.errorHandler(error.error);
    })
  }

}
