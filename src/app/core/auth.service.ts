import {Injectable} from '@angular/core';

import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

class User {
  UID: string;
  Name: string;
  Email: string;
  Phone: string;
  DOB: string;
  Collage: string;
  InstituteCode?: number;
  EnrollmentNumber: string;
  Department: string;
  PrincipalName: string;
  AcademicYear?: string;

  constructor(uid: string, name: string, email: string, phone: string, dob: string, collage: string, enrollmentNumber: string, department: string, principalName: string) {
    this.UID = uid;
    this.Name = name;
    this.Email = email;
    this.Phone = phone;
    this.DOB = dob;
    this.Collage = collage;
    this.EnrollmentNumber = enrollmentNumber;
    this.Department = department;
    this.PrincipalName = principalName;
  }

}

@Injectable()
export class AuthService {

  public currentUserDataStream = new Observable<firebase.User>();

  public isSignedInStream: Observable<boolean>;
  public displayNameStream: Observable<string>;

  public _currentUsersUid: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this._currentUsersUid = user.uid;
      } else {
        this._currentUsersUid = 'Anonymous';
      }
    });


    this.isSignedInStream = this.afAuth.authState
      .pipe(map<firebase.User, boolean>((user: firebase.User) => {
        return user != null;
      }));

    this.displayNameStream = this.afAuth.authState
      .pipe(map<firebase.User, string>((user: firebase.User) => {
        return user.email.replace('@gmail.com', '');
      }));


  }

  signInWithEmailAndPassword(email: string, password: string) {
    console.log('email is ' + email + ' \npassword is ' + password);

    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result: any) => {
      this.router.navigate(['/']);
      const user: firebase.User = result.user;
      console.log('Push the user to the database', user);
    });
  }

  signUpWithEmailAndPassword(fullName: string, email: string, password: string, phoneNumber: string, date: string, collageName: string, enrollmentNumber, principalName: string, department: string) {

    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password).then((result: any) => {
      console.log('Result : \n' + result);
      this.addUserDataToDatabase(fullName, email, phoneNumber, date, collageName, enrollmentNumber, principalName, department);
    }).catch((error: any) => {
      this.afAuth.auth.signOut();
      console.log('Error : \n' + error);
    });
  }

  addUserDataToDatabase(fullName: string, email: string, phoneNumber: string, date: string, collageName: string, enrollmentNumber, principalName: string, department: string) {

    let user = new User(
      this.afAuth.auth.currentUser.uid,
      fullName,
      email,
      phoneNumber,
      date,
      collageName,
      enrollmentNumber,
      principalName,
      department
    );


  }

}




