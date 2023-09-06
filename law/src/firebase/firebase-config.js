// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdb-YET9dHFPSC9J3cnW1rUJn-G6zd0co",
  authDomain: "varun-d54a1.firebaseapp.com",
  projectId: "varun-d54a1",
  storageBucket: "varun-d54a1.appspot.com",
  messagingSenderId: "1029900434259",
  appId: "1:1029900434259:web:bbd11d5f7573a1445a7fa6",
  measurementId: "G-VRNRLCL8EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const provider =new GoogleAuthProvider()
export const db =getFirestore(app)