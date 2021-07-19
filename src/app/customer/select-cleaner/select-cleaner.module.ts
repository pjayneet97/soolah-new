import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCleanerPageRoutingModule } from './select-cleaner-routing.module';

import { SelectCleanerPage } from './select-cleaner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCleanerPageRoutingModule
  ],
  declarations: [SelectCleanerPage]
})
export class SelectCleanerPageModule {}
