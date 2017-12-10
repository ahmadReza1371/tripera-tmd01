import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule}from './app-routing.module'

import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { HomeComponent } from './home/home.component';
import { TourBoxComponent } from './tour-box/tour-box.component';


import { HttpClientModule ,HttpHeaders} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';

@NgModule({ 
  declarations: [
    TourDetailComponent,
    HomeComponent,
    TourBoxComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
