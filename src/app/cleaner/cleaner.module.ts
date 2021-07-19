import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CleanerPageRoutingModule } from './cleaner-routing.module';

import { CleanerPage } from './cleaner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CleanerPageRoutingModule
  ],
  declarations: [CleanerPage]
})
export class CleanerPageModule {}
