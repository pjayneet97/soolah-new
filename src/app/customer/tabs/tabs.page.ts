import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  // @ViewChild('tabs', { static: false }) tabs: IonTabs;
  profile:any
  selectedTab: string = 'home';

  constructor(public service:CustomerService) {}

  ngOnInit() {
    this.service.getProfile().subscribe(res=>{
      this.profile=res['data']
    },err=>{
      console.log(err)
    })
  }

  setCurrentTab(tab:string) {
    this.selectedTab = tab
  }

  ionViewDidEnter() {
    this.service.getProfile().subscribe(res=>{
      this.profile=res['data']
    },err=>{
      console.log(err)
    })
  }


}
