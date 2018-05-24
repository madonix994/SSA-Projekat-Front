import { Component, OnInit, TemplateRef } from '@angular/core';

// Dodatni importi
import { IRecord } from "../Models/IRecord";
import { ICityName } from "../Models/ICityName";
import { ITypeName } from "../Models/ITypeName";
import { RecordsService } from "../Services/records.service";
import { CityNameService } from "../Services/city-name.service";
import { TypeNameService } from "../Services/type-name.service";
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { LogedUserService } from '../Services/loged-user.service';
import { ILogin } from '../Models/ILogin';
import { CitiesService } from "../Services/cities.service";
import { ICity } from '../Models/ICity';
import { IOwner } from "../Models/IOwner";
import { OwnersService } from "../Services/owners.service";




@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent implements OnInit {

  public test: string; 

  constructor(private ownersService: OwnersService, private modalService: BsModalService, private logedUserService: LogedUserService, private router: Router, private recordsService: RecordsService, public datepipe: DatePipe, private typeNameService: TypeNameService, private cityNameService: CityNameService, private citiesService: CitiesService) { }

  modalRef: BsModalRef;

  public numberOfRecords: number;

  public records: IRecord[] = []; // Deklaracija praznog niza po tipu interfejsa IRecord

  public selectedRecord: IRecord;

  public selectedCity: ICity;

  public filteredRecords: IRecord[] = [];

  public detailRecords: IRecord[] = [];

  public typeNames: ITypeName[] = [];

  public users: ILogin[] = [];

  public filteredApartmentType: string = "";//pokupljen select sa fronta iz dropdown-a!

  public listOfApartmentTypes: string[] = [];

  public cityNames: ICityName[] = [];

  public filteredCityName: string = "";

  public listOfCityNames: string[] = [];
  public filteredDate: string;

  public detailRecord: string;

  public cities: ICity[] = [];

  public txtCity_Name: string = "";
  public txtPpt: number;

  public txtOwner_Name: string = "";
  public txtOwner_Surname: string = "";
  public txtOwner_Username: string = "";
  public txtOwner_Password: string = "";
  public txtOwner_JMBG: string = "";
  public txtOwner_Card_Number: number;







  public insertCity: ICity = null;

  public owners: IOwner[] = [];
  public insertOwner: IOwner = null; 


  openModalWithClass(template: TemplateRef<any>, selectedRecord: IRecord) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );

    this.selectedRecord = selectedRecord;
  }

  openModalWithClassCity(templateCity: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      templateCity,
      Object.assign({}, { class: 'gray modal-lg' })
    );

  }
  openModalWithClassOwner(templateCity: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      templateCity,
      Object.assign({}, { class: 'gray modal-lg' })
    );

  }

  

  insertCities(txtCity_Name: string, txtPpt: number) {

    if (txtCity_Name && txtPpt) {

      const newCity = <ICity>{
        City_Name: txtCity_Name,
        Ppt: txtPpt
      }
      this.insertCity = newCity;
      if (this.insertCity) {
        this.citiesService.insertCities(this.insertCity)
          .subscribe(insertCity => this.cities.push(this.insertCity));
        this.txtCity_Name = undefined;
        this.txtPpt = undefined;
        this.insertCity = undefined;
        window.location.reload();
      }

    }


  }


  insertOwners(txtOwner_Name: string, txtOwner_Surname: string, txtOwner_JMBG: string, txtOwner_Card_Number: number, txtOwner_Username: string, txtOwner_Password: string) {

    if (txtOwner_Name && txtOwner_Surname && txtOwner_JMBG && txtOwner_Card_Number && txtOwner_Username && txtOwner_Password) {

      const newOwner = <IOwner>{
        Name: txtOwner_Name,
        Surname: txtOwner_Surname,
        Jmbg: txtOwner_JMBG,
        Card_Number: txtOwner_Card_Number,
        Username: txtOwner_Username,
        Password: txtOwner_Password

      }
      this.insertOwner = newOwner;
      if (this.insertOwner) {
        this.ownersService.insertOwners(this.insertOwner)
          .subscribe(insertOwner => this.owners.push(this.insertOwner));
        this.txtOwner_Name = undefined;
        this.txtOwner_Surname = undefined;
        this.txtOwner_JMBG = undefined;
        this.txtOwner_Card_Number = undefined;
        this.txtOwner_Username = undefined;
        this.txtOwner_Password = undefined;


        this.insertOwner = undefined;
        window.location.reload();
      }

    }


  }
  Trancate() {
    this.logedUserService.truncateLogedUser().subscribe();
  }

  Logout() {
    this.Trancate();
    this.router.navigate(['/login'])
  }


  getRecords(): void {
    this.recordsService.getRecords()
      .subscribe(data => {
        this.records = data;
        this.filteredRecords = JSON.parse(JSON.stringify(this.records));

      });
  }


  getTypeName(): void {
    this.typeNameService.getTypeName()
      .subscribe(data => {
        this.typeNames = data;
        this.listOfApartmentTypes = JSON.parse(JSON.stringify(this.typeNames));
      });
  }

  getCityName(): void {
    this.cityNameService.getCityName()
      .subscribe(data => {
        this.cityNames = data;
        this.listOfCityNames = JSON.parse(JSON.stringify(this.cityNames));
      });
  }

  getCities(): void {
    this.citiesService.getCities()
      .subscribe(data => {
        this.cities = data;
      });
  }
  getOwners(): void {
    this.ownersService.getOwners()
      .subscribe(data => {
        this.owners = data;
      });
  }

  getLogedUser(): void {
    this.logedUserService.getLogedUser()
      .subscribe(data => {
        this.users = data;

        if (!this.users) {
          this.router.navigate(['/login']);
        }

      });
  }


  //Za paginaciju
  p: number = 1;

  ngOnInit() {
    this.getLogedUser();
    setTimeout(() => {
      this.getRecords();
    },
      1000);
    this.getRecords();
    this.getTypeName();
    this.getCityName();
    this.getCities();
    this.getOwners();
  }


}
