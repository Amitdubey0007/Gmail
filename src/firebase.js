import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6u7ttPoXIlizvskL7NDB8B476VioXoCM",
  authDomain: "clone-b8dc4.firebaseapp.com",
  projectId: "clone-b8dc4",
  storageBucket: "clone-b8dc4.appspot.com",
  messagingSenderId: "286159683575",
  appId: "1:286159683575:web:b410f8b343b47fc02e38f2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
