// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyCUE3kKM310Bi8vZOOhy1myvqFfwaiprAw",
  authDomain: "amrifoundation-3f57d.firebaseapp.com",
  projectId: "amrifoundation-3f57d",
  storageBucket: "amrifoundation-3f57d.appspot.com",
  messagingSenderId: "1071535878463",
  appId: "1:1071535878463:web:13b66e2fda7a7e8111e38a",
  measurementId: "G-8ZKXHMYBZ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app)