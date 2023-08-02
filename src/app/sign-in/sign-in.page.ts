import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  
  constructor(private router: Router, private session: SessionService, private database: DatabaseService) { }

  ngOnInit() {
    this.getUsers();

  }

  login() {
   this.session.login(); 
  }

  getUsers(){
    this.database.getUsers().subscribe(data =>{
      console.log(data);
    }, error => {
      console.log(error);
    })
  }
}
