// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuJh4ZbZNtqmpxZDd4LGPohe0rJ1rvksI",
  authDomain: "bliss-car-world.firebaseapp.com",
  projectId: "bliss-car-world",
  storageBucket: "bliss-car-world.appspot.com",
  messagingSenderId: "39094141554",
  appId: "1:39094141554:web:a13b3fb5c03d3d2825b8eb",
  measurementId: "G-VJP5X3VZ1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app ;