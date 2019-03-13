import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-solution',
  templateUrl: './add-solution.component.html',
  styleUrls: ['./add-solution.component.scss']
})
export class AddSolutionComponent implements OnInit {

  statementID: string;

  constructor(private router: ActivatedRoute) {
    this.statementID = this.router.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
