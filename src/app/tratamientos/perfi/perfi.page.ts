import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfi',
  templateUrl: './perfi.page.html',
  styleUrls: ['./perfi.page.scss'],
})
export class PerfiPage implements OnInit {
  selectTabs = 'galeria';
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}
  
  user: any = {};

  users: any = [];

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
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

