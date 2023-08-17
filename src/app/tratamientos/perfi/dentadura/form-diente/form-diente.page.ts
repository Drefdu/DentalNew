import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-form-diente',
  templateUrl: './form-diente.page.html',
  styleUrls: ['./form-diente.page.scss'],
})
export class FormDientePage implements OnInit {
  
  recipeId:any = ''
  diente: any = {}
  constructor(private activatedRoute: ActivatedRoute,
    private database: DatabaseService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('dienteId');
      this.recipeId = recipeId;
      console.log(recipeId)

      this.database.getDiente(recipeId!).subscribe((data) => {
        this.diente = data;
      }, (error) => {
        console.log(error);
      })
    });
  }

}
