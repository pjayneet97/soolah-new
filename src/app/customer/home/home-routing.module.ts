import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
