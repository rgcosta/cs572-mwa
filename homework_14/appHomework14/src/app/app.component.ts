import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  template: `
    <h1>App Component</h1>
    <a [routerLink]="['/']">Home</a> |
    <a [routerLink]="['users']">View Users</a>
    <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class AppComponent {

  constructor(public dataService: DataService){
  }

  // ngOnInit(): void {
  //   console.log(this.dataService.getOnlineData());
  // }


}
