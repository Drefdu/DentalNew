import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaUserPageRoutingModule } from './ficha-user-routing.module';

import { FichaUserPage } from './ficha-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaUserPageRoutingModule
  ],
  declarations: [FichaUserPage]
})
export class FichaUserPageModule {}
