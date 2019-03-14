import {Component, OnInit} from '@angular/core';
import {StatementService} from '../services/statement.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-saved-statements',
  templateUrl: './saved-statements.component.html',
  styleUrls: ['./saved-statements.component.scss']
})
export class SavedStatementsComponent implements OnInit {

  isButtonClicked = false;

  constructor(public statementService: StatementService, public router: Router) {}

  ngOnInit() {
  }

  onClickCard(statement) {
    if (!this.isButtonClicked) {
      this.router.navigate(['statement',statement.statementID]);
    }
  }

  onClickSolution(id:string){
    this.router.navigate(['solution',id]);
  }

}
