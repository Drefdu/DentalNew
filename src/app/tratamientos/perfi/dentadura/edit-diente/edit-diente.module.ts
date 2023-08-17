import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDientePageRoutingModule } from './edit-diente-routing.module';

import { EditDientePage } from './edit-diente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDientePageRoutingModule
  ],
  declarations: [EditDientePage]
})
export class EditDientePageModule {}
