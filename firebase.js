import { initializeApp } from "firebase/app";
import { storage } from "firebase/storage";
import { auth } from "firebase/auth";

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const storageInstance = storage(app);

window.firebase = app;
window.auth = auth;
