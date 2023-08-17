import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDientePageRoutingModule } from './form-diente-routing.module';

import { FormDientePage } from './form-diente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDientePageRoutingModule
  ],
  declarations: [FormDientePage]
})
export class FormDientePageModule {}
