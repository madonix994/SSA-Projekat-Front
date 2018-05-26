import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogedUserService } from '../Services/loged-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
