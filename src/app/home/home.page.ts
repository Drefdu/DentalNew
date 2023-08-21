import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { SessionService } from '../services/session.service';
import { DatabaseService } from 'src/app/services/database.service';

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
  datos:any={};

  constructor(private router: Router, private session: SessionService,private database: DatabaseService) {}
  
  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.database.getUser(this.user.uid).subscribe(data => {
          this.datos=data;
          console.log(this.datos);
        });
        
      }
    });
}

  cerrarSesion() {
    this.session.signOut();
  }
}
