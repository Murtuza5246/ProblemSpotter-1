import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StatementService} from '../services/statement.service';
import {Recent} from '../model/recent.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  isButtonClicked = false;

  constructor(private authService: AuthService, public statementService: StatementService,private router:Router) {
  }

  ngOnInit() {
  }

  onClickCard(recent: Recent) {
    if (!this.isButtonClicked) {
      this.router.navigate(['statement',recent.statementID]);
    }
  }
}
