import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarresultPageRoutingModule } from './avatarresult-routing.module';

import { AvatarresultPage } from './avatarresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarresultPageRoutingModule
  ],
  declarations: [AvatarresultPage]
})
export class AvatarresultPageModule {}
