import firebase from "firebase";

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_KEY,
  authDomain: "blockchaine-test.firebaseapp.com",
  databaseURL: "https://blockchaine-test.firebaseio.com",
  projectId: "blockchaine-test",
  storageBucket: "blockchaine-test.appspot.com",
  messagingSenderId: "615595137600",
  appId: "1:615595137600:web:068e6ff3318a0705689da5",
  measurementId: "G-K0CK3EKNY7",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
