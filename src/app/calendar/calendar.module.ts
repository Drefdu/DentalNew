import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [  
    MbscModule, 
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule, ReactiveFormsModule, HttpClientModule, HttpClientJsonpModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
