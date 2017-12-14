import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import {Variables} from '../Classes/variables';
import { Itour } from '../Interfaces/itour';
import { ISearch } from '../Interfaces/isearch';
@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getLastTour(): Observable<Itour[]> {

    return this.http.get<Itour[]>(Variables.BaseUrl+"api/tour/LastTour");
  }
  getSearchResult(body: ISearch): Observable<Itour[]> {
    var data = JSON.stringify(body);
    var hd = new HttpHeaders({
      'Content-Type': 'application/Json'
    });
    const httpOptions = {
      headers: hd
    };

    return this.http.post<Itour[]>(Variables.BaseUrl+"api/Search/GetByFilter",
      data, httpOptions);
  }
}
