import {initializeApp} from "firebase/app"
import {getAnalytics} from 'firebase/analytics'
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBjduQ3e2mMdN7Q1oPjY0KN6WdYa3yRpaE",
  authDomain: "my-e-commerce-4b729.firebaseapp.com",
  projectId: "my-e-commerce-4b729",
  storageBucket: "my-e-commerce-4b729.appspot.com",
  messagingSenderId: "18246698018",
  appId: "1:18246698018:web:de16d79ffff1c7f36d767b",
  measurementId: "G-Y57HMH7R8J"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore()
const storage = getStorage(app);

export {app,analytics,firestore,storage};