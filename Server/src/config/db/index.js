require('dotenv').config();
const { initializeApp } = require('firebase/compat/app');
const { getFirestore } = require('firebase/compat/firestore');
const firebase = require('firebase/compat/app');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY, 
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId:process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
};


const firebaseApp = initializeApp(firebaseConfig);
//const db = firebase.getFirestore(firebaseApp);

module.exports = firebaseApp;
