import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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



}
