// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQzynppTa8i-qtNJLLFTDjoURdcsfkt4",
  authDomain: "netflixgpt-d8b8e.firebaseapp.com",
  projectId: "netflixgpt-d8b8e",
  storageBucket: "netflixgpt-d8b8e.firebasestorage.app",
  messagingSenderId: "317338988729",
  appId: "1:317338988729:web:da9228b750d275b59aab68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 
export const auth = getAuth();