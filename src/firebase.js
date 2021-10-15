import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR-bnJu-SGeU1EhGol57saRuKWFpyEIkA",
  authDomain: "redux-slack2.firebaseapp.com",
  projectId: "redux-slack2",
  storageBucket: "redux-slack2.appspot.com",
  messagingSenderId: "339813563799",
  appId: "1:339813563799:web:4426c1dbcbd7f9856f18d2",
  measurementId: "G-2MY4VXWQ72",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
