import { Component, OnInit } from '@angular/core';

// Dodatni importi
import { ILogin } from "../Models/ILogin";
import { LoginService } from "../Services/login.service";
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  public txtUsername: string = "";
  public txtPassword: string = "";

  public login: ILogin[] = [];

  Login(username: string, password: string): void {
    this.txtUsername = username;
    this.txtPassword = password;

    this.loginService.Login(this.txtUsername, this.txtPassword)
      .subscribe(data => {
        this.login = data;
        if(this.login.length != 0){
          console.log("Ulogovan");
        }else{
          console.log("Nije");
        }
      });

      



  }


  ngOnInit() {

  }

}
