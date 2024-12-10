// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARYriuoMsRtHlXJq40ClXikGpPKPD2QRA",
  authDomain: "cs601-final-7d236.firebaseapp.com",
  projectId: "cs601-final-7d236",
  storageBucket: "cs601-final-7d236.firebasestorage.app",
  messagingSenderId: "1019412339983",
  appId: "1:1019412339983:web:a2fead9b14b99d2bea727a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };