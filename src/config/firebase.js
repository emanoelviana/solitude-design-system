import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQX-FS6AuSYLHTG5R1e5s-r5KyID_6rSg",
  authDomain: "solitude-design-system.firebaseapp.com",
  projectId: "solitude-design-system",
  storageBucket: "solitude-design-system.firebasestorage.app",
  messagingSenderId: "1006878843272",
  appId: "1:1006878843272:web:186b499e6e02564ed7da3d",
  measurementId: "G-JKRFY7CV76",
};

export const app = initializeApp(firebaseConfig);

export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;
