import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSkeOlmXe6Ft5j5D8MmyWbvrV-6ATrvoE",
  authDomain: "twitter-reloaded-5a0c3.firebaseapp.com",
  projectId: "twitter-reloaded-5a0c3",
  storageBucket: "twitter-reloaded-5a0c3.appspot.com",
  messagingSenderId: "1079469885020",
  appId: "1:1079469885020:web:03d9fb32b62ef61be9c899"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);