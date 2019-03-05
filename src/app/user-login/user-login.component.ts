import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {FormControl, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  isSignUp = false;
  department ="CE";

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getFullName(firstName:string,lastName:string):string{
    return firstName + " "+ lastName
  }

  constructor(public AuthService: AuthService,public afAuth:AngularFireAuth) {}

  ngOnInit() {
  }


}
