import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
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
const reatltimedb = firebase.database();

export function setupPresence(user){

  const isOfflineForRealTime = {
    state: 'offline',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  }

  const isOnlineForRealTime = {
    state: 'online',
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  }


  const isOfflineForFirestore = {
    state: 'offline',
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  }

  const isOnlineForFirestore = {
    state: 'online',
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  }

  const rtfbRef = reatltimedb.ref(`/status/${user.uid}`);
  const userDocument = db.doc(`/users/${user.uid}`);

  reatltimedb.ref('.info/connected').on('value', async snapshot => {
    if(snapshot.val() === false) {
      userDocument.update({
        status: isOfflineForFirestore
      });
      return;
    }

    await rtfbRef.onDisconnect().set(isOfflineForRealTime);
    rtfbRef.set(isOnlineForRealTime);
    userDocument.update({
      status: isOnlineForFirestore
    });
  });
}

export { db, firebase };