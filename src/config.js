import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKmfqvij-PTgmQlalj7UE0dk-dfJAz_Tc",
  authDomain: "netflix-clone-9ddfb.firebaseapp.com",
  projectId: "netflix-clone-9ddfb",
  storageBucket: "netflix-clone-9ddfb.firebasestorage.app",
  messagingSenderId: "290452787476",
  appId: "1:290452787476:web:110138fffb3ceab6447201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const TMDB_Access_Key="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjk5YjA3OWE2ZjEwYzNiZWRhZDdhMjk1YTk1Nzk4MyIsIm5iZiI6MTc1Mzc2NDY2Mi4wMDQsInN1YiI6IjY4ODg1MzM1NDk5M2YyNDk2ODI0NzVkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VHvBVD555autGEQ_tKFeMYucL6C8IyAmsufcJMHnM-M";

export {firebaseConfig, TMDB_Access_Key};