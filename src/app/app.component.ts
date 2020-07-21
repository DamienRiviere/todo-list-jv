import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBo7WAvRf-MUcgRW-BNPvrZ6fbkF8wYG58",
      authDomain: "todolist-jv.firebaseapp.com",
      databaseURL: "https://todolist-jv.firebaseio.com",
      projectId: "todolist-jv",
      storageBucket: "todolist-jv.appspot.com",
      messagingSenderId: "803307429760",
      appId: "1:803307429760:web:dd7d4f6f76e6218c3eab65",
      measurementId: "G-QHETJBEJ6N"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
