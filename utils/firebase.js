// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNeP9On0lU1_Z6GpIPJ9BL034jR50Cc5A",
  authDomain: "netflix-gpt-24569.firebaseapp.com",
  projectId: "netflix-gpt-24569",
  storageBucket: "netflix-gpt-24569.firebasestorage.app",
  messagingSenderId: "127944242711",
  appId: "1:127944242711:web:1fb6409d9c1c3f881c0e52",
  measurementId: "G-YK72S76NW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
