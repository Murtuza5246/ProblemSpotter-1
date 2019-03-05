import {Injectable} from '@angular/core';

import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';


interface User {
  UID?: string;
  Name?: string;
  Email: string;
  Phone?: string;
  DOB?: Timestamp;
  Collage?: string;
  InstituteCode?: number;
  EnrollmentNumber?: string;
  Department?: string;
  PrincipalName?: string;
  AcademicYear?: Timestamp;
}

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log('User is sign in as ', user);
      } else {
        console.log('User is not sign in');
      }
    });
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
      console.log("Result : \n"+result)
    }).catch((error: any) => {
      console.log("Error : \n"+error)
    });
    console.log('');
  }

}




