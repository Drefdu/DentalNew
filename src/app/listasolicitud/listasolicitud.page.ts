import { Component, OnInit } from '@angular/core';
import { ModalCitaComponent } from '../modal-cita/modal-cita.component';
import { ModalController, NavController } from '@ionic/angular';

import { DatabaseService } from '../services/database.service';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'app-listasolicitud',
  templateUrl: './listasolicitud.page.html',
  styleUrls: ['./listasolicitud.page.scss'],
})
export class ListasolicitudPage implements OnInit {
  eventos: any = [];
  user: any = {};
  app = initializeApp(environment.firebaseConfig)
  auth = getAuth();
  provider = new GoogleAuthProvider();

  constructor(
    private modalController: ModalController,
    private database: DatabaseService,
    private session: SessionService,

  ) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    });

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

  cerrarSesion() {
    this.session.signOut();
  }

 
}
