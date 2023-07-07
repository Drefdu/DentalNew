import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.page.html',
  styleUrls: ['./tratamientos.page.scss'],
})
export class TratamientosPage implements OnInit {
  
  users: any = []  
  
  constructor(private datosService: DataService) { }

  ngOnInit() {
    this.datosService.getUsers().subscribe(data =>{
      this.users = data;
      console.log(data)
    })
  }
  ionViewWillEnter(){
    this.datosService.getUsers().subscribe(data =>{
      this.users = data;
      console.log(data)
    })
  }
  

}
