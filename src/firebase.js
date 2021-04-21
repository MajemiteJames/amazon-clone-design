import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCCgi8CkesLbYW3AAIT6xH1LInYtRmdjmY",
    authDomain: "clone-2a48e.firebaseapp.com",
    projectId: "clone-2a48e",
    storageBucket: "clone-2a48e.appspot.com",
    messagingSenderId: "721325163369",
    appId: "1:721325163369:web:79faf41a58ec16bd02b3f8",
    measurementId: "G-1Z3YGGRPPK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };