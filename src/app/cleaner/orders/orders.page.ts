import { AgmMap } from '@agm/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  @ViewChild('agmMap')agmMap :HTMLElement

  segmentvalue="upcoming"
  profile;
  data={
    "upcomingOrders" : false,
    "completedOrders" : false,
    "activeOrders" : true,
    "cancelledOrders" : false
}
lat :any;
lng :any;
obj= {
  url: './assets/images/avatar.png',
    scaledSize: {
    width: 20,
    height: 20
}
  }

orders=[]
  constructor(public cleaner:CleanerService) { }

  ngOnInit() {
    this.getupcomingorderdetails()
    this.getprofile()
  }

  ionViewDidEnter() {
    this.getupcomingorderdetails()
    this.getprofile()

  }




  getupcomingorderdetails() {

    if(this.segmentvalue=="upcoming") {
      this.resetAll()
      this.data.upcomingOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
        this.orders=res["data"]
      })
    }

    if(this.segmentvalue=="active") {
      this.resetAll()
      this.data.activeOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
         this.orders=res["data"]
      })
    }

    if(this.segmentvalue=="completed") {
      this.resetAll()
      this.data.completedOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
         this.orders=res["data"]
      })
    }

    if(this.segmentvalue=="cancelled") {
      this.resetAll()
      this.data.cancelledOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
         this.orders=res["data"]
      })
    }

  }


  segmentChanged($event) {
    this.segmentvalue=$event.detail.value;
    this.getupcomingorderdetails()
  }

  resetAll(){
    this.orders=[]
    this.data.cancelledOrders=false
    this.data.completedOrders=false
    this.data.activeOrders=false
    this.data.upcomingOrders=false
  }

  getprofile() {
    this.cleaner.getProfile().subscribe(
      (res) => {
        this.profile = res['data'];
        console.log(this.profile);
      },
      (err) => {
        console.log(err);
      }
    );
  }




}
