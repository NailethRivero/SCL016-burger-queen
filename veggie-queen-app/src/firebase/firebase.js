import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUB_RhgRm71uSNB5ITZRTQO0_4kRzTu8Y",
    authDomain: "veggie-queen-22254.firebaseapp.com",
    projectId: "veggie-queen-22254",
    storageBucket: "veggie-queen-22254.appspot.com",
    messagingSenderId: "208285298091",
    appId: "1:208285298091:web:3b44df4bafc63e31f476ee",
    measurementId: "G-G9MZC554P1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;