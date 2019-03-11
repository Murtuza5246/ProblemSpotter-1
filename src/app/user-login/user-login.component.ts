import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {User} from '../core/user.model';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})

export class UserLoginComponent implements OnInit {

  phoneNumber: string;
  dateOfBirth: string;
  collageName: string;
  instituteCode: string;
  department: string;
  academicYear: string;
  principalName: string;
  enrollmentNumber: string;

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    this.auth.user$.subscribe((user: User) => {
      this.phoneNumber = user.phoneNumber;
      this.dateOfBirth = user.dateOfBirth;
      this.collageName = user.collage;
      this.instituteCode = String(user.instituteCode);
      this.department = user.department;
      this.academicYear = user.academicYear;
      this.principalName = user.principalName;
      this.enrollmentNumber = String(user.enrollmentNumber);

    });
  }

  onSubmit() {
    let phoneNumber = this.phoneNumber;
    let dateOfBirth = this.dateOfBirth;
    let collageName = this.collageName;
    let instituteCode = Number(this.instituteCode);
    let department = this.department;
    let academicYear = this.academicYear;
    let principalName = this.principalName;
    let enrollmentNumber = Number(this.enrollmentNumber);

    console.log(phoneNumber, dateOfBirth, collageName, instituteCode, department, academicYear, principalName, enrollmentNumber);

  }
}
