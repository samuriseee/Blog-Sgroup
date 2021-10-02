import firebase from "firebase/app";
import "firebase/firestore";

<<<<<<< HEAD
const firebaseConfig = {
  apiKey: "AIzaSyCmEsx1bAezxDU639Fd5pqfNlGeckmLkJY",
  authDomain: "blog-sgroup.firebaseapp.com",
  projectId: "blog-sgroup",
  storageBucket: "blog-sgroup.appspot.com",
  messagingSenderId: "329854933967",
  appId: "1:329854933967:web:0f9df333bd526abed890ba",
  measurementId: "G-DXMNG8J33C",
=======

const firebaseConfig = {
    apiKey: "AIzaSyCmEsx1bAezxDU639Fd5pqfNlGeckmLkJY",
    authDomain: "blog-sgroup.firebaseapp.com",
    projectId: "blog-sgroup",
    storageBucket: "blog-sgroup.appspot.com",
    messagingSenderId: "329854933967",
    appId: "1:329854933967:web:0f9df333bd526abed890ba",
    measurementId: "G-DXMNG8J33C",
>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
<<<<<<< HEAD
export default firebaseApp.firestore();
=======
export default firebaseApp.firestore();
>>>>>>> edcf56eea0ea776d641bf3fdc6d37520ee137259
