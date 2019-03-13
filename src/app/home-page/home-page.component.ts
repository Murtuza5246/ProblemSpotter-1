import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StatementService} from '../services/statement.service';
import {Statement} from '../model/statement.model';
import {FilterDialogComponent} from './filter-dialog/filter-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  colors = ['#FFFFFF', '#FAFAD2'];

  name: string;
  animal: string;

  isButtonClicked = false;

  constructor(private router: Router, public statementService: StatementService, public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

  onClickCard(statement: Statement) {
    if (!this.isButtonClicked) {
      this.statementService.addStatementToHistory(statement);
      this.statementService.selectedStatement = statement;
      this.router.navigate(['statement',statement.id]);
    }
  }

  ngOnInit() {
  }

}

