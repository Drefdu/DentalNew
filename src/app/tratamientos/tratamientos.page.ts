import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.page.html',
  styleUrls: ['./tratamientos.page.scss'],
})
export class TratamientosPage implements OnInit {
  users: any = [];
  public results = [...this.users];

  paramfiltros = {
    menores: '18',
    adultos: '19',
    mayores: '60'
  }



  constructor(
    private datosService: DataService,
    private database: DatabaseService
  ) {}

  ngOnInit() {
    this.database.getAllFichas().subscribe((data) => {
      this.users = data;
      this.results = [...this.users];
      console.log(data);
    });
  }
  ionViewWillEnter() {
    this.database.getAllFichas().subscribe((data) => {
      this.users = data;
      this.results = [...this.users];
      console.log(data);
    });
  }
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = Object.keys(this.users)
      .filter(
        (key) =>
          this.users[key].Nombre.toLowerCase().indexOf(query) > -1 ||
          this.users[key].Apellidos.toLowerCase().indexOf(query) > -1
      )
      .map((key) => this.users[key]);
  }

  filtros(rango: String) {
    if (rango == '18') {
      this.results = this.users.filter(
        (usuario: { Edad: number }) => usuario.Edad < 18
      );
    }
    if (rango == '19'){
      this.results = this.users.filter(
        (usuario: { Edad: number }) => usuario.Edad > 18 && usuario.Edad < 60
      );
    }
    if (rango == '60'){
      this.results = this.users.filter(
        (usuario: { Edad: number }) => usuario.Edad > 60
      );
    }
  }
}
