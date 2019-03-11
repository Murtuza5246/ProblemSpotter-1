import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Statement} from '../core/statement.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  statements = Array<Statement>();

  constructor(private router: Router, private auth: AuthService, private afs: AngularFirestore) {

    afs.collection('statements').get().subscribe(value => {
      if (!value.empty) {
        value.forEach(result => {

          let statement = new Statement(
            result.id,
            result.get('title'),
            result.get('date'),
            result.get('description'),
            result.get('fields'),
            result.get('status'),
            result.get('uploaderUID')
          );

          this.statements.push(statement)
        });
        console.log(this.statements)
      } else {
        console.log('Data not found.');
      }
    });

  }

  ngOnInit() {
  }

}
