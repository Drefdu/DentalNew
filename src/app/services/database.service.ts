import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  url = "http://localhost:4000/users";

  constructor(private http: HttpClient) { }
  
  getUsers():Observable<any>{
   return this.http.get(this.url);
  }

  addUser(uid: {}):Observable<any>{
    return this.http.post(this.url, uid);
  }

}
