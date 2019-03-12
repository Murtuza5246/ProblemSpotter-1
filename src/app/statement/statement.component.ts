import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
// @ts-ignore
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  id: string;
  title: string;
  date: Timestamp;
  description: string;
  field: Array<string>;
  status: number;
  uploaderUID: string;


  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
    this.route.params.subscribe(value => {
      this.getStatement(value['id']);
    });

  }

  getStatement(id: string) {
    this.afs.collection('statements').doc(id).get().subscribe(value => {
      if (value.exists) {
        this.id = value.id;
        this.title = value.get('title');
        this.date = value.get('date');
        this.description = value.get('description');
        this.field = value.get('fields');
        this.status = value.get('status');
        this.uploaderUID = value.get('uploaderUID');

      } else {
        console.log('Sorry cannot find.');
      }
    });
  }

  ngOnInit() {
  }

}
