import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { DatabaseService } from 'src/app/services/database.service';


interface Message {
  text: string;
  time: string;
  incoming: boolean;
}  

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})

export class MensajesPage implements OnInit {
  
  
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private database: DatabaseService) {}

  messages: any = [];
    
  newMessage: string = '';
  user: any = {};
  userId:any = ''
  users: any = [];
    
  uid: any;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      this.userId = recipeId;
      
      this.database.getFicha(this.userId).subscribe((data) => {
        this.user = data;
        this.uid = this.user.UserId;
        
        this.database.getuserMensajes(this.uid).subscribe((data) => {
          console.log("mensajes actualizados");
          this.messages = data;
          console.log(this.user);
        }, (error) => {
          console.log(error);
        })
      }, (error) => {
        console.log(error);
      })

      

    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      let message = {
        text: this.newMessage,
        time: currentTime,
        incoming: false,
        senderId: "admin",
        recipeId: this.uid
      }
      this.database.addMensaje(message).subscribe((data) => {
        console.log("Mensaje enviado");

        this.database.getuserMensajes(this.uid).subscribe((data) => {
          console.log("mensajes actualizados");
          this.messages = data;
        }, (error) => {
          console.log(error);
        })
      })
      
      

      this.newMessage = '';
    }
  }
  ionViewWillEnter(){
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      this.userId = recipeId;
      
      this.database.getFicha(this.userId).subscribe((data) => {
        this.user = data;
        this.uid = this.user.UserId;
        
        this.database.getuserMensajes(this.uid).subscribe((data) => {
          console.log("mensajes actualizados");
          this.messages = data;
          console.log(this.user);
        }, (error) => {
          console.log(error);
        })
      }, (error) => {
        console.log(error);
      })
  })}
}
