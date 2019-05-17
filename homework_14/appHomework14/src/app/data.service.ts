import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) {
    this.getOnlineData();
  }

  getOnlineData() {
    this.http.get('https://randomuser.me/api/?results=10').subscribe(data => {
      localStorage.setItem('users', JSON.stringify(data));
    });
  }

  getCachedData(){
    return JSON.parse(localStorage.getItem('users'));
  }


}
