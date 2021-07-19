import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{
  constructor(public router:Router,public nav: NavController,private platform: Platform) {
    if(this.getUserData()?.user?.role){
      this.router.navigateByUrl(`/${this.getUserData()?.user?.role}/home`)
    }else{
      this.router.navigateByUrl("/get-started")
    }

  }

  ngOnInit(){
    this.platform.backButton.subscribeWithPriority(20, () => {
      console.log('Handler was called!');
      this.nav.back()
    });
  }



  getUserData() {
    return JSON.parse(localStorage.getItem("userData"))
  }
}
