import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-perfi',
  templateUrl: './perfi.page.html',
  styleUrls: ['./perfi.page.scss'],
})
export class PerfiPage implements OnInit {
  selectTabs = 'datos';
  isModalOpen = false;
  presentingElement: any = null;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private camera: CameraService,
    private router: Router
  ) {
    this.photos = this.camera.photos;
  }

  photos: String[] = [];
  public actionSheetButtons = [
    {
      text: 'Tomar foto',
      role: 'destructive',
      handler: () => {
        this.takePhoto();
      },
    },
    {
      text: 'Este dispositivo',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  user: any = {};
  usrId = 0;
  users: any = [];

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.usrId = parseInt(recipeId!, 10) - 1;
      this.dataService.getUsers().subscribe((data) => {
        this.users = data;
        this.user = this.users[this.usrId];
      });
    });
  }
  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.usrId = parseInt(recipeId!, 10) + 1;
      this.dataService.getUsers().subscribe((data) => {
        this.users = data;
        this.user = this.users[this.usrId];
      });
    });
  }
  async takePhoto() {
    this.camera.takePhoto();
  }
}
