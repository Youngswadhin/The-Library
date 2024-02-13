import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3KyDRgeRpOXHhVBzjS_L3J-xiOAN3jmo",
    authDomain: "library-tanmay.firebaseapp.com",
    projectId: "library-tanmay",
    storageBucket: "library-tanmay.appspot.com",
    messagingSenderId: "382518232245",
    appId: "1:382518232245:web:1378a25c621fe58a90eafc",
    measurementId: "G-Q2J4VSL2ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

