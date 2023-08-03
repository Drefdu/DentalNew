import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = {};
  app = initializeApp(environment.firebaseConfig)
  auth = getAuth();
  provider = new GoogleAuthProvider();

  constructor(private router: Router, private session: SessionService) {}
  
  ngOnInit() {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.user = user;
          console.log(this.user);
        }
      });
  }

  cerrarSesion() {
    this.session.signOut();
  }
}
