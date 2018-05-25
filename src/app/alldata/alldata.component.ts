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
import { IType } from "../Models/IType";
import { TypeService } from "../Services/type.service";
import { IApartments } from "../Models/IApartment";
import { IApartmentjoin } from "../Models/IApartmentjoin";
import { ApartmentsService } from "../Services/apartments.service";


@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent implements OnInit {


  public test: string;

  constructor(private apartmentService: ApartmentsService, private typeService: TypeService, private ownersService: OwnersService, private modalService: BsModalService, private logedUserService: LogedUserService, private router: Router, private recordsService: RecordsService, public datepipe: DatePipe, private typeNameService: TypeNameService, private cityNameService: CityNameService, private citiesService: CitiesService) { }

  modalRef: BsModalRef;

  public numberOfRecords: number;

  public records: IRecord[] = []; // Deklaracija praznog niza po tipu interfejsa IRecord

  public selectedRecord: IRecord;

  public selectedCity: ICity;

  public filteredRecords: IRecord[] = [];

  public detailRecords: IRecord[] = [];

  public typeNames: ITypeName[] = [];

  public users: ILogin[] = [];

  public filteredApartmentType: number;//pokupljen select sa fronta iz dropdown-a!

  public filteredOwnerName: number;

  public listOfApartmentTypes: string[] = [];

  public listOfOwners: string[] = [];


  public cityNames: ICityName[] = [];

  public filteredCityName: number;

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

  public types: IType[] = [];

  public insertType: IType = null;

  public insertCity: ICity = null;

  public insertApartment: IApartments = null;

  public owners: IOwner[] = [];
  public insertOwner: IOwner = null;

  public selectedOwner: IOwner;
  public updateOwner: IOwner = null;

  public txtType_Name: string = "";

  public apartments: IApartments[] = [];
  public apartmentsjoin: IApartmentjoin[] = [];

  public txtAddress: string = "";
  public txtApartmentNumber: number; s

  public deleteID: number;
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

  openModalWithClassType(templateCity: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      templateCity,
      Object.assign({}, { class: 'gray modal-lg' })
    );

  }

  openModalWithClassApartment(templateApartmant: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      templateApartmant,
      Object.assign({}, { class: 'gray modal-lg' })
    );

  }
  openModalWithClassOwnerUpdate(templateOwnerUpdate: TemplateRef<any>, selectedOwner: IOwner) {
    this.selectedOwner = selectedOwner;

    this.modalRef = this.modalService.show(
      templateOwnerUpdate,
      Object.assign({}, { class: 'gray modal-lg' })

    )

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
        setTimeout(() => {
          window.location.reload();
        },
          500);
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
        setTimeout(() => {
          window.location.reload();
        },
          500);
      }

    }


  }

  updateOwners(txtOwner_Name: string, txtOwner_Surname: string, txtOwner_JMBG: string, txtOwner_Card_Number: number, txtOwner_Username: string, txtOwner_Password: string) {

    const newOwner = <IOwner>{
      Name: txtOwner_Name,
      Surname: txtOwner_Surname,
      Jmbg: txtOwner_JMBG,
      Card_Number: txtOwner_Card_Number,
      Username: txtOwner_Username,
      Password: txtOwner_Password

    }
    this.updateOwner = newOwner;
    if (this.updateOwner) {
     // this.ownersService.updateOwners(this.updateOwner).subscribe();
      this.txtOwner_Name = undefined;
      this.txtOwner_Surname = undefined;
      this.txtOwner_JMBG = undefined;
      this.txtOwner_Card_Number = undefined;
      this.txtOwner_Username = undefined;
      this.txtOwner_Password = undefined;


      this.updateOwner = undefined;
      setTimeout(() => {
        window.location.reload();
      },
        500);
    }

  }



  insertTypes(txtType_Name: string) {

    if (txtType_Name) {

      const newType = <IType>{
        Type_Name: txtType_Name
      }
      this.insertType = newType;
      if (this.insertType) {
        this.typeService.insertTypes(this.insertType)
          .subscribe(insertType => this.types.push(this.insertType));
        this.txtType_Name = undefined;
        this.insertType = undefined;
        setTimeout(() => {
          window.location.reload();
        },
          500);
      }

    }


  }

  deleteTypes(type: IType) {
    this.deleteID = type.Type_Id;
    if (this.deleteID) {
      this.typeService.deleteTypes(this.deleteID).subscribe();
      this.deleteID = undefined;
      setTimeout(() => {
        window.location.reload();
      },
        500);

    }
  }
  deleteOwner(owner: IOwner) {
    this.deleteID = owner.Owner_Id;
    if (this.deleteID) {
      this.ownersService.deleteOwner(this.deleteID).subscribe();
      this.deleteID = undefined;
      setTimeout(() => {
        window.location.reload();
      },
        500);

    }
  }
  deleteCity(city: ICity) {
    this.deleteID = city.City_Id;
    if (this.deleteID) {
      this.citiesService.deleteCity(this.deleteID).subscribe();
      this.deleteID = undefined;
      setTimeout(() => {
        window.location.reload();
      },
        500);

    }
  }
  deleteApartments(apartment: IApartments) {
    this.deleteID = apartment.Apartment_Id;
    if (this.deleteID) {
      this.apartmentService.deleteApartments(this.deleteID).subscribe();
      this.deleteID = undefined;
      setTimeout(() => {
        window.location.reload();
      },
        500);

    }
  }

  insertApartments(txtAddress: string, txtApartmentNumber: number, filteredApartmentType: number, filteredCityName: number, filteredOwnerName: number) {

    if (txtAddress && txtApartmentNumber && filteredApartmentType && filteredCityName && filteredOwnerName) {

      const newApartment = <IApartments>{
        Address: txtAddress,
        Apartment_Number: txtApartmentNumber,
        Type_Id: filteredApartmentType,
        City_Id: filteredCityName,
        Owner_Id: filteredOwnerName,
        Status: "Slobodan"
      }
      this.insertApartment = newApartment;
      if (this.insertApartment) {
        this.apartmentService.insertApartments(this.insertApartment)
          .subscribe(insertApartment => this.apartments.push(this.insertApartment));
        this.txtAddress = undefined;
        this.txtApartmentNumber = undefined;
        this.filteredApartmentType = undefined;
        this.filteredCityName = undefined;
        this.filteredOwnerName = undefined;
        this.insertApartment = undefined;
        setTimeout(() => {
          window.location.reload();
        },
          500);
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


  getCities(): void {
    this.citiesService.getCities()
      .subscribe(data => {
        this.cities = data;
        this.listOfCityNames = JSON.parse(JSON.stringify(this.cities));

      });
  }


  getApartments(): void {
    this.apartmentService.getApartments()
      .subscribe(data => {
        this.apartments = data;
      });
  }

  getTypes(): void {
    this.typeService.getTypes()
      .subscribe(data => {
        this.types = data;
        this.listOfApartmentTypes = JSON.parse(JSON.stringify(this.types));

      });
  }

  getOwners(): void {
    this.ownersService.getOwners()
      .subscribe(data => {
        this.owners = data;
        this.listOfOwners = JSON.parse(JSON.stringify(this.owners));

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
    this.getCities();
    this.getOwners();
    this.getTypes();
    this.getApartments();

  }


}
