import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbjUpK-Q92agIb_lLbELDJqJYhBWH4ix8",
  authDomain: "pizzapleple.firebaseapp.com",
  projectId: "pizzapleple",
  storageBucket: "pizzapleple.appspot.com",
  messagingSenderId: "885366382707",
  appId: "1:885366382707:web:75a9d88bb3ea875c800a06",
  measurementId: "G-EV1SR9FFFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;