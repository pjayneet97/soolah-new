import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  // @ViewChild('tabs', { static: false }) tabs: IonTabs;

  selectedTab: string = 'home';

  constructor() {}

  ngOnInit() {
  }

  setCurrentTab(tab:string) {
    this.selectedTab = tab
  }
}
