import { Injectable } from '@angular/core';

// Dodatni importi
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ICity } from '../Models/ICity';


@Injectable()
export class CitiesService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getCities() : Observable<ICity[]>
  {
    return this.http.get<ICity[]>(this.serviceUrl+'/api/portal/cities/getallcities');
  }

  updateCity(city){
    return this.http.put(this.serviceUrl + '/api/portal/cities/updatecities', city);
  }

  insertCities(city){
    return this.http.post(this.serviceUrl + '/api/portal/cities/insertcities', city);
  }

  deleteCity(City_id) {
    return this.http.get(this.serviceUrl + '/api/portal/cities/deletecities/' + City_id);
  }
}
