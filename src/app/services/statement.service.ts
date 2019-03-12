import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Statement} from '../model/statement.model';
import {Recent} from '../model/recent.model';
import {Observable} from 'rxjs';

@Injectable()
export class StatementService {

  allStatements$: Observable<any>;
  recentStatement$: Observable<any>;
  savedStatement$: Observable<any>;
  selectedStatement: Statement;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) {

    //adding all statements.
    this.allStatements$ = afs.collection('statements').valueChanges();

    //adding recent statements.
    this.recentStatement$ = this.afs.collection('user').doc(this.auth.userUID).collection('history').valueChanges();

    //adding saved statements.
    this.savedStatement$ = this.afs.collection('user').doc(this.auth.userUID).collection('saved').valueChanges();
  }

  addStatementToHistory(statement: Statement) {
    let statementObject = {
      statementID: statement.id,
      title: statement.title,
    };
    this.afs.collection('user').doc(this.auth.userUID).collection('history').add(statementObject).then(value => {
      let idData = {
        id: value.id
      };
      this.afs.collection('user').doc(this.auth.userUID).collection('history').doc(value.id).set(idData, {merge: true});
    });
  }

  saveStatement(statement: Statement) {
    let statementObject = {
      statementID: statement.id,
      title: statement.title,
      status: statement.status,
      fields: statement.fields
    };
    console.log('save statement ' + statement.fields);

    this.afs.collection('user').doc(this.auth.userUID).collection('saved').add(statementObject).then(value => {
      let idData = {
        id: value.id
      };
      this.afs.collection('user').doc(this.auth.userUID).collection('history').doc(value.id).set(idData, {merge: true});
    }).catch(reason => {
      console.log('Reason : ' + reason);
    });
  }

  saveRecent(recent: Recent) {
    this.afs.collection('user').doc(this.auth.userUID).collection('history').doc(recent.id).get().subscribe(value => {
      let statement = new Statement(
        value.id,
        value.get('title'),
        value.get('date'),
        value.get('description'),
        value.get('fields'),
        value.get('status'),
        value.get('uploaderUID')
      );
      this.saveStatement(statement);
    });
  }

}

