// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCraeFbUEPAfhH3df37ymSUKjXzrdSR9Ek",
  authDomain: "netfilxgpt-2a40e.firebaseapp.com",
  projectId: "netfilxgpt-2a40e",
  storageBucket: "netfilxgpt-2a40e.firebasestorage.app",
  messagingSenderId: "124189231102",
  appId: "1:124189231102:web:c05113f94fa69c94c4a2af",
  measurementId: "G-06B9MJMDEV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
