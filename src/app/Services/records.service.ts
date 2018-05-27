import { Injectable } from '@angular/core';

// Dodatni importi
import { IRecord } from "../Models/IRecord";
import { Observable } from 'rxjs/Observable';
import { URLSearchParams, Headers, Response, RequestOptions, Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class RecordsService {

  serviceUrl: string = 'http://localhost:53634'; // Konstana putanja do back-end-a

  constructor(public http: HttpClient) { }

  getRecords(): Observable<IRecord[]> {
    return this.http.get<IRecord[]>(this.serviceUrl + '/api/portal/records/getallrecords');
  }

  insertRecord(record)
  {
    return this.http.post(this.serviceUrl + '/api/portal/records/insertrecord', record);
  }


}
