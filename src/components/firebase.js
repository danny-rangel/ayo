import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBzO-JdP6PiVRZ8eIF2Za7c0dF81uVYlns",
    authDomain: "ayo-app-6783b.firebaseapp.com",
    databaseURL: "https://ayo-app-6783b.firebaseio.com",
    projectId: "ayo-app-6783b",
    storageBucket: "ayo-app-6783b.appspot.com",
    messagingSenderId: "835607637190"
  };

firebase.initializeApp(config);
const db = firebase.firestore();

export { db, firebase };