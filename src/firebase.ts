// src/firebase.js
import { initializeApp } from "firebase/app";
import { initializeAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyCRvIaeJbGLOjyhPArY-nuaYWy_FmktSIk",
  authDomain: "latarnik-studencki-1262f.firebaseapp.com",
  projectId: "latarnik-studencki-1262f",
  storageBucket: "latarnik-studencki-1262f.firebasestorage.app",
  messagingSenderId: "631548599056",
  appId: "1:631548599056:web:55694a419658885d7fe395",
  measurementId: "G-2D5DMBD7EW"
};


// Inicjalizacja Firebase
const app = initializeApp(firebaseConfig);

// Inicjalizacja Analytics (zadziała tylko w przeglądarce)
export const analytics = initializeAnalytics(app, {
    config: {
        cookie_domain: 'saviusz.github.io',
        cookie_flags: 'SameSite=None;Secure'
    }
});
export default app;