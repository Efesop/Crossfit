import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-iM_jfS5VcHtOMFxyyjlrRdwgJHF_Y10",
  authDomain: "inspo-4ff22.firebaseapp.com",
  projectId: "inspo-4ff22",
  storageBucket: "inspo-4ff22.appspot.com",
  messagingSenderId: "63851151578",
  appId: "1:63851151578:web:faae7e76a59b4c341165e3",
  measurementId: "G-TJ2LK1QMJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
