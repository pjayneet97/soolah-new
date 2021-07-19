import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoosePackagePage } from './choose-package.page';

const routes: Routes = [
  {
    path: '',
    component: ChoosePackagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoosePackagePageRoutingModule {}
