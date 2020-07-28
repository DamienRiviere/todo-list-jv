import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: object;

  constructor() { }

  ngOnInit(): void {
    if (firebase.auth().currentUser != null) {
      this.user = firebase.auth().currentUser;
    }
  }

}
