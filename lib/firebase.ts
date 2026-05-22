// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyC4_54RIvL365AI-icf4gPxrfda-kATCkI",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "morzze-daaa1.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "morzze-daaa1",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "morzze-daaa1.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "648307761338",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:648307761338:web:6ce363bad697e65fbbe283",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-17PG4XQ2EL",
};

// Initialize Firebase only once (safe for Next.js SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export auth only on the client to avoid server-side errors
export const auth = typeof window !== "undefined" ? getAuth(app) : (null as any);