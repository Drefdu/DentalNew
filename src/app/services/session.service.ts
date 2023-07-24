import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  login(){
  
  }

  signOut(){

  }

  getName(){

  }

  getEmail(){

  }
  
  getPhoto(){}

  getSession(){}
}
