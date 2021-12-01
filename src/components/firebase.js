
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBsGZRg7_ET1vNKbBFNIT7tD3EKz_e10Vo",
    authDomain: "portfolio-fc3a0.firebaseapp.com",
    projectId: "portfolio-fc3a0",
    storageBucket: "portfolio-fc3a0.appspot.com",
    messagingSenderId: "1059179074904",
    appId: "1:1059179074904:web:7a47064a4fa2728a7c012d",
    measurementId: "G-K2MB1P23EW"
  };

  firebase.initializeApp(firebaseConfig)
  
  export default firebase;