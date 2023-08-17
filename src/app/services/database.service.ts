import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  url = "http://localhost:4000/users";
  ficha = "http://localhost:4000/fichas";
  citas = "http://localhost:4000/citas";
  fotos = "http://localhost:4000/fotos";
  eventos = "http://localhost:4000/eventos"
  puslo = "http://localhost:4000/pulso";
  chat = "http://localhost:4000/mensajes/";
  dientes = "http://localhost:4000/dientes/";


  constructor(private http: HttpClient) { }
  
  getUsers():Observable<any>{
   return this.http.get(this.url);
  }
  
  getUser(uid: String):Observable<any>{
    return this.http.get("http://localhost:4000/users/" + uid);
  }

  getPulse():Observable<any>{
    return this.http.get("http://localhost:4000/pulso/");
  }

  addUser(uid: {}):Observable<any>{
    return this.http.post(this.url, uid);
  }

  addFicha(ficha: {}):Observable<any>{
    return this.http.post(this.ficha, ficha);
  }

  getFichas(uid:String):Observable<any>{
    return this.http.get(this.ficha + "/" + uid);
  }
  
  getAllFichas():Observable<any>{
    return this.http.get(this.ficha);
  }

  getFicha(_id:String):Observable<any>{
    return this.http.get(this.ficha + "/ficha/" + _id);
  }

  updateFicha(ficha: {}, _id:String):Observable<any>{
    return this.http.put(this.ficha + "/" + _id, ficha);
  }

  deleteFicha(_id:String):Observable<any>{
    return this.http.delete(this.ficha + "/" + _id);
  }
  
  getCitas():Observable<any>{
    return this.http.get(this.citas);
  }
  addCita(cita: {}):Observable<any>{
    return this.http.post(this.citas, cita);
  }

  addFoto(photo: {}):Observable<any>{
    
    const options = {
      maxFileSize: 10 * 1024 * 1024, // 10MB (o el tamaño necesario)
    };
    
    return this.http.post<any>(this.fotos, photo);
    
  }

  getFotos(FichaId: String):Observable<any>{
    return this.http.get(this.fotos + "/" + FichaId);
  }

  deleteFoto(id:String):Observable<any>{
    return this.http.delete(this.fotos + "/" + id);
  }

  getEventos():Observable<any>{
    return this.http.get(this.eventos);
  }

  addEvento(evento: {}):Observable<any>{
    return this.http.post(this.eventos, evento);
  }

  updateEvento(evento: {}, _id:String):Observable<any>{
    return this.http.put(this.eventos + "/" + _id, evento);
  }

  deleteEvento(_id:String):Observable<any>{
    return this.http.delete(this.eventos + "/" + _id);
  }

  addPulso(pulso: {}):Observable<any>{
    return this.http.post(this.puslo, pulso )
  }
  
  getPulso(id: String):Observable<any>{
    return this.http.get(this.puslo + "/" + id)
  }

  addMensaje(mensaje: {}):Observable<any>{
    return this.http.post(this.chat, mensaje);
  }

  getuserMensajes(id: String):Observable<any>{
    return this.http.get(this.chat + id);
  }

  addDiente(diente: {}):Observable<any>{
    return this.http.post(this.dientes, diente);
  }

  getDiente(dienteId: String):Observable<any>{
    return this.http.get(this.dientes + dienteId);
  }

  updateDiente(diente: {}, dienteId: String):Observable<any>{
    return this.http.put(this.dientes + dienteId, diente);
  }
}

