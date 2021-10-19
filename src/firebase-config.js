// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBkXp8JZxP25OKMl6eq1YH1qfSYPrfpVkE',
  authDomain: 'fir-tutorial-15377.firebaseapp.com',
  projectId: 'fir-tutorial-15377',
  storageBucket: 'fir-tutorial-15377.appspot.com',
  messagingSenderId: '110471048367',
  appId: '1:110471048367:web:df98fad0f0dfef61caf85a',
  measurementId: 'G-HR8BDHEV12',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
