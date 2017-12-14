import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import {Itour}from '../Interfaces/itour'
import {Variables} from '../Classes/variables';

@Injectable()
export class TourDetailService {
  tour:Itour;

  constructor(private http: HttpClient) { }
getTourDetail(id:number): Observable<Itour> {
  return this.http.get<Itour>(Variables.BaseUrl+"api/tour/GetTourDetail?tourId="+id);
}
}
