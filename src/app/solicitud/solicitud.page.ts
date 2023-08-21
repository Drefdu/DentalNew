import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {
  user: any = {};
  app = initializeApp(environment.firebaseConfig);
  auth = getAuth();
  provider = new GoogleAuthProvider();
  datos:any={};

  fichas: any = [];
  public results = [...this.fichas];

  cita = {};

  constructor(
    private router: Router,
    private database: DatabaseService,
    private session: SessionService
  ) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        this.user = user;
        this.database.getUser(this.user.uid).subscribe(data => {
          this.datos=data;
          console.log(this.datos);
        });
        await this.database.getFichas(this.user.uid).subscribe(
          (data) => {
            this.fichas = data;
            console.log(data);
            this.results = [...this.fichas];
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  addCita(FichaId: any, Motivo: any, Fecha: any, Hora: any) {
    this.cita = {
      FichaId: FichaId.value,
      Motivo: Motivo.value,
      Fecha: Fecha.value,
      Hora: Hora.value,
    };
    this.database.addCita(this.cita).subscribe(
      (data) => {
        alert('Cita solicitada con exito');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async addEvento(description: any, FichaId: any, start: any) {
    let fecha = new Date(start.value);
    let inicio = fecha.setHours(fecha.getHours() - 6);
    let end = fecha.setHours(fecha.getHours() + 1);
    let ficha: any = {};
    
    this.database.getFicha(FichaId.value).subscribe(
      (data) => {
        ficha = data;

        let evento = {
          description: description.value,
          FichaId: FichaId.value,
          start: inicio,
          end: end,
          title: ficha.Nombre + ' ' + ficha.Apellidos,
        };

        this.database.addEvento(evento).subscribe(
          () => {
            console.log('enviado con exito');
            this.router.navigate(["/home"]);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cerrarSesion() {
    this.session.signOut();
  }
}