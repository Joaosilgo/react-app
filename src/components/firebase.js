import firebase from 'firebase/app';

import { app } from "firebase";

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCshnGLMovwVnR12nce2wLOrYAbekJi-Ek",
    authDomain: "project1-d6d98.firebaseapp.com",
    databaseURL: "https://project1-d6d98.firebaseio.com",
    projectId: "project1-d6d98",
    storageBucket: "project1-d6d98.appspot.com",
    messagingSenderId: "892725629518",
    appId: "1:892725629518:web:ae0a44178167247826291f",
    measurementId: "G-PPG6SF8K56"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;