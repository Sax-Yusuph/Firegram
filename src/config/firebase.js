import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJU6g9fNYoBGxgK3zUQp47SOs5y6M2t7Y",
  authDomain: "sax-firegram.firebaseapp.com",
  databaseURL: "https://sax-firegram.firebaseio.com",
  projectId: "sax-firegram",
  storageBucket: "sax-firegram.appspot.com",
  messagingSenderId: "353265840743",
  appId: "1:353265840743:web:57a2c77f06bb17637a1ac2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const appAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const authProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export {
  appStorage,
  appFirestore,
  appAuth,
  authProvider,
  facebookAuthProvider,
  timestamp,
};
