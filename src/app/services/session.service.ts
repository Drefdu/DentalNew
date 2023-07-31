import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  app = initializeApp(environment.firebaseConfig);
  auth = getAuth();
  provider = new GoogleAuthProvider();

  constructor(private router: Router, private database: DatabaseService) {}

  async login() {
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      const uid = user.uid;

      this.database.addUser(user).subscribe(
        (data) => {
          console.log('usuario registrado exitosamente');
          window.location.href = '/home' + '?w1=' + uid;
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
    }
  }

  async isLogged(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  signOut() {
    signOut(this.auth)
      .then(() => {
        console.log('Sesion cerrada.');
        this.router.navigate(['/sign-in']);
      })
      .catch((error) => {
        console.log('ocurrio un error al tratar de cerar la sesion.');
      });
  }
}
