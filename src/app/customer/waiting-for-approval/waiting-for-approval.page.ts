import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-waiting-for-approval',
  templateUrl: './waiting-for-approval.page.html',
  styleUrls: ['./waiting-for-approval.page.scss'],
})
export class WaitingForApprovalPage implements OnInit {

  profile
  constructor(public service:CustomerService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.service.getProfile().subscribe(res=>{
      this.profile=res['data']
    },err=>{
      console.log(err)
    })
  }

  ionViewDidLeave() {
this.service.tempbookingdata=null
  }


}
