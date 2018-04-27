import { Component, OnInit } from '@angular/core';

// Dodatni importi
import { IRecord } from "../Models/IRecord";
import { RecordsService } from "../Services/records.service";
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';




@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private recordsService: RecordsService) { }


  public records:IRecord[] = []; // Deklaracija praznog niza po tipu interfejsa IRecord

  getRecords(): void {
    this.recordsService.getRecords()
      .subscribe(data => {
        this.records = data;
      });
  }


  ngOnInit() {
    this.getRecords();
  }

}
