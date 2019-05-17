import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-users',
  template: `
  <ul>
    <li *ngFor="let user of users">
      <a [routerLink]="[user.login.uuid]">{{user.name.first}}</a>
    </li>
  </ul>
  `,
  styles: ['']
})
export class UsersComponent implements OnInit {

  users: [object];

  constructor(public service: DataService) { }

  ngOnInit() {
    const data = this.service.getCachedData();
    console.log(data.results);
    this.users = data.results;
  }

}
