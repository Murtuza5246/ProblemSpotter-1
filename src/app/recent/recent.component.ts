import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StatementService} from '../services/statement.service';
import {Recent} from '../model/recent.model';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  constructor(private authService: AuthService, private statementService: StatementService) {
  }

  ngOnInit() {
  }

  onClickCard(recent: Recent) {

  }
}
