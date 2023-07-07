import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentaduraPageRoutingModule } from './dentadura-routing.module';

import { DentaduraPage } from './dentadura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentaduraPageRoutingModule
  ],
  declarations: [DentaduraPage]
})
export class DentaduraPageModule {}
