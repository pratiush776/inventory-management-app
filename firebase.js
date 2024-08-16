// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_79QqsjbogPCf-xCkjNsZQeTPCwtbjRQ",
  authDomain: "inventory-management-sys-d710c.firebaseapp.com",
  projectId: "inventory-management-sys-d710c",
  storageBucket: "inventory-management-sys-d710c.appspot.com",
  messagingSenderId: "413309388954",
  appId: "1:413309388954:web:29ea176bd2c8db4e24f723",
  measurementId: "G-CEBHR7Y0FZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app)

export {firestore}