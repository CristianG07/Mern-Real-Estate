// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b3862.firebaseapp.com",
  projectId: "mern-estate-b3862",
  storageBucket: "mern-estate-b3862.appspot.com",
  messagingSenderId: "796680072602",
  appId: "1:796680072602:web:54ba59c4bae7e833b69e23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);