import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-pulse',
  templateUrl: './pulse.page.html',
  styleUrls: ['./pulse.page.scss'],
})
export class PulsePage implements OnInit {
  selectTabs = 'cardio1';
  valor: any = [];
  cardio: any = {};
  user: any = {};
  userId:any = ''
  users: any = [];
    
  uid: any;
  public result = [...this.valor];
  constructor(private activatedRoute: ActivatedRoute, private database: DatabaseService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      this.userId = recipeId;
    });
    const intervalTime = 10000; 
    const pulseInterval = setInterval(() => {
      this.database.getPulse().subscribe(data => {
        this.valor = data;
        console.log(this.valor);
        this.result = [...this.valor];
        this.cardio = this.result[0];
        console.log(this.cardio.valor);
      });
    }, intervalTime);
  }




  

}
