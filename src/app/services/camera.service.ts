import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  photos: String[] =  [];
  
  constructor() { }

  async takePhoto(){
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    if(photo.webPath){
      this.photos.unshift(photo.webPath);
    }
  }
}
