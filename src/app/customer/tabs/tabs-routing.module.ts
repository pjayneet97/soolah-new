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
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'new-request',
        loadChildren: () => import('../new-request/new-request.module').then(m => m.NewRequestPageModule)
      },
      {
        path: 'select-cleaner',
        loadChildren: () => import('../select-cleaner/select-cleaner.module').then(m => m.SelectCleanerPageModule)
      },
      {
        path: 'choose-package',
        loadChildren: () => import('../choose-package/choose-package.module').then(m => m.ChoosePackagePageModule)
      },
      {
        path: 'waiting-for-approval',
        loadChildren: () => import('../waiting-for-approval/waiting-for-approval.module').then(m => m.WaitingForApprovalPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
