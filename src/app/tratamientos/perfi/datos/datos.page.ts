import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  user: any = {};
  userId:any = ''
  users: any = [];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
   
      
  
  }
  ionViewWillEnter(){
   
      
    
  }

}
