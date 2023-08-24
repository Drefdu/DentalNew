import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  app = initializeApp(environment.firebaseConfig)
  auth = getAuth();
  provider = new GoogleAuthProvider();
  datosFicha: any = {};
  datos:any={};
  user: any = {};
  constructor(private activatedRoute: ActivatedRoute, private database: DatabaseService, private router: Router) { }
  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('_id');
      this.database.getFicha(recipeId!).subscribe((data) => {
        this.datosFicha = data;
      },(error) => {
        console.log(error);
      })
    });

    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.database.getUser(this.user.uid).subscribe(data => {
          this.datos=data;
          console.log(this.datos);
        });
        
      }
    });
  }
  
  deleteUser(){
    this.database.deleteFicha(this.datosFicha._id).subscribe((data) => {
      this.router.navigate(['/ficha-user']);
    }, (error) => {
      console.log(error);
    })
  }
  
}
