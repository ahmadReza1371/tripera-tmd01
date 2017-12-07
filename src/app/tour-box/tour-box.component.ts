import { Component, OnInit } from '@angular/core';
import {LastTourService}from '../Services/last-tour.service'
import { Itour } from '../Interfaces/itour';
@Component({
  selector: 'app-tour-box',
  templateUrl: './tour-box.component.html',
  styleUrls: ['./tour-box.component.css']
})
export class TourBoxComponent implements OnInit {

  
 tours:Itour[]=[];
  constructor(private tservice:LastTourService) { }

  ngOnInit() {
    this.tservice.getLastTour().subscribe(p=>{
        this.tours=p;
        console.log(p);
    });
  }

}
