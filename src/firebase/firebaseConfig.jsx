import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBr5Dh50akUUYmUYWlkswvfJRZWfIgW9Bs",
	authDomain: "smsports-7a7c0.firebaseapp.com",
	projectId: "smsports-7a7c0",
	storageBucket: "smsports-7a7c0.appspot.com",
	messagingSenderId: "1029776047685",
	appId: "1:1029776047685:web:c204700f868fff0790ad2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
