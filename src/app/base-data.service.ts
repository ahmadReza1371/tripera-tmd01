import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Variables} from '../app/Classes/variables'
import { IbaseData } from './Interfaces/ibase-data';

@Injectable()
export class BaseDataService {

  constructor(private http: HttpClient) { }

  
  getLastTour(): Observable<IbaseData[]> {
        return this.http.get<IbaseData[]>(Variables.BaseUrl+"api/BaseData/get");
      }
}
