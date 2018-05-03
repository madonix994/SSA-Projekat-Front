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

  public numberOfRecords: number;

  public records:IRecord[] = []; // Deklaracija praznog niza po tipu interfejsa IRecord

  public filteredRecords: IRecord[] = [];

  public filteredApartmentType: string = "";//pokupljen select sa fronta iz dropdown-a!

 

  public listOfApartmentTypes: string[] = [];

  getRecords(): void {
    this.recordsService.getRecords()
      .subscribe(data => {
        this.records = data;
      });
  }
  getRecordsToday(): void {
    this.records = [];
    this.recordsService.getRecordsToday()
      .subscribe(data => {
        this.records = data;
        this.numberOfRecords = this.records.length;//br polja u tabeli
        this.filteredRecords = JSON.parse(JSON.stringify(this.records));
      });
  }

  getRecordsWeek(): void {
    this.records = [];
    this.recordsService.getRecordsWeek()
      .subscribe(data => {
        this.records = data;
        this.numberOfRecords = this.records.length;//br polja u tabeli
        this.filteredRecords = JSON.parse(JSON.stringify(this.records));
      });
  }

  getRecordsMonth(): void {
    this.records = [];
    this.recordsService.getRecordsMonth()
      .subscribe(data => {
        this.records = data;
        this.numberOfRecords = this.records.length;//br polja u tabeli
        this.filteredRecords = JSON.parse(JSON.stringify(this.records));
      });
  }


  filter() {
    if (this.filteredApartmentType) {
      this.filteredRecords = JSON.parse(JSON.stringify(
        this.records.filter(r => r.Type_Name === this.filteredApartmentType)
      ));
    }
    this.numberOfRecords = this.filteredRecords.length;//br polja u tabeli

  }


  ngOnInit() {
    this.getRecords();
  }

}
