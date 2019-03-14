import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StatementService} from '../services/statement.service';
import {Statement} from '../model/statement.model';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  colors = ['#FFFFFF', '#FAFAD2'];
  isButtonClicked = false;

  appliedFilter = new Set();

  statement = this.statementService.allStatements$;

  constructor(private router: Router, public statementService: StatementService) {
  }

  ngOnInit() {
  }

  onClickCard(statement: Statement) {
    if (!this.isButtonClicked) {
      this.statementService.addStatementToHistory(statement);
      this.statementService.selectedStatement = statement;
      this.router.navigate(['statement', statement.id]);
    }
  }

  applyFilter() {
    this.statement = this.statementService.allStatements$.pipe(take(1), map(value => {
      let statements = Array<Statement>();
      let stat = value as Array<Statement>;

      stat.forEach(rootElement => {
        rootElement.fields.forEach(f => {
          if (this.appliedFilter.has(f)) {
            statements.push(rootElement);
          }
        });
      });

      return statements;
    }));
  }

  onChangeFilter(filter: string) {
    if (this.appliedFilter.has(filter)) {
      this.appliedFilter.delete(filter);
    } else {
      this.appliedFilter.add(filter);
    }
  }
}

