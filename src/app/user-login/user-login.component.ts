import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../model/user.model';

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
      this.uid = user.uid;
      this.phoneNumber = user.phoneNumber;
      this.dateOfBirth = user.dateOfBirth.toDate().toDateString();
      this.collageName = user.collage;
      this.instituteCode = String(user.instituteCode);
      this.department = 'Civil Engineering';
      this.academicYear = user.academicYear;
      this.principalName = user.principalName;
      this.enrollmentNumber = String(user.enrollmentNumber);
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let user = {
      phoneNumber: this.phoneNumber,
      dateOfBirth: this.dateOfBirth,
      collage: this.collageName,
      instituteCode: Number(this.instituteCode),
      department: this.department,
      academicYear: this.academicYear,
      principalName: this.principalName,
      enrollmentNumber: Number(this.enrollmentNumber),
    };

    let isValid = true;

    Object.values(user).forEach(data => {
      if (typeof (data) == 'undefined' || data == null) {
        console.log(data + ' is not defined.');
        isValid = false;
      }
    });

    if (isValid) {
      this.auth.updateUserProfileData(user, this.uid);
    }

  }
}
