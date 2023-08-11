import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PulsePageRoutingModule } from './pulse-routing.module';

import { PulsePage } from './pulse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PulsePageRoutingModule
  ],
  declarations: [PulsePage]
})
export class PulsePageModule {}
