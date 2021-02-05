import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBtdiLy_2Juxgro8ezUgr2EFYNWPextpJc",
    authDomain: "crwn-db-d33b7.firebaseapp.com",
    projectId: "crwn-db-d33b7",
    storageBucket: "crwn-db-d33b7.appspot.com",
    messagingSenderId: "411846519641",
    appId: "1:411846519641:web:3a773b1430f8a90277fa48",
    measurementId: "G-61P8E4PY2N"
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInwithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
