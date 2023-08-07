import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DientePageRoutingModule } from './diente-routing.module';

import { DientePage } from './diente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DientePageRoutingModule
  ],
  declarations: [DientePage]
})
export class DientePageModule {}
