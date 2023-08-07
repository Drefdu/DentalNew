import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CameraService } from 'src/app/services/camera.service';
import { DatabaseService } from 'src/app/services/database.service';

interface ModalOptions {
  backdropDismiss: false;
}

@Component({
  selector: 'app-perfi',
  templateUrl: './perfi.page.html',
  styleUrls: ['./perfi.page.scss'],
})
export class PerfiPage implements OnInit {
  selectTabs = 'datos';
  isModalOpen = false;
  isModalOpenTwo = false;
  foto: any = {};
  presentingElement: any = null;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setOpenTwo(args: any) {
    this.isModalOpen = args.arg1;
    this.foto = args.arg2;
  }
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private camera: CameraService,
    private router: Router,
    private database: DatabaseService
  ) {}

  public actionSheetButtons = [
    {
      text: 'Tomar foto',
      role: 'destructive',
      handler: () => {
        this.takePhoto();
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
  photos: any = [];

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.database.getFicha(recipeId!).subscribe((data) => {
        this.user = data;
      });

      this.database.getFotos(recipeId!).subscribe((data) => {
        this.photos = data;
      });
    });
  }
  ionViewWillEnter() {
    this.presentingElement = document.querySelector('.ion-page');
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const recipeId = paramMap.get('userId');
      console.log(recipeId);
      this.database.getFicha(recipeId!).subscribe((data) => {
        this.user = data;
      });

      this.database.getFotos(recipeId!).subscribe(
        (data) => {
          this.photos = data;
        },
        (error) => {}
      );
    });
  }

  async takePhoto() {
    await this.camera.takePhoto(this.user._id);
  }

  deleteFoto(id: String) {
    this.database.deleteFoto(id).subscribe(
      () => {
        this.isModalOpen = false;
        this.database.getFotos(this.user._id).subscribe(
          (data) => {
            this.photos = data;
            console.log("prueba");
          },
          (error) => {}
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
