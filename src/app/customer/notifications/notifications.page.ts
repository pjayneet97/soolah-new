import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notificationsdata=[]
  constructor(public service:CustomerService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.service.getAllNotifications().subscribe(res=>{
      this.notificationsdata=res["data"]
    })
  }


}
