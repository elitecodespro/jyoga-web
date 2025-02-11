// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "gym-buddy-a89d0.firebaseapp.com",
  databaseURL: "https://gym-buddy-a89d0.firebaseio.com",
  projectId: "gym-buddy-a89d0",
  storageBucket: "gym-buddy-a89d0.appspot.com",
  messagingSenderId: "183756057231",
  appId: "1:183756057231:web:a145d1223716552fd55efa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);