import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ✅ Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA2NTGGeRY385oML1lX2bh5NwuAEoSbKkc",
  authDomain: "ai-website-93981.firebaseapp.com",
  projectId: "ai-website-93981",
  storageBucket: "ai-website-93981.firebasestorage.app",
  messagingSenderId: "394941826672",
  appId: "1:394941826672:web:3f004ba1cd235d400116b5",
  measurementId: "G-7G6ZHZ8V9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }; // ✅ Make sure you're exporting 'auth' instead of 'app'
