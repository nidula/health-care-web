// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnA4z0eNkARsLOlR_DHr5KxEsaTOjsEX0",
  authDomain: "mental-health-d1d35.firebaseapp.com",
  projectId: "mental-health-d1d35",
  storageBucket: "mental-health-d1d35.appspot.com",
  messagingSenderId: "189682816266",
  appId: "1:189682816266:web:1dc36bc5bb5acddad516f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };
