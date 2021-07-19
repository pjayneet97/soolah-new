import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyOtpPageRoutingModule } from './verify-otp-routing.module';

import { VerifyOtpPage } from './verify-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VerifyOtpPageRoutingModule
  ],
  declarations: [VerifyOtpPage]
})
export class VerifyOtpPageModule {}
