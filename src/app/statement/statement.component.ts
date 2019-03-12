import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {StatementService} from '../core/statement.service';
import {Statement} from '../core/statement.model';

// @ts-ignore

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement: Statement;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private statementService: StatementService) {
    this.statement = statementService.selectedStatement;
  }

  ngOnInit() {
  }

}
