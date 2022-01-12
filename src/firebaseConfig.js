import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNs2vgKOww-9z4prMMEBGh_bqU0AlZJ7Q",
    authDomain: "mobile-team-a.firebaseapp.com",
    projectId: "mobile-team-a",
    storageBucket: "mobile-team-a.appspot.com",
    messagingSenderId: "233720108765",
    appId: "1:233720108765:web:c1ff51793c8afe846f2d34",
    measurementId: "G-EZ05HWJHTX"
  };


const app = initializeApp(firebaseConfig);

export { app, firebaseConfig };