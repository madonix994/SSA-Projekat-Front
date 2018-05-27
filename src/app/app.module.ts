import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecordsComponent } from './records/records.component';


// Dodatni importi
import { IRecord } from "../app/Models/IRecord";
import { ILogin } from "../app/Models/ILogin";
import { ICityName } from "../app/Models/ICityName";
import { ITypeName } from "../app/Models/ITypeName";
import { RecordsService } from "../app/Services/records.service";
import { LoginService } from "../app/Services/login.service";
import { CityNameService } from "../app/Services/city-name.service";
import { LogedUserService } from "../app/Services/loged-user.service";
import { TypeNameService } from "../app/Services/type-name.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //Za pretragu
import { Ng2OrderModule } from 'ng2-order-pipe'; //Za sortiranje
import { NgxPaginationModule } from 'ngx-pagination'; // Za paginaciju
import { DatePipe } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from './login/login.component'; //Za DatePicker
import { ModalModule } from 'ngx-bootstrap/modal';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { AlldataComponent } from './alldata/alldata.component';
import { ApartmentsService } from "../app/Services/apartments.service";
import { CitiesService } from "../app/Services/cities.service";
import { OwnersService } from "../app/Services/owners.service";
import { IOwner } from "../app/Models/IOwner";
import { TypeService } from "../app/Services/type.service";
import { IType } from "../app/Models/IType";
import { IApartments } from "../app/Models/IApartment";
import { MainhelpComponent } from './mainhelp/mainhelp.component';
import { HelpComponent } from './help/help.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'adminmain', component: AdminmainComponent },
  { path: 'mainhelp', component: MainhelpComponent },


  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecordsComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainComponent,
    AdminmainComponent,
    AlldataComponent,
    MainhelpComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    Ng2SearchPipeModule, //Za pretragu
    Ng2OrderModule, //Za sortiranje
    NgxPaginationModule,//Za paginaciju
    BsDatepickerModule.forRoot(), //Dodataka za odabir datuma
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecordsService, CityNameService, TypeNameService, DatePipe, LoginService, LogedUserService, ApartmentsService, CitiesService, OwnersService, TypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
