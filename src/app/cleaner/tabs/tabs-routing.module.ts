import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('../orders/orders.module').then((m) => m.OrdersPageModule),
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

      {
        path: 'notifications',
        loadChildren: () =>
          import('../notifications/notifications.module').then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
