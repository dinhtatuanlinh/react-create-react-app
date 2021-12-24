// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCv2UvXeG99xAJyrwX8I5_GhH3fnFnpREI",
  authDomain: "test-authentication-f2192.firebaseapp.com",
  projectId: "test-authentication-f2192",
  storageBucket: "test-authentication-f2192.appspot.com",
  messagingSenderId: "458108850105",
  appId: "1:458108850105:web:b46ecdc0dc9decfc577068",
  measurementId: "G-851ZKFKZMR"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);