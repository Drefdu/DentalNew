import { Component, OnInit } from '@angular/core';
import { ModalCitaComponent } from '../modal-cita/modal-cita.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-listasolicitud',
  templateUrl: './listasolicitud.page.html',
  styleUrls: ['./listasolicitud.page.scss'],
})
export class ListasolicitudPage implements OnInit {
  

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }


  async modalCita() {
    const modal = await this.modalController.create({
      component: ModalCitaComponent,
      
    });

  

    return await modal.present();
  }

  

}


