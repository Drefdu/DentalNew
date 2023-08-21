import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { DataService } from 'src/app/services/data.service';
import { CameraService } from 'src/app/services/camera.service';
import { DatabaseService } from 'src/app/services/database.service';

import { SessionService } from '../../services/session.service';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from 'firebase/auth';
import { environment } from 'src/environments/environment';


interface ModalOptions {
  backdropDismiss: false;
}

@Component({
  selector: 'app-perfi',
  templateUrl: './perfi.page.html',
  styleUrls: ['./perfi.page.scss'],
})
export class PerfiPage implements OnInit {


  app = initializeApp(environment.firebaseConfig)
  auth = getAuth();
  provider = new GoogleAuthProvider();

  selectTabs = 'datos';
  isModalOpen = false;
  isModalOpenTwo = false;
  foto: any = {};
  datos:any={};
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
    // private dataService: DataService,
    private camera: CameraService,
    private router: Router,
    private database: DatabaseService,
    private session: SessionService,
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
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.user = user;
        this.database.getUser(this.user.uid).subscribe(data => {
          this.datos=data;
          console.log(this.datos);
        });
        
      }
    });
    
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

  addPulso(){
    let pulso ={
      FichaId: this.user._id
    }
    
    this.database.getPulso(this.user._id).subscribe((data) => {
      if(data.msg == "El usuario no existe")
      {
        this.database.addPulso(pulso).subscribe((data) => {

        }, (error) => {
          console.log(error)
        })
      }
      else{
        console.log("Pulso ya registrado");
      }
    }, (erro) => {
      console.log(erro);
    })
  }
  




  cerrarSesion() {
    this.session.signOut();
  }
}