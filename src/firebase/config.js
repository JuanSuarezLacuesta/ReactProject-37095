// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTB30Qbzts3fv1HSGtThK8OPcxTpKeo3A",
  authDomain: "reactproject-learning.firebaseapp.com",
  projectId: "reactproject-learning",
  storageBucket: "reactproject-learning.appspot.com",
  messagingSenderId: "949850620932",
  appId: "1:949850620932:web:c0411e62a8be1cb1af2151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app