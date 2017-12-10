import { Component, OnInit } from '@angular/core';
import { Itour } from '../Interfaces/itour';
import {HomeService} from './home.service'
import { ISearch } from '../Interfaces/isearch';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService],
})
export class HomeComponent implements OnInit {
  searchItem:ISearch={
    LocalVehicles:2,
    MaxDuration:2,
    MaxPrice:2,
    Meals:2,
    MinDuration:2,
    MinPrice:2,
    PlaceTypes:2,
    provinceId:2,
    FromDate:2,
    Themes:2,
    ToDate:2,
   Vehicles:2 
  };
  tours:Itour[]=[];
  
  constructor(private service:HomeService) { 
    
  }
  
  ngOnInit() {
    
    // this.service.getLastTour().subscribe(p=>{
    //   this.tours=p;
    //   console.log(this.tours);
    // });
    
    // this.service.getSearchResult(this.searchItem).subscribe(p=>{
    //   console.log(p)
    //   });
    
  }

}
