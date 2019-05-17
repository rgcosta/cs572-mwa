import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  template: `
    <p> Name: {{this.user.name.first}}
        Gender: {{this.user.gender}}
    </p>
  `,
  styles: []
})
export class UserDetailsComponent implements OnInit {

  user;
  uuid;

  constructor(public service: DataService, private route: ActivatedRoute) {
    route.params.subscribe( params => {
      this.uuid = params['uuid'];
    });
  }

  ngOnInit() {
    this.service.getCachedData().results.forEach( user => {
      if (user.login.uuid === this.uuid){
        this.user = user;
      }
    })
  }

}
