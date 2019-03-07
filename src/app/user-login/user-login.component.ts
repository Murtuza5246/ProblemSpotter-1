import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  constructor(public auth: AuthService,public afAuth:AngularFireAuth) {}

  ngOnInit() {
  }


}
