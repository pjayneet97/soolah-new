import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notificationsdata=[]
  constructor(public alertController: AlertController,public service:CleanerService) { }

  ngOnInit() {
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '      ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  ionViewDidEnter() {
    this.service.getAllNotifications().subscribe(res=>{
      this.notificationsdata=res["data"]
    })
  }



}
