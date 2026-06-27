
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "inter-4dc7f.firebaseapp.com",
  projectId: "inter-4dc7f",
  storageBucket: "inter-4dc7f.firebasestorage.app",
  messagingSenderId: "716829048526",
  appId: "1:716829048526:web:2c20c1ac18314a5fd75a9f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}