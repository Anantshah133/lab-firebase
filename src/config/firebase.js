import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgzYxlHrlEZX8Imfkb9MaUzCjXwasiR-U",
    authDomain: "basic-app-21783.firebaseapp.com",
    databaseURL: "https://basic-app-21783-default-rtdb.firebaseio.com",
    projectId: "basic-app-21783",
    storageBucket: "basic-app-21783.firebasestorage.app",
    messagingSenderId: "809168260429",
    appId: "1:809168260429:web:5ec6798f51ead31b473b04"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();