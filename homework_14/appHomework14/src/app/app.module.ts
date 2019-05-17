import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot([
      {path: 'users', loadChildren: './users/users.module#UsersModule'}]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
