import { Component, OnInit } from '@angular/core';

// Dodatni importi
import { IRecord } from "../Models/IRecord";
import { ICityName } from "../Models/ICityName";
import { ITypeName } from "../Models/ITypeName";
import { RecordsService } from "../Services/records.service";
import { CityNameService } from "../Services/city-name.service";
import { TypeNameService} from "../Services/type-name.service";
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';




@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private recordsService: RecordsService, private typeNameService: TypeNameService, private cityNameService: CityNameService) { }

  public numberOfRecords: number;

  public records:IRecord[] = []; // Deklaracija praznog niza po tipu interfejsa IRecord

  public filteredRecords: IRecord[] = [];

  public typeNames: ITypeName[] = [];

  public filteredApartmentType: string = "";//pokupljen select sa fronta iz dropdown-a!

  public listOfApartmentTypes: string[] = [];

  public cityNames: ICityName[] = [];

  public filteredCityName: string = "";

  public listOfCityNames: string[] = [];

  getRecords(): void {
    this.recordsService.getRecords()
      .subscribe(data => {
        this.records = data;
        this.filteredRecords = JSON.parse(JSON.stringify(this.records));

      });
  }

  getTypeName():void {
    this.typeNameService.getTypeName()
      .subscribe(data => {
        this.typeNames = data;
        this.listOfApartmentTypes = JSON.parse(JSON.stringify(this.typeNames));
      });
  }

  getCityName():void {
    this.cityNameService.getCityName()
      .subscribe(data => {
        this.cityNames = data;
        this.listOfCityNames = JSON.parse(JSON.stringify(this.cityNames));
      });
  }
  
  filter() {
    if (this.filteredApartmentType) {
      this.filteredRecords = JSON.parse(JSON.stringify(
        this.records.filter(r => r.Type_Name === this.filteredApartmentType)
      ));
    }
    if (this.filteredCityName) {
      this.filteredRecords = JSON.parse(JSON.stringify(
        this.filteredRecords.filter(r => r.City_Name === this.filteredCityName)
      ));
    }

    this.numberOfRecords = this.filteredRecords.length;//br polja u tabeli

  }


  //Za sortiranje
  public key: string;
  reverse: boolean = false;
  sort(key) {
    if (key == "Person_Name" || key == "Person_Surname" || key == "City_Name" || "Date_Time") {
      this.key = key;
      this.reverse = !this.reverse;
    }
  }

  //Za paginaciju
  p: number = 1;

  ngOnInit() {
    this.getRecords();
    this.getTypeName();
    this.getCityName();
  }

}
