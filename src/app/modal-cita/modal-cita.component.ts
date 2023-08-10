import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-modal-cita',
  templateUrl: './modal-cita.component.html',
  styleUrls: ['./modal-cita.component.scss'],
})
export class ModalCitaComponent {
  evento: any = {};
  constructor(
    private modalController: ModalController,
    navParams: NavParams,
    private database: DatabaseService
  ) {
    this.evento = navParams.get('evento');
    console.log(navParams.get('evento'));
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalCitaComponent,
    });

    return await modal.present();
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

  aceptar(start: any) {
    if (start.value) {
      let fecha = new Date(start.value);
      let inicio = fecha.setHours(fecha.getHours() - 6);
      let end = fecha.setHours(fecha.getHours() + 1);
      let evento2 = {
        start: inicio,
        end: end,
        aceptado: 'si',
      };
      this.database.updateEvento(evento2, this.evento._id).subscribe(
        () => {
          console.log('Aceptado');
          this.cerrarModal();
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      let evento2 = {
        aceptado: 'si',
      };
      this.database.updateEvento(evento2, this.evento._id).subscribe(
        () => {
          console.log('Aceptado');
          this.cerrarModal();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  eliminar() {
    this.database.deleteEvento(this.evento._id).subscribe(
      () => {
        console.log('eliminado con exito');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
