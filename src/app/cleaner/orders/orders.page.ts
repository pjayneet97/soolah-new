import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  segmentvalue="upcoming"
  data={
    "upcomingOrders" : false,
    "completedOrders" : false,
    "activeOrders" : true,
    "cancelledOrders" : false
}

orders=[]
  constructor(public cleaner:CleanerService) { }

  ngOnInit() {
    this.getupcomingorderdetails()
  }



  getupcomingorderdetails() {
    
    if(this.segmentvalue=="upcoming") {
      this.resetAll()
      this.data.upcomingOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
        this.orders=res
      })
    }

    if(this.segmentvalue=="active") {
      this.resetAll()
      this.data.activeOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
      })
    }

    if(this.segmentvalue=="completed") {
      this.resetAll()
      this.data.completedOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
      })
    }

    if(this.segmentvalue=="cancelled") {
      this.resetAll()
      this.data.cancelledOrders=true
      this.cleaner.getorderdetails(this.data).subscribe((res:any)=> {
        console.log(res)
      })
    }

  }


  segmentChanged($event) {
    this.segmentvalue=$event.detail.value;
    this.getupcomingorderdetails()
  }

  resetAll(){
    this.data.cancelledOrders=false
    this.data.completedOrders=false
    this.data.activeOrders=false
    this.data.upcomingOrders=false
  }

}
