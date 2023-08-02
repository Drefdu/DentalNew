import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-ficha-user',
  templateUrl: './ficha-user.page.html',
  styleUrls: ['./ficha-user.page.scss'],
})
export class FichaUserPage implements OnInit {
  
  fichas: any = []  
  public results = [...this.fichas];

  constructor(private router: Router, private database: DatabaseService) { }

  ngOnInit() {
    this.database.getFichas().subscribe((data) => {
      this.fichas = data;
      this.results = [...this.fichas];
    },(error) => {
      console.log(error);
    })
  }
  addFicha(){
    this.router.navigate(['/add-user'])
  }
}
