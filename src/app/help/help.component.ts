import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  title: string;
  message: string;
  uid: string;
  name: string;
  email: string;

  constructor(private auth: AuthService, private afs: AngularFirestore) {
    auth.user$.subscribe((user) => {
      this.uid = user.uid;
      this.name = user.displayName;
      this.email = user.email;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    let help = {
      title: this.title,
      message: this.message,
      uid: this.uid,
      name: this.name,
      email: this.email
    };

    this.afs.collection('help').add(help).then(value => {
      console.log('Data updated in ' + value.id);
    });
  }

}
