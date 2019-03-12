import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StatementService} from '../services/statement.service';
import {Statement} from '../model/statement.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  colors = ['#FFFFFF', '#FAFAD2'];

  constructor(private router: Router, public statementService: StatementService) {

  }

  onClickCard(statement: Statement) {
    this.statementService.addStatementToHistory(statement);
    this.statementService.selectedStatement = statement;
    this.router.navigate(['statement']);
  }

  ngOnInit() {
  }

}
