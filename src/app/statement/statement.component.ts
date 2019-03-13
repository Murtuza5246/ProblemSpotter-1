import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Statement} from '../model/statement.model';

// @ts-ignore

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement: Statement = new Statement('not found', 'Loading', null, '', [''], 0, 'Not found');

  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute, private route: Router) {

    this.afs.collection('statements').doc(activatedRoute.snapshot.params['id']).get().subscribe(value => {
      if (value) {
        this.statement = new Statement(
          value.id,
          value.get('title'),
          value.get('date'),
          value.get('description'),
          value.get('fields'),
          value.get('status'),
          value.get('uploaderID')
        );
      }
    });
  }

  onClickClaim() {
    this.route.navigate(['solution',this.statement.id]);
  }

  ngOnInit() {
  }

}
