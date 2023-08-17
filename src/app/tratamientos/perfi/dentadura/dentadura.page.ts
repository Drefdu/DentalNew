import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-dentadura',
  templateUrl: './dentadura.page.html',
  styleUrls: ['./dentadura.page.scss'],
})
export class DentaduraPage implements OnInit {

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private activatedRoute: ActivatedRoute, private database: DatabaseService) {}
  user: any = {};
  userId:any = ''
  users: any = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      
      this.database.getFicha(recipeId!).subscribe((data) =>{
        this.user = data;
        console.log(this.user);
      }, (error) => {
        console.log(error);
      })
      
     });
  }
  ionViewWillEnter(){
  
  }


}
