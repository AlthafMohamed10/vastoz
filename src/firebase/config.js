// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfyLMFm3HBlYD1M1pPg3u1GDr3JuVYctQ",
  authDomain: "vastoz.firebaseapp.com",
  projectId: "vastoz",
  storageBucket: "vastoz.appspot.com",
  messagingSenderId: "162193593335",
  appId: "1:162193593335:web:03d9ce4344ecc3c7f2d4f2",
  measurementId: "G-LNVN6KCJCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default firebase_app;
