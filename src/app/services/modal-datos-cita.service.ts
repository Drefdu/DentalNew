import { Injectable } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ModalDatosCitaService {
  
  constructor(navParams: NavParams) { 
    console.log(navParams.get('FichaId'));
  }
}
