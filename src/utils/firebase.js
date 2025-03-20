// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJgLd5JnACY78Dnw2gqWjCoAEulKsXK5k",
  authDomain: "video-gpt01.firebaseapp.com",
  projectId: "video-gpt01",
  storageBucket: "video-gpt01.firebasestorage.app",
  messagingSenderId: "1071188375787",
  appId: "1:1071188375787:web:71e6f6a32238d9d32466ae",
  measurementId: "G-VSQ971P2VG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
