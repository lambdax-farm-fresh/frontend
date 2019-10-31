import firebase from "firebase/app";

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "farm-fresh-jsl.firebaseapp.com",
    databaseURL: "https://farm-fresh-jsl.firebaseio.com",
    projectId: "farm-fresh-jsl",
    storageBucket: "farm-fresh-jsl.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(config);

export default firebase;