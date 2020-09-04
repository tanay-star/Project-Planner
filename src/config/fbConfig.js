import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB1d2W_-MAoPgRA9cZYTRuF6i8XUr0vgtc",
    authDomain: "myplanner-69a5c.firebaseapp.com",
    databaseURL: "https://myplanner-69a5c.firebaseio.com",
    projectId: "myplanner-69a5c",
    storageBucket: "myplanner-69a5c.appspot.com",
    messagingSenderId: "723652129378",
    appId: "1:723652129378:web:8fd13d6abc6cfbd97b973b",
    measurementId: "G-19EG886R1R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;