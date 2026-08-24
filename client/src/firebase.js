// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-gjcl.firebaseapp.com",
  projectId: "mern-estate-gjcl",
  storageBucket: "mern-estate-gjcl.firebasestorage.app",
  messagingSenderId: "767127447527",
  appId: "1:767127447527:web:f87202ef0b7552ffa07f42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);