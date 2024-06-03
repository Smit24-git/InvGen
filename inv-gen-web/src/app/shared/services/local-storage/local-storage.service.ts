import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(item: {key:string, value:string}) {
    localStorage.setItem(item.key, item.value);
  }

  getItem(key:string):string | null {
    return localStorage.getItem(key);
  }
}
