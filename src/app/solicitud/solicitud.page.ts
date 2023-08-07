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
  app = initializeApp(environment.firebaseConfig)
  auth = getAuth();
  provider = new GoogleAuthProvider();

  fichas: any = []  ;
  public results = [...this.fichas];

  cita = {};

  constructor(private router: Router, private database: DatabaseService, private session: SessionService) { }

  ngOnInit() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        this.user = user;
        await this.database.getFichas(this.user.uid).subscribe((data) => {
          this.fichas = data;
          console.log(data);
          this.results = [...this.fichas];
        },(error) => {
          console.log(error);
        })
      }
    });
  }

  addCita(FichaId:any, Motivo:any, Fecha:any, Hora: any){
    this.cita = {
      FichaId: FichaId.value,
      Motivo: Motivo.value,
      Fecha: Fecha.value,
      Hora: Hora.value
    }
    this.database.addCita(this.cita).subscribe((data) => {
      alert("Cita solicitada con exito");
      this.router.navigate(['/home']);
    }, (error) => {
      console.log(error);
    })
  }

  cerrarSesion() {
    this.session.signOut();
  }

}
