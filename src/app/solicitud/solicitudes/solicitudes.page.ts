import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { SessionService } from '../../services/session.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  user: any = {};
  app = initializeApp(environment.firebaseConfig)
  auth = getAuth();
  provider = new GoogleAuthProvider();

  fichas: any = []  
  public results = [...this.fichas];

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

  ionViewWillEnter(){
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


  addFicha(){
    this.router.navigate(['/add-user'])
  }

  cerrarSesion() {
    this.session.signOut();
  }
}
