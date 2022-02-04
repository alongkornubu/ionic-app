import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarresultPage } from './avatarresult.page';

const routes: Routes = [
  {
    path: '',
    component: AvatarresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvatarresultPageRoutingModule {}
