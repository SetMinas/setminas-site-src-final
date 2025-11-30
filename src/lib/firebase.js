// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDcogA9nFaR0H7hf7Jc2XMknu4BCuMPL_E",
	authDomain: "setminas-site.firebaseapp.com",
	databaseURL: "https://setminas-site-default-rtdb.firebaseio.com",
	projectId: "setminas-site",
	storageBucket: "setminas-site.firebasestorage.app",
	messagingSenderId: "930394469416",
	appId: "1:930394469416:web:85a3a79d89d235113f311d",
	measurementId: "G-RY31C1MY35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };
