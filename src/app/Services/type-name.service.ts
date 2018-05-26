import { Injectable } from '@angular/core';

// Dodatni importi
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { ITypeName } from '../Models/ITypeName';

@Injectable()
export class TypeNameService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getTypeName(): Observable<ITypeName[]> {
    return this.http.get<ITypeName[]>(this.serviceUrl + '/api/portal/types/getalltypenames');
  }

}
