// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const API_KEY = import.meta.env.VITE_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "cargo-20c2e.firebaseapp.com",
  projectId: "cargo-20c2e",
  storageBucket: "cargo-20c2e.appspot.com",
  messagingSenderId: "586826178066",
  appId: "1:586826178066:web:1489e6b30fde3ccdc082cb",
  measurementId: "G-QL7Q1ZZZY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app);
