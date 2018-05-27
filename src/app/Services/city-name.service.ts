import { Injectable } from '@angular/core';

// Dodatni importi
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ICityName } from '../Models/ICityName';

@Injectable()
export class CityNameService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getCityName(): Observable<ICityName[]> {
    return this.http.get<ICityName[]>(this.serviceUrl + '/api/portal/cities/getallcitynames');
  }

}
