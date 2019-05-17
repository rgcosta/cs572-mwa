import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details.component';
import {RouterModule} from "@angular/router";
import {Userguard} from "./userguard";
import { UsernotfoundComponent } from './usernotfound.component';

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, UsernotfoundComponent],
  imports: [
    CommonModule, RouterModule.forChild([
      {path: '', component: UsersComponent},
      {path: ':uuid', component: UserDetailsComponent, canActivate: [Userguard]},
      {path: 'notfound', component: UsernotfoundComponent}
    ])
  ],
  bootstrap: [UsersComponent],
  providers: [Userguard]
})
export class UsersModule { }
