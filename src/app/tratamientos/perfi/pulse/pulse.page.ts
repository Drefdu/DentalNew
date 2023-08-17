import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
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

  public result = [...this.valor];
  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService, private database: DatabaseService) { }

  ngOnInit() {
  
  }



  pulseUser() {
    const intervalTime = 10000; 
    const pulseInterval = setInterval(() => {
      this.database.getPulse().subscribe(data => {
        this.valor = data;
        console.log(this.valor);
        this.result = [...this.valor];
        this.cardio = this.result[0];
      });
    }, intervalTime);
  }
  

}
