import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { SessionService } from '../services/session.service';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private database: DatabaseService,
    private session: SessionService
  ) {}

  messages: any = [];

  newMessage: string = '';
  user: any = {};
  userId: any = '';
  users: any = [];

  uid: any;
  app = initializeApp(environment.firebaseConfig);
  auth = getAuth();
  provider = new GoogleAuthProvider();

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.uid = user.uid;
        this.database.getuserMensajes(this.uid).subscribe(
          (data) => {
            console.log('mensajes actualizados');
            this.messages = data;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      let message = {
        text: this.newMessage,
        time: currentTime,
        incoming: true,
        senderId: 'admin',
        recipeId: this.uid,
      };
      this.database.addMensaje(message).subscribe((data) => {
        console.log('Mensaje enviado');

        this.database.getuserMensajes(this.uid).subscribe(
          (data) => {
            console.log('mensajes actualizados');
            this.messages = data;
          },
          (error) => {
            console.log(error);
          }
        );
      });

      this.newMessage = '';
    }
  }
  ionViewWillEnter() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.uid = user.uid;
        this.database.getuserMensajes(this.uid).subscribe(
          (data) => {
            console.log('mensajes actualizados');
            this.messages = data;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  cerrarSesion() {
    this.session.signOut();
  }
}
