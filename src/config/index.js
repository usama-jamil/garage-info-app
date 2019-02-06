// This separate configuration file
import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtGR3GDiBN69oMDVWmHOonckkTr2ZLpj4",
  authDomain: "garage-info.firebaseapp.com",
  databaseURL: "https://garage-info.firebaseio.com",
  projectId: "garage-info",
  storageBucket: "garage-info.appspot.com",
  messagingSenderId: "263195183929"
};
firebase.initializeApp(config);
