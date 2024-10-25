import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAdLADtAeuLIsyY-ahIC0yd6gYT8lJcufY",
  authDomain: "crud-app-528a2.firebaseapp.com",
  projectId: "crud-app-528a2",
  storageBucket: "crud-app-528a2.appspot.com",
  messagingSenderId: "866927823724",
  appId: "1:866927823724:web:291e7cde677f72eea04149",
  measurementId: "G-RKHQVX9XW4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut}