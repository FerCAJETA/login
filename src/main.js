import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5H0a0HYeqmuWZVR9YsMhcB-SM_zyhFxI",
  authDomain: "login-163dd.firebaseapp.com",
  projectId: "login-163dd",
  storageBucket: "login-163dd.firebasestorage.app",
  messagingSenderId: "604869144996",
  appId: "1:604869144996:web:31c2533e29c1e04fbe1131"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
