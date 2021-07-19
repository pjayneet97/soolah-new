import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectCleanerPage } from './select-cleaner.page';

const routes: Routes = [
  {
    path: '',
    component: SelectCleanerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectCleanerPageRoutingModule {}
