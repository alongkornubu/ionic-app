import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarpgPage } from './avatarpg.page';

const routes: Routes = [
  {
    path: '',
    component: AvatarpgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarpgPageRoutingModule {}
