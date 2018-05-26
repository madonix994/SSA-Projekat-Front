import { Injectable } from '@angular/core';

// Dodatni importi
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { IOwner } from '../Models/IOwner';
@Injectable()
export class OwnersService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getOwners() : Observable<IOwner[]>
  {
    return this.http.get<IOwner[]>(this.serviceUrl+'/api/portal/owners/getallowners');
  }

  insertOwners(owner){
    return this.http.post(this.serviceUrl + '/api/portal/owners/insertowner', owner);
  }

  updateOwners(owner)
  {

    return this.http.put(this.serviceUrl + '/api/portal/owners/updateowner', owner);

  }
  
  deleteOwner(Owner_id) {
    return this.http.get(this.serviceUrl + '/api/portal/owners/deleteowner/' + Owner_id);
  }
}
