import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu7l2QnkHdx8B6D_mnj7c_yIzsi3IAwwI",
  authDomain: "restaurants-675ed.firebaseapp.com",
  projectId: "restaurants-675ed",
  storageBucket: "restaurants-675ed.appspot.com",
  messagingSenderId: "309061534782",
  appId: "1:309061534782:web:eff83feb1ac14a96047d6f",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
