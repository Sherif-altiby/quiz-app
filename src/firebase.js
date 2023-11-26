import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCM1mejiye7uWorhT38nSmmmcXASJHMguU",
  authDomain: "quize-app-b3c2c.firebaseapp.com",
  projectId: "quize-app-b3c2c",
  storageBucket: "quize-app-b3c2c.appspot.com",
  messagingSenderId: "609693505596",
  appId: "1:609693505596:web:a27fea7a96356e6c428b39"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();