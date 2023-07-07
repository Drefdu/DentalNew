import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


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

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}
  user: any = {};
  userId:any = ''
  users: any = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.userId = recipeId;
      this.dataService.getUsers().subscribe(data =>{
        this.users = data;
        this.user = this.users[recipeId!];
      })
      
     });
  }
  ionViewWillEnter(){
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.dataService.getUsers().subscribe(data =>{
        this.users = data;
        this.user = this.users[recipeId!];
      })
      
     });
  }
  

}
