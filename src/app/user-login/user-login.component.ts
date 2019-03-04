import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  constructor(public AuthService:AuthService) { }

  ngOnInit() {
  }

}
