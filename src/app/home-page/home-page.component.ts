import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {StatementService} from '../core/statement.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  colors = ['#FFFFFF', '#FAFAD2'];

  constructor(private router: Router, private auth: AuthService, private afs: AngularFirestore, public StatementService: StatementService) {



  }

  ngOnInit() {
  }

}
