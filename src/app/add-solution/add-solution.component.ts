import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatementService} from '../services/statement.service';
import {Statement} from '../model/statement.model';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.scss']
})
export class AddSolutionComponent implements OnInit {

  statementID: string;

  title: string;

  headline: string;
  message: string;

  //todo: Add media when get server.
  // media: Array<File>;

  constructor(private router: ActivatedRoute, public statementService: StatementService) {
    this.statementID = this.router.snapshot.params['id'];

    statementService.afs.collection('statements').doc(this.statementID).get().subscribe(value => {
      this.title = value.get('title')
    })
  }

  onClickUpload() {
    let solution = {
      statementID: this.statementID,
      title: this.title,
      headline: this.headline,
      message: this.message
    };

    this.statementService.uploadStatement(solution)
  }

  ngOnInit() {
  }

}
