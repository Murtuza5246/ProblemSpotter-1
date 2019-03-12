import {Injectable} from '@angular/core';

import {Router} from '@angular/router';

import * as firebase from 'firebase';

import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';

import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {User} from './user.model';

@Injectable()
export class AuthService {

  user$: Observable<User>;
  userUID:string;

  currentUserName: string = 'Anonymous';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.userUID = user.uid
          return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );

  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserMainData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/login']);
  }

  private updateUserMainData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${user.uid}`);

    this.currentUserName = user.displayName;

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, {merge: true});
  }

  public updateUserProfileData(user, uid) {
    const userRef = this.afs.doc(`user/${uid}`);
    return userRef.set(user, {merge: true});
  }

}




