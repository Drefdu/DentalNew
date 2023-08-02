import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
     
  datosFicha: any = {};

  constructor(private activatedRoute: ActivatedRoute, private database: DatabaseService) { }
  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('_id');
      console.log(recipeId);
      this.database.getFicha(recipeId!).subscribe((data) => {
        this.datosFicha = data;
        console.log(data);
      },(error) => {
        console.log(error);
      })
    });
  }

}
