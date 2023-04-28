// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMVOo1yxd0gQzTLNje6nSBTjvz-sX2pBc",
  authDomain: "plant-lens-7f132.firebaseapp.com",
  projectId: "plant-lens-7f132",
  storageBucket: "plant-lens-7f132.appspot.com",
  messagingSenderId: "378448712277",
  appId: "1:378448712277:web:5c480ac033a7a96d45badc",
  measurementId: "G-F493X3VR7H",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// for auth 
export const auth = getAuth(app);

// for Storage
export const storage = getStorage(app);

export default app;
