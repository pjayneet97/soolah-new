import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CleanerGuardService } from './cleaner-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate:[CleanerGuardService],
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'change-password',
    canActivate:[CleanerGuardService],
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'set-availability',
    canActivate:[CleanerGuardService],
    loadChildren: () => import('./set-availability/set-availability.module').then( m => m.SetAvailabilityPageModule)
  },
  {
    path: 'set-availability-success',
    canActivate:[CleanerGuardService],
    loadChildren: () => import('./set-availability-success/set-availability-success.module').then( m => m.SetAvailabilitySuccessPageModule)
  },

  {
    path: 'notifications',
    canActivate:[CleanerGuardService],
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
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
    path: 'verify-otp',
    loadChildren: () => import('./verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  },
  {
    path: 'reset-password/:email',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
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
export class CleanerPageRoutingModule {}
