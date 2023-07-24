import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: any = {};
  constructor(private router: Router) {}
  ngOnInit() {
    const app = initializeApp(environment.firebaseConfig);
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        const uid = user.uid;
        console.log(user);
        console.log(uid);
        console.log(user.email);
        // ...
      } else {
        this.router.navigate(['/sign-in']);
      }
    });
  }

  cerrarSesion() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Sesion cerrada.")
        this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        console.log("ocurrio un error al tratar de cerar la sesion.");
      });
  }
}
