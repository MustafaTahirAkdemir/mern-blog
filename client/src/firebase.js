// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-8b088.firebaseapp.com",
  projectId: "mern-blog-8b088",
  storageBucket: "mern-blog-8b088.appspot.com",
  messagingSenderId: "32638611244",
  appId: "1:32638611244:web:84e40c6870071591de8689"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);