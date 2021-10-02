import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCmEsx1bAezxDU639Fd5pqfNlGeckmLkJY",
    authDomain: "blog-sgroup.firebaseapp.com",
    projectId: "blog-sgroup",
    storageBucket: "blog-sgroup.appspot.com",
    messagingSenderId: "329854933967",
    appId: "1:329854933967:web:0f9df333bd526abed890ba",
    measurementId: "G-DXMNG8J33C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
