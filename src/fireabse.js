import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTTM8CIWVP1R6FoT3dgkuP7IiOV20q_No",
  authDomain: "teztick.firebaseapp.com",
  projectId: "teztick",
  storageBucket: "teztick.appspot.com",
  messagingSenderId: "629441004865",
  appId: "1:629441004865:web:547f9ca59940d1b0d3cdc0",
  measurementId: "G-4J5HDYNXKY"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db;


