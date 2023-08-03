import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  url = "http://localhost:4000/users";
  ficha = "http://localhost:4000/fichas";

  constructor(private http: HttpClient) { }
  
  getUsers():Observable<any>{
   return this.http.get(this.url);
  }
  
  getUser(uid: String):Observable<any>{
    return this.http.get("http://localhost:4000/users/" + uid);
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

  getFicha(_id:String):Observable<any>{
    return this.http.get(this.ficha + "/ficha/" + _id);
  }

  updateFicha(ficha: {}, _id:String):Observable<any>{
    return this.http.put(this.ficha + "/" + _id, ficha);
  }

  deleteFicha(_id:String):Observable<any>{
    return this.http.delete(this.ficha + "/" + _id);
  }
  
}
