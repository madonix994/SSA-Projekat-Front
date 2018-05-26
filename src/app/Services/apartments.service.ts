import { Injectable } from '@angular/core';

// Dodatni importi
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { IApartments } from '../Models/IApartment';
import { IApartmentjoin } from '../Models/IApartmentjoin';

@Injectable()
export class ApartmentsService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getApartments(): Observable<IApartments[]> {
    return this.http.get<IApartments[]>(this.serviceUrl + '/api/portal/apartments/getallapartments');
  }

  getApartmentsjoin(): Observable<IApartmentjoin[]> {
    return this.http.get<IApartmentjoin[]>(this.serviceUrl + '/api/portal/apartments/getallapartmentsjoined');
  }

  updateApartments(apartment) {
    return this.http.put(this.serviceUrl + '/api/portal/apartments/updateapartment', apartment);
  }

  insertApartments(apartment) {
    return this.http.post(this.serviceUrl + '/api/portal/apartments/insertapartment', apartment);
  }

  deleteApartments(Apartment_Id) {
    return this.http.get(this.serviceUrl + '/api/portal/apartments/deleteapartment/' + Apartment_Id);
  }


}
