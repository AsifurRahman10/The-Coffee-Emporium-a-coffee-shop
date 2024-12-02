// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAczvwhfR2epT2WgAQV10tSHDDyGd-t1pc",
  authDomain: "coffe-website-ce.firebaseapp.com",
  projectId: "coffe-website-ce",
  storageBucket: "coffe-website-ce.firebasestorage.app",
  messagingSenderId: "1098498765783",
  appId: "1:1098498765783:web:40bbd33ea916ee1f725192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);