import { Injectable } from '@angular/core';

// Dodatni importi
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { IApartments } from '../Models/IApartment';
@Injectable()
export class ApartmentsService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getApartments() : Observable<IApartments[]>
  {
    return this.http.get<IApartments[]>(this.serviceUrl+'/api/portal/apartments/getallapartments');
  }

  
  insertApartments(apartment){
    return this.http.post(this.serviceUrl + '/api/portal/apartments/insertapartment', apartment);
  }

}
