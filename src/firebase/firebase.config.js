import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAlR4k_i8YR5CMU0UG2_19RIeYt6eSwWAo",
  authDomain: "backend-auth-5c27b.firebaseapp.com",
  projectId: "backend-auth-5c27b",
  storageBucket: "backend-auth-5c27b.appspot.com",
  messagingSenderId: "274406421930",
  appId: "1:274406421930:web:9f6e21fe24d9ca47f767d3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
