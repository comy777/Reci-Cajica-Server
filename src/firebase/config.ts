import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCf-mi9D5kcrOIN2xuyao7lFi8uetNENOs",
  authDomain: "reci-cajica.firebaseapp.com",
  projectId: "reci-cajica",
  storageBucket: "reci-cajica.appspot.com",
  messagingSenderId: "388778272550",
  appId: "1:388778272550:web:00f7e33f25bb85a195c3e7",
  measurementId: "G-56V4LL4MLR",
};

const app = initializeApp(firebaseConfig);

export const storageFirebase = getStorage(app);
