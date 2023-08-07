import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListasolicitudPageRoutingModule } from './listasolicitud-routing.module';

import { ListasolicitudPage } from './listasolicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListasolicitudPageRoutingModule
  ],
  declarations: [ListasolicitudPage]
})
export class ListasolicitudPageModule {}
