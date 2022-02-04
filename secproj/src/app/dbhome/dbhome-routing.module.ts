import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbhomePage } from './dbhome.page';

const routes: Routes = [
  {
    path: '',
    component: DbhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DbhomePageRoutingModule {}
