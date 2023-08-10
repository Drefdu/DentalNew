import { Component, OnInit } from '@angular/core';
import { ModalCitaComponent } from '../modal-cita/modal-cita.component';
import { ModalController, NavController } from '@ionic/angular';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-listasolicitud',
  templateUrl: './listasolicitud.page.html',
  styleUrls: ['./listasolicitud.page.scss'],
})
export class ListasolicitudPage implements OnInit {
  eventos: any = [];

  constructor(
    private modalController: ModalController,
    private database: DatabaseService,

  ) {}

  ngOnInit() {
    this.database.getEventos().subscribe(
      (data) => {
        this.eventos = data;
        this.eventos = this.eventos.filter(
          (evento: { aceptado: String }) => evento.aceptado == 'no'
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }



  async modalCita(evento: any) {
    const modal = await this.modalController.create({
      component: ModalCitaComponent, 
      componentProps: {
        'evento': evento
      }
    });
    return await modal.present();
  }
}
