import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Statement} from './statement.model';

@Injectable()
export class StatementService {

  statements$ = Array<Statement>();

  selectedStatement: Statement;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) {

    this.afs.collection('statements').get().subscribe(value => {
      value.forEach(result => {
        this.statements$.push(new Statement(
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

  }
}
