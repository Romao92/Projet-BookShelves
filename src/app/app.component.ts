import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor(){
     // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDcYJfV8SpbkFxmXa6FIA0zciNtZ8lDFHM",
    authDomain: "bookshelves-2e961.firebaseapp.com",
    databaseURL: "https://bookshelves-2e961.firebaseio.com",
    projectId: "bookshelves-2e961",
    storageBucket: "bookshelves-2e961.appspot.com",
    messagingSenderId: "371484886885",
    appId: "1:371484886885:web:ccf6be8c69b4698f53838c",
    measurementId: "G-SJJ5ZYHKV6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  }
}
