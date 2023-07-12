import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


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
  
  
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}

  messages: Message[] = [
    {
      text: 'Hola, que tal!!',
      time: '10:00 AM',
      incoming: true
    },
    {
      text: 'me gustaria agendar una cita',
      time: '10:01 AM',
      incoming: true
    }
  ];
    
  newMessage: string = '';
  user: any = {};
  userId:any = ''
  users: any = [];
    
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.userId = recipeId;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.messages.push({
        text: this.newMessage,
        time: currentTime,
        incoming: false
      });
      this.newMessage = '';
    }
  }
  ionViewWillEnter(){
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.dataService.getUsers().subscribe(data =>{
        this.users = data;
        this.user = this.users[recipeId!];
      })
      
     });
  }
}
