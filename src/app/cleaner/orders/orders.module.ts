import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZoysoZROVRhMX4KMWTDQkSBwTgFdksnw'
    })
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
