import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { DatabaseService } from 'src/app/services/database.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
//import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  user: any = {};
  app = initializeApp(environment.firebaseConfig)
  auth = getAuth();
  provider = new GoogleAuthProvider();

  ficha = {}
  
  constructor(private database: DatabaseService, private router:Router) { }

  ngOnInit() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  }
  
  addFicha(Nombre:any, Apellidos:any, Sexo:any, Telefono:any, Edad:any,Altura:any,AntecedentesHereditarios:any,ETS:any,ED:any,EC:any,OP:any,auxHigiene:any,LimpDientes:any,dulces:any,adicciones:any,alergias:any){
    console.log("ola");
    console.log(this.user.uid);
    console.log(Nombre.value);
    this.ficha = {
      UserId: this.user.uid,
      Nombre: Nombre.value,
      Apellidos: Apellidos.value,
      Sexo: Sexo.value,
      Telefono: Telefono.value,
      Edad: Edad.value,
      Altura:Altura.value,
      AntecedentesHereditarios:AntecedentesHereditarios.value,
      ETS:ETS.value,
      ED:ED.value,
      EC:EC.value,
      OP:OP.value,
      auxHigiene:auxHigiene.value,
      LimpDientes:LimpDientes.value,
      dulces:dulces.value,
      adicciones:adicciones.value,
      alergias:alergias.value
    }
    console.log(this.ficha);

    this.database.addFicha(this.ficha).subscribe((data) => {
      console.log(this.ficha);
      this.router.navigate(['/ficha-user']);
      console.log("hola");
    }, error => {
      console.log(error);
    })
  }
}
