import { initializeApp } from 'firebase/app';
import { getFirestore,addDoc,collection } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDK9i1Wm4M7-gWeVXi7NYD7N-c4NWtmKsY",
  authDomain: "silaas-acadamy.firebaseapp.com",
  projectId: "silaas-acadamy",
  storageBucket: "silaas-acadamy.appspot.com",
  messagingSenderId: "756868774058",
  appId: "1:756868774058:web:4030544634e0b3bd9878d3",
  measurementId: "G-5BV04RJR82"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {addDoc,collection}
