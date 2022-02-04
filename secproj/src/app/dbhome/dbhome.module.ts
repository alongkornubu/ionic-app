import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbhomePageRoutingModule } from './dbhome-routing.module';

import { DbhomePage } from './dbhome.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbhomePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [DbhomePage]
})
export class DbhomePageModule {}
