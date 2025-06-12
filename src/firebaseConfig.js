import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCgwN8rvjAmG9FGxAevy7773FzCdCLuqiQ",
    authDomain: "vue-3-2025-28082.firebaseapp.com",
    projectId: "vue-3-2025-28082",
    storageBucket: "vue-3-2025-28082.firebasestorage.app",
    messagingSenderId: "977883632107",
    appId: "1:977883632107:web:3c26a7c3e7a859f0c189ae"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };