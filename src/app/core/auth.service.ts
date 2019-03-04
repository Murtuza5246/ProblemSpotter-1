import {Injectable} from '@angular/core';

import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import Timestamp = firebase.firestore.Timestamp;


interface User {
  UID: string;
  Name?: string;
  Email: string;
  Phone: string;
  DOB: Timestamp;
  Collage: string;
  InstituteCode: number;
  EnrollmentNumber: string;
  Department: string;
  PrincipalName: string;
  AcademicYear: Timestamp;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


}


