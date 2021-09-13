import firebase from 'firebase/compat/app';
import  'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBsXaF5Z7Tb0YJ2UCjvlM8mYgL-1ifq8eA",

    authDomain: "crwn-db-ec8b3.firebaseapp.com",
  
    projectId: "crwn-db-ec8b3",
  
    storageBucket: "crwn-db-ec8b3.appspot.com",
  
    messagingSenderId: "54863768095",
  
    appId: "1:54863768095:web:d40e9917d5a9936069832a",
  
    measurementId: "G-VHJ2YMV53S"  
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle  = () => auth.signInWithPopup(provider);

export default firebase;