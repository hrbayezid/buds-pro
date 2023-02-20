import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // apiKey: "#####################",
  // authDomain: "####################",
  // projectId: "##############",
  // storageBucket: "###############",
  // messagingSenderId: "###########",
  // appId: "##################",
  // measurementId: "############"
  apiKey: "AIzaSyBISsz-6S9yGJDhE26PhXtTBox6Lsr0BeU",
  authDomain: "letit-go-af4bd.firebaseapp.com",
  projectId: "letit-go-af4bd",
  storageBucket: "letit-go-af4bd.appspot.com",
  messagingSenderId: "761692514477",
  appId: "1:761692514477:web:874965b3569214a7363e24",
  measurementId: "G-GK6PSXZ8SR"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };