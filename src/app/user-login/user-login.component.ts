import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../core/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  userForm: FormGroup;
  user:User;

  constructor(public auth: AuthService,private fb:FormBuilder) {
  }

  ngOnInit() {
  }

  createForm(){
    this.userForm = this.fb.group({
      email:[this.user.email ,Validators.required]
    });
  }

  onSubmit(value) {
    let phoneNumber = value.phoneNumber;
    let dateOfBirth = value.dateOfBirth;
    let collageName = value.collageName;
    let instituteCode = value;
    let department = value.department;
    let academicYear = value.academicYear;
    let principalName = value.principalName;
    let enrollmentNumber = value.enrollmentNumber;

    console.log(phoneNumber,dateOfBirth,collageName,instituteCode,department,academicYear,principalName,enrollmentNumber)

  }
}
