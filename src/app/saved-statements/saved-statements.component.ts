import {Component, OnInit} from '@angular/core';
import {StatementService} from '../services/statement.service';

@Component({
  selector: 'app-saved-statements',
  templateUrl: './saved-statements.component.html',
  styleUrls: ['./saved-statements.component.scss']
})
export class SavedStatementsComponent implements OnInit {

  constructor(private statementService: StatementService) {
  }

  ngOnInit() {
  }

  onClickCard(statement) {

  }

}
