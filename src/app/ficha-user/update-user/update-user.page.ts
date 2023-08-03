import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  
  ficha = {};
  _id: any;
  datosFicha: any = {};

  constructor(private database:DatabaseService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('_id');
      console.log(recipeId);
      this._id = recipeId;
      this.database.getFicha(recipeId!).subscribe((data) => {
        this.datosFicha = data;
      },(error) => {
        console.log(error);
      })
    });
  }

  updateFicha(Nombre:any, Apellidos:any, Sexo:any, Telefono:any, Edad:any,Altura:any,AntecedentesHereditarios:any,ETS:any,ED:any,EC:any,OP:any,auxHigiene:any,LimpDientes:any,adicciones:any,alergias:any){
    this.ficha = {
      Nombre:Nombre.value || this.datosFicha.Nombre,
      Apellidos: Apellidos.value || this.datosFicha.Apellidos,
      Sexo: Sexo.value || this.datosFicha.Sexo,
      Telefono: Telefono.value || this.datosFicha.Telefono,
      Edad: Edad.value || this.datosFicha.Edad,
      Altura:Altura.value || this.datosFicha.Altura,
      AntecedentesHereditarios:AntecedentesHereditarios.value|| this.datosFicha.AntecedentesHereditarios,
      ETS:ETS.value || this.datosFicha.ETS,
      ED:ED.value || this.datosFicha.ED,
      EC:EC.value || this.datosFicha.EC,
      OP:OP.value || this.datosFicha.OP,
      auxHigiene:auxHigiene.value || this.datosFicha.auxHigiene,
      LimpDientes:LimpDientes.value|| this.datosFicha.LimpDientes,
      adicciones:adicciones.value || this.datosFicha.adicciones,
      alergias:alergias.value|| this.datosFicha.alergias

    }
    console.log(this.ficha);
    this.database.updateFicha(this.ficha, this._id).subscribe((data)=> {
      this.router.navigate(['/ficha-user']);
    }, (error) => {
      console.log(error);
    })
  }

}
