import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetAvailabilityPage } from './set-availability.page';

const routes: Routes = [
  {
    path: '',
    component: SetAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetAvailabilityPageRoutingModule {}
