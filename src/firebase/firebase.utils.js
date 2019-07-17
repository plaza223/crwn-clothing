import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBL-RXY3_yHNuCsXm1uK-WedLbR4RFUjqc",
    authDomain: "crwn-db-76f3c.firebaseapp.com",
    databaseURL: "https://crwn-db-76f3c.firebaseio.com",
    projectId: "crwn-db-76f3c",
    storageBucket: "",
    messagingSenderId: "897566852624",
    appId: "1:897566852624:web:d676120ba7ccfe87"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;