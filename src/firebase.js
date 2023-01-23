// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwxwWXKHYfp6elZ7nFl9MZ17dAZQaXX5Y",
  authDomain: "moviefy-app.firebaseapp.com",
  projectId: "moviefy-app",
  storageBucket: "moviefy-app.appspot.com",
  messagingSenderId: "743207861863",
  appId: "1:743207861863:web:c75789ac5c4a7057685ec2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
