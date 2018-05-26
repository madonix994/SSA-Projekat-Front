import { Injectable } from '@angular/core';

// Dodatni importi
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { IType } from '../Models/IType';
@Injectable()
export class TypeService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getTypes(): Observable<IType[]> {
    return this.http.get<IType[]>(this.serviceUrl + '/api/portal/types/getalltypes');
  }

  insertTypes(type) {
    return this.http.post(this.serviceUrl + '/api/portal/types/inserttypes', type);
  }

  updateTypes(type)
  {
    return this.http.put(this.serviceUrl + '/api/portal/types/updatetypes ', type);
  }

  deleteTypes(type_id) {
    return this.http.get(this.serviceUrl + '/api/portal/types/deletetype/' + type_id);
  }

}
