import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Itour } from '../Interfaces/itour';
import { ISearch } from '../Interfaces/isearch';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getLastTour(): Observable<Itour[]> {

    return this.http.get<Itour[]>("http://192.168.1.147:5555/api/tour/LastTour");
  }
  getSearchResult(body: ISearch): Observable<Itour[]> {
    var data = JSON.stringify(body);

    
    var hd = new HttpHeaders({
      'Content-Type': 'application/Json',
    });
    const httpOptions = {
      headers: hd
    };

    return this.http.post<Itour[]>("http://192.168.1.147:5555/api/Search/GetByFilter",
      data, httpOptions);
  }
}
