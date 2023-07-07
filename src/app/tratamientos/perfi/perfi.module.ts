import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfiPageRoutingModule } from './perfi-routing.module';

import { PerfiPage } from './perfi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfiPageRoutingModule
  ],
  declarations: [PerfiPage]
})
export class PerfiPageModule {}
