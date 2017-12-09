import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { HomeComponent } from './home/home.component';
import { TourBoxComponent } from './tour-box/tour-box.component';


import { HttpClientModule ,HttpHeaders} from '@angular/common/http';

@NgModule({ 
  declarations: [
    AppComponent,
    TourDetailComponent,
    HomeComponent,
    TourBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
