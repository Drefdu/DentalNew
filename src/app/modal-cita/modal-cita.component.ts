import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-cita',
  templateUrl: './modal-cita.component.html',
  styleUrls: ['./modal-cita.component.scss'],
})
export class ModalCitaComponent {
  constructor(private modalController: ModalController) {}

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalCitaComponent,
    });
    return await modal.present();
  }

  cerrarModal() {
    this.modalController.dismiss();
  }
}
