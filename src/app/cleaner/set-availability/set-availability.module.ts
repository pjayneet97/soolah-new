import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetAvailabilityPageRoutingModule } from './set-availability-routing.module';

import { SetAvailabilityPage } from './set-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetAvailabilityPageRoutingModule
  ],
  declarations: [SetAvailabilityPage]
})
export class SetAvailabilityPageModule {}
