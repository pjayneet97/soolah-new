import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'get-started',
    loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'cleaner',
    loadChildren: () => import('./cleaner/cleaner.module').then( m => m.CleanerPageModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'get-started',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'get-started',
  //   loadChildren: () => import('./get-started/get-started.module').then( m => m.GetStartedPageModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./cleaner/auth/auth.module').then( m => m.AuthPageModule)
  // },
  // {
  //   path: 'forget-password',
  //   loadChildren: () => import('./cleaner/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  // },
  // {
  //   path: 'verify-otp',
  //   loadChildren: () => import('./cleaner/verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./cleaner/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./customer/auth/auth.module').then( m => m.AuthPageModule)
  // },
  // {
  //   path: 'verify-otp',
  //   loadChildren: () => import('./customer/verify-otp/verify-otp.module').then( m => m.VerifyOtpPageModule)
  // },
  // {
  //   path: 'forget-password',
  //   loadChildren: () => import('./customer/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./customer/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./customer/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./cleaner/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  // {
  //   path: 'change-password',
  //   loadChildren: () => import('./cleaner/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  // },
  // {
  //   path: 'change-password',
  //   loadChildren: () => import('./customer/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  // },
  // {
  //   path: 'reset-password',
  //   loadChildren: () => import('./customer/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  // },
  // {
  //   path: 'reset-password',
  //   loadChildren: () => import('./cleaner/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./customer/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./cleaner/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  // {
  //   path: 'customer',
  //   loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  // },
  // {
  //   path: 'cleaner',
  //   loadChildren: () => import('./cleaner/cleaner.module').then( m => m.CleanerPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
