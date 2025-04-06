// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUkcYTy-cE1Io97ZRJdfV1ieR6ru8_2KI",
  authDomain: "washingapp-1f308.firebaseapp.com",
  projectId: "washingapp-1f308",
  storageBucket: "washingapp-1f308.firebasestorage.app",
  messagingSenderId: "1063030755507",
  appId: "1:1063030755507:web:7ea131c77c891956c3e0c6",
  measurementId: "G-JWHVG7SWLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)