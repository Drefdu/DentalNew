import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.page.html',
  styleUrls: ['./tratamientos.page.scss'],
})
export class TratamientosPage implements OnInit {
  
  users: any = []  
  public results = [...this.users];
  constructor(private datosService: DataService) { }

  ngOnInit() {
    this.datosService.getUsers().subscribe(data =>{
      this.users = data;
      this.results = [...this.users];
      console.log(data)
    })
  }
  ionViewWillEnter(){
    this.datosService.getUsers().subscribe(data =>{
      this.users = data;
      this.results = [...this.users];
      console.log(data)
    })
  }
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = Object.keys(this.users)
      .filter(key => this.users[key].name.toLowerCase().indexOf(query) > -1)
      .map(key => this.users[key]);
  }

}
