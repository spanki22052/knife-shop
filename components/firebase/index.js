import * as firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCg1sa9_dLbODwAE-VPVSVw60cvxskdoas",
  authDomain: "knive-shop.firebaseapp.com",
  databaseURL: "https://knive-shop.firebaseio.com",
  projectId: "knive-shop",
  storageBucket: "knive-shop.appspot.com",
  messagingSenderId: "100092782102",
  appId: "1:100092782102:web:23df86aef91319713f3737",
  measurementId: "G-M5TSW42FES",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
