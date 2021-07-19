import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetAvailabilitySuccessPage } from './set-availability-success.page';

const routes: Routes = [
  {
    path: '',
    component: SetAvailabilitySuccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetAvailabilitySuccessPageRoutingModule {}
