import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Itour } from '../Interfaces/itour';
import{HttpClient,HttpHeaders}from '@angular/common/http'
@Injectable()
export class LastTourService 
{

  constructor(private http:HttpClient) {

   }

  
getLastTour():Observable<Itour[]>{

  let header: HttpHeaders = new HttpHeaders();
  header.append('Access-Control-Allow-Origin', '*');
  return this.http.get<Itour[]>("http://192.168.1.147:5555/api/tour/LastTour",{headers: header});
}
}
