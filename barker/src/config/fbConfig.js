import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Hm-xxJiJknXMHkuLubkCjqf6Xh6TiOw",
  authDomain: "barker-17cc1.firebaseapp.com",
  databaseURL: "https://barker-17cc1.firebaseio.com",
  projectId: "barker-17cc1",
  storageBucket: "barker-17cc1.appspot.com",
  messagingSenderId: "1097794213056",
  appId: "1:1097794213056:web:79d8a567b2b7ae148b8925",
  measurementId: "G-JM8FJCV64Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;