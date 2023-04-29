// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3xiXY7vcJ4j4EFknXsD09MJk94OlsWvg",
  authDomain: "fake-authentication-63338.firebaseapp.com",
  projectId: "fake-authentication-63338",
  storageBucket: "fake-authentication-63338.appspot.com",
  messagingSenderId: "109640830829",
  appId: "1:109640830829:web:1f7471c267fbc89865d464",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const actionCodeSettings = {
  url: "http://127.0.0.1:5173/",
  handleCodeInApp: true,
};