import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetAvailabilitySuccessPageRoutingModule } from './set-availability-success-routing.module';

import { SetAvailabilitySuccessPage } from './set-availability-success.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetAvailabilitySuccessPageRoutingModule
  ],
  declarations: [SetAvailabilitySuccessPage]
})
export class SetAvailabilitySuccessPageModule {}
