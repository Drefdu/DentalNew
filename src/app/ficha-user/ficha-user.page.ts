import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ficha-user',
  templateUrl: './ficha-user.page.html',
  styleUrls: ['./ficha-user.page.scss'],
})
export class FichaUserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addFicha(){
    this.router.navigate(['/add-user'])
  }
}
