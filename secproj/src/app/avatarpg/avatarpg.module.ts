import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarpgPageRoutingModule } from './avatarpg-routing.module';

import { AvatarpgPage } from './avatarpg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarpgPageRoutingModule
  ],
  declarations: [AvatarpgPage]
})
export class AvatarpgPageModule {}
