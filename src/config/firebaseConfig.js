import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
//  import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import{getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
//import 'firebase/storage';
import {getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBJaZqdti73p6_W5VLhL4cImtIP3yLPJho",
    authDomain: "fir-todo-19dea.firebaseapp.com",
    projectId: "fir-todo-19dea",
    storageBucket: "fir-todo-19dea.appspot.com",
    messagingSenderId: "546043032199",
    appId: "1:546043032199:web:382ef00bd32eef2a4a7e22",
    measurementId: "G-27XG6KV0ZC"
  };
  
  

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
const auth = getAuth();

// export const db = firebase.firestore(app);
export const db = getFirestore(app);
