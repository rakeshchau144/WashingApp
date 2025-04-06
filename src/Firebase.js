// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfpwyRYmoc6QMMWlInivh7g2pd-lrbLnQ",
  authDomain: "carwashingapp-2acf4.firebaseapp.com",
  projectId: "carwashingapp-2acf4",
  storageBucket: "carwashingapp-2acf4.firebasestorage.app",
  messagingSenderId: "601119997220",
  appId: "1:601119997220:web:d8bd922b62f93274a547b1",
  measurementId: "G-SWJ9PLKQZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);