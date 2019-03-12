import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StatementService} from '../services/statement.service';

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

}
