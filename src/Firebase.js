import firebase from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBKYDGJh6vK6BNGbboYMiHW1LuMEoADmCY",
    authDomain: "clone-ec41f.firebaseapp.com",
    databaseURL: "https://clone-ec41f.firebaseio.com",
    projectId: "clone-ec41f",
    storageBucket: "clone-ec41f.appspot.com",
    messagingSenderId: "408907837467",
    appId: "1:408907837467:web:510844b3b7af9b82bec8be",
    measurementId: "G-K3YC41WMRR"
})
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
export {db,auth}