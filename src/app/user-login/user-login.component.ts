import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../model/user.model';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from 'firebase';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  phoneNumber: string;
  dateOfBirth: string = 'Date of birth';
  collageName: string;
  instituteCode: string;
  department: string;
  academicYear: string;
  principalName: string;
  enrollmentNumber: string;

  uid: string;

  constructor(public auth: AuthService) {
    auth.user$.subscribe((user: User) => {

      if (user) {
        let dateOfBirth: any;
        try {
          dateOfBirth = user.dateOfBirth.toDate().toDateString();
        } catch (e) {
          dateOfBirth = user.dateOfBirth;
        }

        if (user != null) {
          this.uid = user.uid;
          this.phoneNumber = user.phoneNumber;
          this.dateOfBirth = dateOfBirth;
          this.collageName = user.collage;
          this.instituteCode = String(user.instituteCode);
          this.department = 'Civil Engineering';
          this.academicYear = user.academicYear;
          this.principalName = user.principalName;
          this.enrollmentNumber = String(user.enrollmentNumber);
        }
      }
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    let userData = new Map()
      .set('phoneNumber', this.phoneNumber)
      .set('dateOfBirth', this.dateOfBirth)
      .set('collage', this.collageName)
      .set('instituteCode', this.instituteCode)
      .set('department', this.department)
      .set('academicYear', this.academicYear)
      .set('principalName', this.principalName)
      .set('enrollmentNumber', this.enrollmentNumber);

    let user = {
      phoneNumber: this.phoneNumber,
      dateOfBirth: this.dateOfBirth,
      collage: this.collageName,
      instituteCode: Number(this.instituteCode),
      department: this.department,
      academicYear: Number(this.academicYear),
      principalName: this.principalName,
      enrollmentNumber: Number(this.enrollmentNumber),
    };

    Object.values(Array.from(userData.keys())).forEach(key => {
      if (typeof (key) == 'undefined' || key == null) {
        console.log(key);
        userData[key] = UserLoginComponent.getNotDefinedValue(key);
      }
    });

    this.auth.updateUserProfileData(user, this.uid);

  }

  static getNotDefinedValue(key: String): any {
    switch (key) {
      case 'enrollmentNumber' : {
        return 0;
      }
      case 'academicYear' : {
        return 0;
      }
      case 'instituteCode' : {
        return 0;
      }
      case '': {
        return Timestamp.now();
      }
      default : {
        return '';
      }

    }
  }
}
