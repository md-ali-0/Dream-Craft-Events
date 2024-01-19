// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1QjtlTclDhO49vvA2x_-eKj5WwBWo0hU",
  authDomain: "dream-craft-events.firebaseapp.com",
  projectId: "dream-craft-events",
  storageBucket: "dream-craft-events.appspot.com",
  messagingSenderId: "428426162466",
  appId: "1:428426162466:web:0cbda1c95851c51ac4757b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);