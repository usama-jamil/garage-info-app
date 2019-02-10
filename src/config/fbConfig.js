// This separate configuration file
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const fbConfig = {
  apiKey: "AIzaSyDtGR3GDiBN69oMDVWmHOonckkTr2ZLpj4",
  authDomain: "garage-info.firebaseapp.com",
  databaseURL: "https://garage-info.firebaseio.com",
  projectId: "garage-info",
  storageBucket: "garage-info.appspot.com",
  messagingSenderId: "263195183929"
};
firebase.initializeApp(fbConfig);

export default firebase;
