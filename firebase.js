// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
require('dotenv').config()

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "inventory-management-sys-d710c.firebaseapp.com",
  projectId: "inventory-management-sys-d710c",
  storageBucket: "inventory-management-sys-d710c.appspot.com",
  messagingSenderId: process.env.measurementId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app)

export {firestore}