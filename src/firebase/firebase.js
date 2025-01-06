/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoZxalbC32UMuLb_BqCupO6Q8LoebaylE",
    authDomain: "atulyabhinav-90935.firebaseapp.com",
    projectId: "atulyabhinav-90935",
    storageBucket: "atulyabhinav-90935.firebasestorage.app",
    messagingSenderId: "731541248302",
    appId: "1:731541248302:web:ae69bb2047b74a1d0382bf",
    measurementId: "G-SB20YXFWY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db };