// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdm6LkHVaCzOr4Ovq7RCF9s-TqZNbHY3k",
  authDomain: "assignment-11-2a620.firebaseapp.com",
  projectId: "assignment-11-2a620",
  storageBucket: "assignment-11-2a620.appspot.com",
  messagingSenderId: "705123482108",
  appId: "1:705123482108:web:8478b209df2656d4699a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
