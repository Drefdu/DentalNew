import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-diente',
  templateUrl: './edit-diente.page.html',
  styleUrls: ['./edit-diente.page.scss'],
})
export class EditDientePage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private database: DatabaseService,
    private router: Router
  ) {}

  ngOnInit() {}

  Diente(Nombre: any, Tratamiento: any, Estado: any) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('dienteId');
      console.log(recipeId)
      this.database.getDiente(recipeId!).subscribe((data) => {
        if (data.msg != 'El usuario no existe') {
          let diente = {
            Nombre: Nombre.value || data.Nombre,
            Tratamiento: Tratamiento.value || data.Tratamiento,
            Estado: Estado.value || data.Estado,
            Numero: recipeId
          };

          this.database.updateDiente(diente, recipeId!).subscribe((data) => {
            console.log("actualizado con exito");
            alert("Modificado con exito");
          }, (error) => {
            console.log(error)
          })
        }else{
          let diente = {
            Nombre: Nombre.value || data.Nombre,
            Tratamiento: Tratamiento.value || data.Tratamiento,
            Estado: Estado.value || data.Estado,
            Numero: recipeId
          };

          this.database.addDiente(diente).subscribe((data) => {
            console.log("Diente agregado con exito");
            alert("Modificado con exito");
          }, (error) => {
            console.log(error);
          })
        }
      });
    });
  }
}
