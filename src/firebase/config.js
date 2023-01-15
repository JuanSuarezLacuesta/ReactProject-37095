import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTB30Qbzts3fv1HSGtThK8OPcxTpKeo3A",
  authDomain: "reactproject-learning.firebaseapp.com",
  projectId: "reactproject-learning",
  storageBucket: "reactproject-learning.appspot.com",
  messagingSenderId: "949850620932",
  appId: "1:949850620932:web:c0411e62a8be1cb1af2151"
};

// --- initialize Firebase --- //

const app = initializeApp(firebaseConfig);
export const initFirestore = () => app
