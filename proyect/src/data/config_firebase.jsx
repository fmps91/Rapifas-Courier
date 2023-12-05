import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBeocea8foBTEwkezrgudIcGMQ7NnHgs2E",
  authDomain: "rapicourier-fd256.firebaseapp.com",
  projectId: "rapicourier-fd256",
  storageBucket: "rapicourier-fd256.appspot.com",
  messagingSenderId: "284289082978",
  appId: "1:284289082978:web:e0e66a356ad8d2920a533b",
  measurementId: "G-4316T6CJL4",
};

const getConection = () => {
  return firebase.initializeApp(firebaseConfig);
};
// Initialize Firebase
var fb = getConection();

const db = firebase.firestore();
const dbField = firebase.firestore;
const storage = getStorage();

// login
const auth = getAuth(fb);

export { fb, db, auth, dbField, storage };
