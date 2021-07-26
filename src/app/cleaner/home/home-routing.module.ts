import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'set-availability',
    loadChildren: () =>
      import('../set-availability/set-availability.module').then(
        (m) => m.SetAvailabilityPageModule
      ),
  },
  {
    path: 'set-availability-success',
    loadChildren: () =>
      import(
        '../set-availability-success/set-availability-success.module'
      ).then((m) => m.SetAvailabilitySuccessPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
