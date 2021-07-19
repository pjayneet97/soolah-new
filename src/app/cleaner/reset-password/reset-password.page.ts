import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  formData: FormGroup;
  role: string = "cleaner"
  email: string = ""

  constructor(public fb: FormBuilder, public router: Router, public route: ActivatedRoute,public service:CleanerService,public common:CommonService) {
    this.email = this.route.snapshot.paramMap.get("email")
    this.formData = this.fb.group({
      email: [this.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      role: [this.role, [Validators.required]],
      OTP: [, [Validators.required, Validators.pattern('[0-9]{6}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40), Validators.pattern('(?=.*[A-Za-z])(?=[^A-Z]*[A-Z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
    })
  }

  ngOnInit() {
  }

  get validation() { return this.formData?.controls; }

  onSubmit() {
    this.common.startLoader()
    this.service.resetPassword(this.formData.value).subscribe((res:any) => {
      this.common.showToast(res.message)
      this.common.stopLoader()
      this.router.navigateByUrl("/" + this.role + "/auth")
    }, error => {
      console.log(error)
      this.common.stopLoader()
      this.common.errorHandler(error.error);
    })
  }

}
