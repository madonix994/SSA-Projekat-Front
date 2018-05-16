import { Component, OnInit } from '@angular/core';

// Dodatni importi
import { ILogin } from "../Models/ILogin";
import { LoginService } from "../Services/login.service";

import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LogedUserService } from '../Services/loged-user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,private logedUserService: LogedUserService, private router: Router) { }

  public txtUsername: string = "";
  public txtPassword: string = "";

  public login: ILogin[] = [];

  public user: ILogin = null;

  public message: string = "";

  Login(username: string, password: string): void {
    this.txtUsername = username;
    this.txtPassword = password;

    this.loginService.Login(this.txtUsername, this.txtPassword)
      .subscribe(data => {
        this.login = data;
        if(this.login.length != 0){
          console.log("Ulogovan");
          this.user = this.login[0];
          this.logedUserService.insertLogedUser(this.user)
          .subscribe(user => this.login.push(this.user));
          this.router.navigate(['/main']);
        }else{
          this.message = "Podaci nisu tacni";
        }
      });

      

      



  }


  ngOnInit() {

  }

}
