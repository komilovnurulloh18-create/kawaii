import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js';
import {
  getFirestore,
  serverTimestamp,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  query,
  where,
  orderBy,
  limit,
} from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js';
import {
  getAuth,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js';

// Firestore must be enabled in Firebase Console (test mode is fine for now).
const firebaseConfig = {
  apiKey: "AIzaSyDYl8jP9i-CippkRRlc4PhLi8v3mwQXSlE",
  authDomain: "durdona-2b7b7.firebaseapp.com",
  projectId: "durdona-2b7b7",
  storageBucket: "durdona-2b7b7.firebasestorage.app",
  messagingSenderId: "660542701351",
  appId: "1:660542701351:web:7cdcbf4c0f42366480f302"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const nowTs = serverTimestamp;

export {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  onAuthStateChanged,
};