import { Injectable } from '@angular/core';
import {TOKEN, USER} from "./constants/storage";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getUser(){
    return JSON.parse(localStorage[USER]);
  }

  setUser(user: Object){
    localStorage[USER] = JSON.stringify(user);
  }

  clearUser() {
    localStorage[USER] = JSON.stringify({})
  }

  getToken(){
    return localStorage[TOKEN];
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN, token)
  }
}
