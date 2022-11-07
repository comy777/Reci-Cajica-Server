"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageFirebase = void 0;
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyCf-mi9D5kcrOIN2xuyao7lFi8uetNENOs",
    authDomain: "reci-cajica.firebaseapp.com",
    projectId: "reci-cajica",
    storageBucket: "reci-cajica.appspot.com",
    messagingSenderId: "388778272550",
    appId: "1:388778272550:web:00f7e33f25bb85a195c3e7",
    measurementId: "G-56V4LL4MLR",
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.storageFirebase = (0, storage_1.getStorage)(app);
