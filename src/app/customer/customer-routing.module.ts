import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerGuardService } from './customer-guard.service';


const routes: Routes = [
  {
    path: '',
    canActivate: [CustomerGuardService],
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'new-request',
    canActivate: [CustomerGuardService],
    loadChildren: () => import('./new-request/new-request.module').then(m => m.NewRequestPageModule)
  },
  {
    path: 'select-cleaner',
    canActivate: [CustomerGuardService],
    loadChildren: () => import('./select-cleaner/select-cleaner.module').then(m => m.SelectCleanerPageModule)
  },
  {
    path: 'notifications',
    canActivate: [CustomerGuardService],
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'choose-package',
    canActivate: [CustomerGuardService],
    loadChildren: () => import('./choose-package/choose-package.module').then(m => m.ChoosePackagePageModule)
  },
  {
    path: 'change-password',
    canActivate: [CustomerGuardService],
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'order-detail',
    canActivate: [CustomerGuardService],
    loadChildren: () => import('./order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },

  // routes without guard will come below it and route with guards will come above it
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'reset-password/:email',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'verify-otp',
    loadChildren: () => import('./verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  },


  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPageRoutingModule {}
