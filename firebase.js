import { initializeApp } from "firebase/app";
import { storage } from "firebase/storage";
import { auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDna36JWkYvRBGnHRX969L3sGGzP0Ab2d0",
  authDomain: "empregajovem-a0819.firebaseapp.com",
  projectId: "empregajovem-a0819",
  storageBucket: "empregajovem-a0819.appspot.com",
  messagingSenderId: "108050421223",
  appId: "1:108050421223:web:2758352f7bbfd94ebad942"
};

const app = initializeApp(firebaseConfig);
const storageInstance = storage(app);

window.firebase = app;
window.auth = auth;
