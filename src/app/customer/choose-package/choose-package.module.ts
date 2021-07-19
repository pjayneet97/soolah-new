import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoosePackagePageRoutingModule } from './choose-package-routing.module';

import { ChoosePackagePage } from './choose-package.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChoosePackagePageRoutingModule
  ],
  declarations: [ChoosePackagePage]
})
export class ChoosePackagePageModule {}
