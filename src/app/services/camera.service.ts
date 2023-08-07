import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  photos: String[] =  [];
  
  constructor(private database:DatabaseService) { }

  async takePhoto(id: String){
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      allowEditing: false,
      source: CameraSource.Camera,
      quality: 50
    });
    if(photo.webPath){
      this.photos.unshift(photo.webPath);
    }

    const imageData = photo.dataUrl;
    this.saveImage(imageData!, id);
  }


  saveImage(imageData: String, id:String){
    let photo = {
      FichaId: id,
      Foto: imageData
    }
      
    this.database.addFoto(photo).subscribe((data) => {
      console.log("Foto guardada");
    }, (error) => {
      console.log(error);
    })

  }

 

}
