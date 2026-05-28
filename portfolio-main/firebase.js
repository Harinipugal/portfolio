// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD27ytekM8GDQJJeX7NZh4Layu39TbYL3M",
  authDomain: "px-portfolio.firebaseapp.com",
  projectId: "px-portfolio",
  storageBucket: "px-portfolio.firebasestorage.app",
  messagingSenderId: "646758106836",
  appId: "1:646758106836:web:55885d9cb076899688dd41",
  measurementId: "G-5YLJQL33JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);