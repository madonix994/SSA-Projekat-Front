import { Component, OnInit, TemplateRef } from '@angular/core';

// Dodatni importi
import { ILogin } from "../Models/ILogin";
import { LoginService } from "../Services/login.service";

import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LogedUserService } from '../Services/loged-user.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

declare var $:any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: BsModalService, private loginService: LoginService, private logedUserService: LogedUserService, private router: Router) { }

  public modalRef: BsModalRef;
  public templatemsg: TemplateRef<any>;

  public txtUsername: string = "";
  public txtPassword: string = "";

  public login: ILogin[] = [];

  public user: ILogin = null;

  public message: string = "";


  openModalWithClass() {



  }




  Login(username: string, password: string): void {
    this.txtUsername = username;
    this.txtPassword = password;

    if (this.txtUsername && this.txtPassword) {
      this.loginService.Login(this.txtUsername, this.txtPassword)
        .subscribe(data => {
          this.login = data;
          if (this.login.length != 0) {
            console.log("Ulogovan");
            this.user = this.login[0];
            this.logedUserService.insertLogedUser(this.user)
              .subscribe(user => this.login.push(this.user));
            if (this.user.Username == "Admin" && this.user.Password == "Admin") {
              this.Loader();
              setTimeout(() => {
                this.router.navigate(['/adminmain']);
              },
                2000);
            } else {
              this.Loader();
              setTimeout(() => {
                this.router.navigate(['/main']);
              },
                2000);
            }
          } else {
            this.message = "Podaci nisu tacni";



          }
        });

    }else
    {
      this.message = "Podaci nisu tacni";

    }

  }

  Trancate() {
    this.logedUserService.truncateLogedUser().subscribe();
  }

  Loader(){
      $('.loader').show();
  }



  ngOnInit() {
    this.Trancate();
    
  }

}
