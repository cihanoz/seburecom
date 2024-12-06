import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHUXBziyyyX0d3WJkWN4W2rk-aCTwZl-0",
  authDomain: "sebure-7da1c.firebaseapp.com",
  projectId: "sebure-7da1c",
  storageBucket: "sebure-7da1c.appspot.com",
  messagingSenderId: "1033131477436",
  appId: "1:1033131477436:web:3b82c703b84776a609c3b9",
  measurementId: "G-DYS8883KCV"
};
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
getFirestore(app);
export {
  auth as a
};
