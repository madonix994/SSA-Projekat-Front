import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecordsComponent } from './records/records.component';

// Dodatni importi
import { IRecord } from "../app/Models/IRecord";
import { ICityName } from "../app/Models/ICityName";
import { ITypeName } from "../app/Models/ITypeName";
import { RecordsService } from "../app/Services/records.service";
import { CityNameService } from "../app/Services/city-name.service";
import { TypeNameService } from "../app/Services/type-name.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecordsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [RecordsService, CityNameService, TypeNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
