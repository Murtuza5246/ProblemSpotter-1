import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Statement} from '../model/statement.model';
import {Recent} from '../model/recent.model';

@Injectable()
export class StatementService {

  allStatements$ = Array<Statement>();
  recentStatement$ = Array<Recent>();
  selectedStatement: Statement;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) {

    //adding all statements.
    this.afs.collection('statements').get().subscribe(value => {
      value.forEach(result => {
        this.allStatements$.push(new Statement(
          result.id,
          result.get('title'),
          result.get('date'),
          result.get('description'),
          result.get('fields'),
          result.get('status'),
          result.get('uploaderUID')
        ));
      });
    });

    //adding recent statements.
    this.afs.collection('user').doc(this.auth.userUID).collection('history').get().subscribe(value => {
      value.forEach(result => {
        this.recentStatement$.push(new Recent(result.id, result.get('statementID'), result.get('title')));
      });
    });
  }

  addStatementToHistory(statement: Statement) {
    let statementObject = {
      statementID: statement.id,
      title: statement.title,
    };
    this.afs.collection('user').doc(this.auth.userUID).collection('history').add(statementObject);
  }

  saveStatement(statement: Statement) {
    let statementObject = {
      id: statement.id,
      title: statement.title,
      status: statement.status,
      fields: statement.field
    };
    this.afs.collection('user').doc(this.auth.userUID).collection('saved').add(statementObject);
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

