import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  role: string = "customer"
  formData: FormGroup;
  profile:any
  imgfile:any
  constructor(public fb: FormBuilder, public service: CustomerService, public common: CommonService) {
    this.formData = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')]],
      address: [''],
      city: [''],
      role: [this.role, [Validators.required]],
      cardNumber: [0],
      accountHolderName: [""],
      accountNumber: [0],
      transitNumber: [0],
      institutionNumber: [0],
      saveCard: [false]
    })
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getData()
  }

  imageselected(event:any) {
    console.log(event.target.files[0])
    this.updateprofilepic(event.target.files[0])
  }


  updateprofilepic(imgfile) {
    const uFrm = new FormData();
    uFrm.append("profilePic",imgfile)
    this.service.updateUserProfilePic(uFrm).subscribe(res=>{
      console.log(res)
      this.getData()
    },error=>{
     console.log(error)
     this.common.stopLoader()
     this.common.errorHandler(error.error)
    })
 }

  getData() {
    this.service.getProfile().subscribe((res: any) => {
      console.log("get data", res)
      let data = res.data
      this.profile=data
      this.formData = this.fb.group({
        firstName: [data?.firstName, [Validators.required]],
        lastName: [data?.lastName, [Validators.required]],
        email: [data?.email, [Validators.required]],
        phone: [data?.phone, [Validators.required, Validators.pattern('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')]],
        address: [data?.address],
        city: [data?.city],
        role: [this.role, [Validators.required]],
        cardNumber: [data?.cardNumber],
        accountHolderName: [data?.accountHolderName],
        accountNumber: [data?.accountNumber],
        transitNumber: [data?.transitNumber],
        institutionNumber: [data?.institutionNumber],
        saveCard: [data?.saveCard]
      })
    }, error => {
      console.log("get data error", error)
    })
  }

  get validation() { return this.formData?.controls; }

  logout() {
    this.service.logout()
  }

  onSubmit() {
    this.common.startLoader()
  this.service.updateUserDetails(this.formData.value).subscribe((res: any) => {
      console.log(res)
      // this.service.setUserData(res.data)
      this.common.stopLoader()
      this.common.showToast(res.message)
    }, error => {
      console.log(error)
      this.common.stopLoader()
      this.common.errorHandler(error.error)
    })
  }
}
