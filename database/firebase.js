// import firebase from "firebase"
// console.log(firebase);
// // Import the functions you need from the SDKs you need
// import "firebase/firestore"; 
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDXb6Qy5GJgX1Dw2o9ophA8mHjQj6_GRpM",
//   authDomain: "react-firebase29012022.firebaseapp.com",
//   projectId: "react-firebase29012022",
//   storageBucket: "react-firebase29012022.appspot.com",
//   messagingSenderId: "344043456013",
//   appId: "1:344043456013:web:18c24070eb5c750021f744"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore()

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXb6Qy5GJgX1Dw2o9ophA8mHjQj6_GRpM",
  authDomain: "react-firebase29012022.firebaseapp.com",
  projectId: "react-firebase29012022",
  storageBucket: "react-firebase29012022.appspot.com",
  messagingSenderId: "344043456013",
  appId: "1:344043456013:web:18c24070eb5c750021f744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default {
    // firebase,
    db,
    app
}