import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyAsEiqGquyvMwevL0tQjZMxTUgTt86d8gk",
  authDomain: "wacommerce-74032.firebaseapp.com",
  projectId: "wacommerce-74032",
  storageBucket: "wacommerce-74032.appspot.com",
  messagingSenderId: "557192012145",
  appId: "1:557192012145:web:b460ba3c7cd292e81356d0",
  measurementId: "G-RKHR9PG9W0"
};

firebase.initializeApp(config);

export default firebase.firestore();
